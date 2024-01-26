import {useWeb3React} from "@web3-react/core";
import config from "config";
import {BigNumber} from "ethers";
import {Duration} from "luxon";
import {useEffect, useState} from "react";
import {useQuery} from "react-query";
import {
  AaveGovernanceV2__factory,
  ERC20__factory,
  GovernanceStrategy__factory,
  ProposalValidator__factory,
  StakedTokenV2__factory,
} from "types";
import {ProposalWithoutVotesStructOutput} from "types/AaveGovernanceV2";
import {
  formatAmount,
  getIpfsHashFromBytes32,
  ipfsClient,
  provider,
} from "utils";
import {useBlockNumber} from "./blocknumber";

type ProposalContent = {
  aip: number;
  author: string;
  basename: string;
  created: string;
  description: string;
  discussions: string;
  preview: string;
  shortDescription: string;
  status: string;
  title: string;
  updated: string;
};

export type ProposalWithoutVotes = {
  id: BigNumber;
  creator: string;
  executor: string;
  targets: string[];
  values: BigNumber[];
  signatures: string[];
  calldatas: string[];
  withDelegatecalls: boolean[];
  startBlock: BigNumber;
  endBlock: BigNumber;
  executionTime: BigNumber;
  forVotes: BigNumber;
  againstVotes: BigNumber;
  executed: boolean;
  canceled: boolean;
  strategy: string;
  ipfsHash: string;
  userVotingPower: BigNumber;
  poolVotingPower: BigNumber;
  status: string;
  isQuorumValid: boolean;
};

type AaveGovernanceInfo = {
  counts: number;
  proposals: ProposalWithoutVotes[];
  activeProposals: ProposalWithoutVotes[];
  // proposalsContent: any[];
};

export enum ProposalState {
  Pending,
  Canceled,
  Active,
  Failed,
  Succeeded,
  Queued,
  Expired,
  Executed,
}

export const isAaveStatusCompleted = {
  Pending: false,
  Canceled: true,
  Active: false,
  Failed: true,
  Succeeded: true,
  Queued: true,
  Expired: true,
  Executed: true,
  undefined: false,
};

const getQuorumValid = async (executor, proposalId, chainId) => {
  // do not get quorum on kovan as we target a MockAaveGovernance contract
  if (chainId == 42) return true;
  const pv = ProposalValidator__factory.connect(
    String(executor),
    provider(chainId),
  );
  return await pv.isQuorumValid(
    config[chainId || 1]?.AaveGovernanceV2,
    proposalId,
  );
};

const extractInfo = async (
  chainId: number,
  blockNumber: number,
): Promise<AaveGovernanceInfo> => {
  const ag = AaveGovernanceV2__factory.connect(
    config[chainId]?.AaveGovernanceV2,
    provider(chainId),
  );
  // methods does not exist on mock
  let counts;
  try {
    counts = await (await ag.getProposalsCount()).toNumber();
  } catch (e) {
    // should crash on kovan, still grab some fake proposals
    if (chainId == 42) {
      counts = 5;
    }
  }
  const aproposals: Promise<ProposalWithoutVotesStructOutput | number>[] = [];
  for (let i = 0; i < counts; i++) {
    aproposals.push(ag.getProposalById(i));
    aproposals.push(ag.getProposalState(i));
  }
  const proposals: ProposalWithoutVotes[] = Object.values(
    (await Promise.all(aproposals)).reduce((acc, cur, index) => {
      if (typeof cur == "number") {
        acc[index - 1] = {
          ...acc[index - 1],
          status: ProposalState[cur],
          isQuorumValid: getQuorumValid(
            acc[index - 1]?.executor,
            acc[index - 1].id,
            chainId,
          ),
        };
      } else {
        acc[index] = cur;
      }
      return acc;
    }, {}),
  );
  const activeProposals = proposals.filter(
    (p) => !p.executed && !p.canceled && blockNumber < p.endBlock.toNumber(),
  );
  // const aproposalsContent: any[] = [];
  // for (let i = 0; i < counts; i++) {
  //   aproposalsContent.push(
  //     ipfsClient.catJSON(getIpfsHashFromBytes32(proposals[i].ipfsHash))
  //   );
  // }
  // const proposalsContent = await Promise.all(aproposalsContent);
  return {
    counts,
    proposals,
    activeProposals,
    // proposalsContent,
  };
};

let aaveGovernanceInfo: AaveGovernanceInfo = {
  counts: 0,
  proposals: [],
  activeProposals: [],
  // proposalsContent: [],
};

export function useProposalContent(
  ipfsHash: string,
): ProposalContent | undefined {
  const {data} = useQuery(
    ["aaveProposalContent", ipfsHash],
    () => ipfsHash && ipfsClient.catJSON(getIpfsHashFromBytes32(ipfsHash)),
  );
  if (data) return data;
  // default value to test in kovan
  return {
    aip: 22,
    author: "Stefan Ionescu (@stefanionescu)",
    basename: "AIP-22",
    created: "2021-05-19T00:00:00.000Z",
    updated: "",
    description:
      "\n\n## Simple Summary\n\nReflexer Labs has designed a new type of stable asset called RAI, an ETH backed stablecoin with a moving peg. RAI aims to become an autonomous, crypto native and stable unit of account for the DeFi industry.\n\n## Abstract\n\nRAI is an asset backed only by ETH, governance-minimized, and programmed to maintain its own price stability without needing to peg to an external price reference like the USD. We believe these qualities make RAI ideal initially as an alternative to pegged-coins for use in DeFi as collateral and as a stable reserve asset, especially for programs where resilience is critical.\n\n## Motivation\n\nIntroducing more trustless, stable assets into Aave money markets will benefit both Aave and the ecosystem as a whole. The addition of RAI will diversify the protocol’s exposure to stable assets beyond traditional dollar-pegged stablecoins and provide enough bandwidth to grow the protocols TVL.\n\nCurrently, more than $4.56B worth of stable asset liquidity on Aave V1 and V2 is centralised (USDC, USDT, TUSD, BUSD, GUSD) while only $1.25B (~25%) is decentralised (DAI, sUSD). While this isn’t inherently a negative, introducing more decentralised, stable assets adds to Aave’s composability and resilience.\n\nRAI also stands to benefit from being able to expand its utility and liquidity across the largest lending protocol in the space, allowing for more experimentation to occur in the ongoing journey towards entirely trustless and decentralized stable-credit.\n\n## Specification\n\n1. What is the link between the author of the AIP and the Asset?\n\nCo-founder of Reflexer.\n\n2. Provide a brief high-level overview of the project and the token\n\nRAI is a decentralized non-pegged ETH-back stable asset meant to act as pristine collateral in DeFi.\n\n3. Explain positioning of token in the AAVE ecosystem. Why would it be a good borrow or collateral asset?\n\nOther stablecoins are either centralized or pegged to the dollar. RAI is neither of those and aligns perfectly with the ethos of trust-minimized finance.\n\n4. Provide a brief history of the project and the different components: DAO (is it live?), products (are the live?). How did it overcome some of the challenges it faced?\n\nRAI launched in February and has amassed over $100M in liquidity with $300M in value locked. RAI is governance minimised by design, as well as currently moving towards a grants DAO.\n\n5.How is the asset currently used?\n\nRAI is currently used as a trust-minmized alternative to other stablecoins. The goal is to drive adoption of RAI to be used as collateral in money markets, other synthetic assets, and more.\n\n6. Emission schedule\n\nThere is no emission schedule. Similar to DAI, RAI minted on demand when users lock ETH into the protocol.\n\n7. Token & protocol permissions and upgradability\n\nRight now the protocol is almost fully upgradeable. This includes anything from oracles, the contract that collects stability fees, the contract that liquidates positions, the one that auctions collateral etc. This is managed through a multisig with a 6 hour delay on any governance action. Managed by the Reflexer core team. The multisig manages the full system and will do so until rai is gov minimized.\n\nOn the other hand, the contract that keeps track of debt and collateral in all Safes (CDPs) cannot be upgraded.\n\n8. Market data (Market Cap, 24h Volume, Volatility, Exchanges, Maturity)\n\n    Market Cap: $67M\n    24h Volume: $8M\n    Volatility: Very Low\n    Maturity: Early-Mid\n\n9. Social channels data (Size of communities, activity on Github)\n\n10K followers on Twitter, 4.7K members on Discord, Github is highly active.\n\n10. Contracts date of deployments, number of transactions, number of holders for tokens\n\n    Date of Deployment: February 13th, 2021\n    Number of Transactions: 40,000+\n    Number of Holders: 2,000+\n\n## Rationale\n\nThe decision to design RAI as it is today came from the desire to achieve three main goals.\n\n1. DeFi Lego\n\n- Fork of MakerDAO’s Multi-Collateral DAI (MCD)\n- Governance-minimized in the Long Run\n- Algorithmic (PI controller) interest rates\n\n2. Self-stabilizing asset-backed credit facility\n\n- Like MakerDAO, users can unlock credit from their ETH\n- Unlike MakerDAO, debt/credit is not fixed at $1. Rather, it fluctuates based on supply and demand\n- RAI’s PI controller updates the system’s moving peg to balance demand for debt vs. credit\n\n3. Reserve asset for DeFi, alternative to pegged coins\n\n- More decentralized than dollar coins like USDC & USDT\n- Independent of USD inflationary monetary policy\n- Avoids being targeted by dollar coin regulation like the “Stable Act”\n- Backed by pure ETH, no centralized collateral\n\n## Implementation\n\nThe RAI price oracle will be served via [ChainLink](https://chain.link/), which includes the [RAI/ETH feed](https://docs.chain.link/docs/ethereum-addresses).\n\nRAI will only be used for depositing and lending, not as collateral. The following params are proposed:\n\n\n  - Strategy: rateStrategyStableTwo\n  - Base LTV As Collateral: 0\n  - Liquidation Threshold: 0\n  - Liquidation Bonus: 0\n  - Borrowing Enabled: true\n  - Stable BorrowRate Enabled: false\n  - Reserve Decimals: 18\n  - Reserve Factor: 2000\n\nFollowing the steps from the [Aave governance docs](https://docs.aave.com/developers/protocol-governance/governance/propose-your-token-as-new-aave-asset), the following contracts were generated:\n\n- Interest bearing aRAI: 0xe0065ea37791d336D78fcA0e870D04f700395B8d\n- Variable Debt variableDebtRAI: 0x2cDA07B4a6D9064292DD8d624883f07c27eE01B7\n- Stable Debt stableDebtRAI: 0xf37E202E587c6f63FD70F35C24Eb7f818CC5d01A\n- Strategy Implementation for RAI: 0xA7d4df837926cD55036175AfeF38395d56A64c22\n\n\n## Audits/Security Reviews\n\n[OpenZeppelin Audit for the Core Contracts](https://github.com/reflexer-labs/geb-audits/tree/master/open-zeppelin/core-contracts)\n\n[Quantstamp Audits for Periphery Contracts](https://github.com/reflexer-labs/geb-audits/tree/master/quantstamp/helper-contracts)\n\n[Solidified Audit for Periphery Contracts](https://github.com/reflexer-labs/geb-audits/tree/master/solidified/helper-contracts)\n\n**RAI Smart Contract Risk**: **C-**\n\nRAI has been on Mainnet Ethereum for a bit more than 100 days.\n\n**RAI Counterparty Risk**: **C-**\n\nCurrently the RAI protocol can be paused or modified by a multisig. The protocol is meant to be governance minimized by end of summer 2022 according to [this public roadmap](https://docs.reflexer.finance/ungovernance/governance-minimization-guide#4-governance-minimization-levels).\n\nRAI currently has 2,063 holders who performed more than 50,000 transfers.\n\n**RAI Market Risk**: **C**\n\nThe current RAI market cap is 33,126,214 USD. The average 24H trading volume in the past month has been 8,786,384,63 USD. RAI's normalized volatility over the last month is 1.49%.\n\n## References\n\nWhitepaper - https://github.com/reflexer-labs/whitepapers/blob/master/English/rai-english.pdf\n\nWebsite - https://reflexer.finance/\n\nTwitter - https://twitter.com/reflexerfinance\n\nDocs - https://docs.reflexer.finance/\n\nGithub - https://github.com/reflexer-labs\n\nToken Contract - https://etherscan.io/token/0x03ab458634910aad20ef5f1c8ee96f1d6ac54919\n\n## Test Cases\n\n## Implementation\n\n## Copyright\n\nCopyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).\n",
    discussions: "https://discord.gg/zCQYcFPEsE",
    preview:
      "## Simple Summary\n\nReflexer Labs has designed a new type of stable …",
    shortDescription: "Create a new Aave V2 market for the RAI stablecoin",
    status: "Proposed",
    title: "Add RAI to Aave V2",
  };
}

export function useAaveGovernance(): AaveGovernanceInfo {
  const [aaveGovernance, setAaveGovernance] = useState(aaveGovernanceInfo);
  const bn = useBlockNumber();
  const {chainId} = useWeb3React();
  const {data, isLoading} = useQuery(["aaveGovernance", chainId, bn], () =>
    extractInfo(chainId || 1, bn),
  );
  useEffect(() => {
    if (data) setAaveGovernance(data);
  }, [JSON.stringify(data)]);
  return aaveGovernance;
}

export function useAaveProposal(pid: string): ProposalWithoutVotes | undefined {
  const [proposal, setProposal] = useState<ProposalWithoutVotes>();
  const {chainId, account} = useWeb3React();
  const getQuorumValid = async (executor, proposalId) => {
    // do not get quorum on kovan as we target a MockAaveGovernance contract
    if (chainId == 42) return true;
    const pv = ProposalValidator__factory.connect(
      String(executor),
      provider(chainId),
    );
    return await pv.isQuorumValid(
      config[chainId || 1]?.AaveGovernanceV2,
      proposalId,
    );
  };
  const ag = AaveGovernanceV2__factory.connect(
    config[chainId || 1].AaveGovernanceV2,
    provider(chainId),
  );
  const {data} = useQuery(["aaveProposal", account, pid, chainId], async () => {
    try {
      const [proposal, status, governanceStrategy] = await Promise.all([
        ag.getProposalById(pid),
        ag.getProposalState(pid),
        ag.getGovernanceStrategy(),
      ]);
      const gs = GovernanceStrategy__factory.connect(
        governanceStrategy,
        provider(chainId),
      );
      const [isQuorumValid, userVotingPower, poolVotingPower] =
        await Promise.all([
          getQuorumValid(proposal?.executor, proposal?.id),
          gs.getVotingPowerAt(account || "", proposal.startBlock),
          gs.getVotingPowerAt(
            config[chainId || 1].AavePool,
            proposal.startBlock,
          ),
        ]);
      return {
        ...proposal,
        status: ProposalState[status],
        isQuorumValid,
        userVotingPower,
        poolVotingPower,
      };
    } catch (e) {}
  });
  useEffect(() => {
    if (data) setProposal(data);
  }, [JSON.stringify(data)]);
  return proposal;
}

type ProposalStatistics = {
  yay: number; // yes vote in percent
  nay: number; // no vote in percent
  expiration: {
    days: number;
    hours: number;
  };
};

export function useVoteStatistics(
  proposal?: ProposalWithoutVotes,
): ProposalStatistics {
  const blockNumber = useBlockNumber();
  const [statistics, setStatistics] = useState<ProposalStatistics>({
    yay: 0,
    nay: 0,
    expiration: {days: 0, hours: 0},
  });

  useEffect(() => {
    if (!proposal || !proposal.endBlock) return;
    // @todo find out the exact decimals
    const totalVotes = formatAmount(
      proposal.forVotes?.add(proposal.againstVotes) || 0,
      18,
    );

    const yay = (formatAmount(proposal.forVotes, 18) / totalVotes) * 100;
    const nay = (formatAmount(proposal.againstVotes, 18) / totalVotes) * 100;
    const blockintervals = (proposal.endBlock.toNumber() - blockNumber) * 13;
    // with an average of 13s/block
    const expiration = Duration.fromMillis(blockintervals * 1000);
    const expirationDays = Math.floor(expiration.as("day"));
    const expirationHours = Math.floor(
      expiration.minus(Duration.fromObject({days: expirationDays})).as("hours"),
    );

    setStatistics({
      yay,
      nay,
      expiration: {days: expirationDays, hours: expirationHours},
    });
  }, [proposal?.id, blockNumber]);

  return statistics;
}

export function useStkAaveRewards() {
  const [apr, setApr] = useState({apr: 0, claimable: 0});
  const {chainId, account} = useWeb3React();

  const {data} = useQuery(["stkAaveApr", chainId], async () => {
    const st = StakedTokenV2__factory.connect(
      config[chainId || 1].StkAave,
      provider(chainId),
    );

    const at = ERC20__factory.connect(
      config[chainId || 1].AaveToken,
      provider(chainId),
    );

    const [rewards, pendingRewards, totalStakes, aaveDecimals] =
      await Promise.all([
        st.assets(st.address),
        st.getTotalRewardsBalance(account || ""),
        at.balanceOf(st.address),
        at.decimals(),
      ]);

    const apr = rewards.emissionPerSecond
      .mul(BigNumber.from(60 * 60 * 24 * 365 * 100))
      .div(totalStakes)
      .toNumber();
    return {apr, claimable: formatAmount(pendingRewards, aaveDecimals)};
  });

  useEffect(() => {
    if (data) setApr(data);
  }, [JSON.stringify(data), chainId]);

  return apr;
}

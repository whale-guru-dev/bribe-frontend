import {formatEther, formatUnits} from "@ethersproject/units";
import {useWeb3React} from "@web3-react/core";
import config from "config";
import {BigNumber, ethers} from "ethers";
import {useMemo, useState} from "react";
import {useQuery} from "react-query";
import {AavePool, AavePool__factory} from "types";
import {getSigner, provider} from "utils";
import {useAaveGovernance} from "./aaveGovernance";
import {useBlockNumber} from "./blocknumber";
import {extractInfo as extractERC20Info, TokenInfo} from "./erc20";

type AavePoolInfo = {
  // tvl: string;
  aave?: TokenInfo;
  bribe?: TokenInfo;
  stkAave?: TokenInfo;
  wrappedAave?: TokenInfo;
  wrappedStkAave?: TokenInfo;
  // depositedAave: string;
  // depositedStkAave: string;
  bidAsset?: TokenInfo;
  govToken?: TokenInfo;
  // pendingReward: string;
  pendingUSDCReward: string;
  pendingBribeReward: string;
  pendingAaveReward: string;
  bids: {
    [key: string]: {
      totalVotes: BigNumber;
      proposalStartBlock: BigNumber;
      highestBid: BigNumber;
      endTime: BigNumber;
      support: boolean;
      voted: boolean;
      highestBidder: string;
    };
  };
  bribeRewardConfig?: {
    rewardAmountDistributedPerSecond: BigNumber;
    startTimestamp: BigNumber;
    endTimestamp: BigNumber;
  };
};

const extractInfo = async (
  account: string,
  proposalCounts: number,
  chainId?: number,
): Promise<AavePoolInfo> => {
  try {
    const ap = AavePool__factory.connect(
      chainId ? config[chainId].AavePool : config[1].AavePool,
      provider(chainId),
    );
    const awrappedAave = ap.wrapperAaveToken();
    const awrappedStkAave = ap.wrapperStkAaveToken();
    const astkAave = ap.stkAaveToken();
    const aAave = ap.aaveToken();
    const aBribe = ap.bribeToken();
    const abidAsset = ap.bidAsset();
    const atotalRewards = ap.rewardBalanceOf(account).catch((e) => e);
    const abribeRewardConfig = ap.bribeRewardConfig();
    const abids: ReturnType<AavePool["bids"]>[] = [];
    for (let i = 0; i < proposalCounts; i++) {
      const p = ap.bids(i).catch((e) => e);
      abids.push(p);
    }
    const [
      bidAsset,
      aave,
      bribe,
      stkAave,
      wrappedAave,
      wrappedStkAave,
      totalRewards,
      bribeRewardConfig,
    ] = await Promise.all([
      abidAsset,
      aAave,
      aBribe,
      astkAave,
      awrappedAave,
      awrappedStkAave,
      atotalRewards,
      abribeRewardConfig,
    ]);
    const bidslist = await Promise.all(abids);
    const bids = (bidslist || []).reduce((acc, cur, index) => {
      acc[index] = cur;
      return acc;
    }, {});
    const abidAssetInfo = extractERC20Info(bidAsset, chainId);
    const awrappedAaveInfo = extractERC20Info(wrappedAave, chainId);
    const aaaveInfo = extractERC20Info(aave, chainId);
    const awrappedStkAaveInfo = extractERC20Info(wrappedStkAave, chainId);
    const astkAaveInfo = extractERC20Info(stkAave, chainId);
    const abribeInfo = extractERC20Info(bribe, chainId);
    const [
      bidAssetInfo,
      aaveInfo,
      bribeInfo,
      stkAaveInfo,
      wrappedAaveInfo,
      wrappedStkAaveInfo,
    ] = await Promise.all([
      abidAssetInfo,
      aaaveInfo,
      abribeInfo,
      astkAaveInfo,
      awrappedAaveInfo,
      awrappedStkAaveInfo,
    ]);
    return {
      bidAsset: bidAssetInfo,
      aave: aaveInfo,
      bribe: bribeInfo,
      stkAave: stkAaveInfo,
      wrappedAave: wrappedAaveInfo,
      wrappedStkAave: wrappedStkAaveInfo,
      bids,
      // currentAccountReward: reward,
      pendingUSDCReward: formatUnits(
        totalRewards.totalPendingBidReward || BigNumber.from(0),
        bidAssetInfo.decimals,
      ),
      pendingBribeReward: formatEther(
        totalRewards.totalPendingBribeReward || BigNumber.from(0),
      ),
      pendingAaveReward: formatUnits(
        totalRewards.totalPendingStkAaveReward || BigNumber.from(0),
      ),
      bribeRewardConfig,
      // tvl: formatUnits(totalSupply, decimals),
    };
  } catch (e) {
    console.log(e);
    return aavePoolInfo;
  }
  // ap.bid
};

let aavePoolInfo: AavePoolInfo = {
  bids: {},
  pendingAaveReward: "",
  pendingUSDCReward: "",
  pendingBribeReward: "",
};

export function useAavePoolInfo(): AavePoolInfo {
  const {account, chainId} = useWeb3React();
  const gov = useAaveGovernance();
  const [aavePool, setAavePool] = useState(aavePoolInfo);
  const bn = useBlockNumber();
  const {data} = useQuery(["aavePool", gov.counts, chainId, bn], () =>
    extractInfo(account || "", gov.counts, chainId),
  );
  useMemo(() => {
    if (data) setAavePool(data);
  }, [JSON.stringify(data)]);
  return aavePool;
}

export const useAavePool = () => {
  const {library, account, chainId} = useWeb3React();
  if (account && chainId) {
    return new AavePool__factory(getSigner(library, account as string)).attach(
      config[chainId].AavePool,
    );
  } else {
    return AavePool__factory.connect(
      config[1].AavePool,
      provider(1),
    );
  }
};

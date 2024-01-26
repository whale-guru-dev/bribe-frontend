import {commify, formatEther} from "@ethersproject/units";
import {useWeb3React} from "@web3-react/core";
import config, {geckoBribeID} from "config";
import {
  useAaveGovernance,
  useAaveProposal,
  useProposalContent,
  useVoteStatistics,
} from "hooks/aaveGovernance";
import {useAavePoolInfo} from "hooks/aavePool";
import {usePriceFromGecko} from "blockchain-integration";
import {RewardsBox, ActiveProposalInfo, ProjectsTable} from "components/Home";
import {StakeInfo, StakeBribeBox, StakeUnstakeModal} from "components/Project";
import {AaveIconWithColor, SushiIcon, YearnIcon} from "components/SVGicons";
import {formatUnits} from "ethers/lib/utils";
import {useUserShare} from "hooks/userShare";
import {useMemo, useState} from "react";
import {deposit, harvest, withdraw} from "actions/liquidityMining";
import {BribeTokenIcon} from "components/SVGicons";
import {BigNumber} from "ethers";
import {useDividends, useDividendsInfo} from "hooks/dividends";
import {useAllowances, useBalances} from "hooks/erc20";
import {increaseAllowance, approve} from "actions/aavePool";
import {useLiquidityMining, useLMInfo} from "hooks/liquidityMining";

const HomePage = () => {
  const [openModalBribe, setOpenModalBribe] = useState(false);
  const [stakeAction, setStakeAction] = useState("");
  const {account, library, chainId, ...others} = useWeb3React();
  const aaveGovernance = useAaveGovernance();
  const active = aaveGovernance.activeProposals?.[0];
  const proposal = useAaveProposal(active?.id.toString());
  const proposalContent = useProposalContent(active?.ipfsHash);
  const voteStatistics = useVoteStatistics(active);
  const aavePool = useAavePoolInfo();
  const lmInfo = useLMInfo();
  const lm = useLiquidityMining();
  const [aavePrice, bribePrice] = usePriceFromGecko(["aave", geckoBribeID]);
  const [poolAaveBal, poolStkAaveBal] = useBalances(
    [aavePool.aave?.address, aavePool.stkAave?.address],
    config[chainId ? chainId : 1].AavePool,
  );
  const [userAaveBal, userStkAaveBal] = useBalances(
    [aavePool.wrappedAave?.address, aavePool.wrappedStkAave?.address],
    account,
  );
  const userShare = useUserShare();
  const estimatedBribe = useMemo(() => {
    return (
      (proposal &&
        !proposal.userVotingPower.isZero() &&
        !proposal.poolVotingPower.isZero() &&
        Number(
          formatUnits(
            proposal.userVotingPower
              .div(proposal.poolVotingPower)
              .mul(aavePool.bids[active?.id?.toString()]?.highestBid || 0),
            aavePool.bidAsset?.decimals,
          ),
        ) * 0.84) ||
      0
    );
  }, [JSON.stringify(proposal), JSON.stringify(aavePool)]);
  const [slpAllowance] = useAllowances([lmInfo.lpToken], account, lm.address);
  const [slpBalance] = useBalances([lmInfo.lpToken], account);

  return (
    <div className="mb-20 w-full">
      {/* Stake/Unstake Modal for Bribe Tokens */}
      <StakeUnstakeModal
        tokenKind="SLP-ETH/BRB"
        open={openModalBribe}
        setModalAction={setOpenModalBribe}
        stakeAction={stakeAction}
        allowances={{SLP: slpAllowance}}
        decimals={18}
        tokenList={[
          {
            tokenName: "SLP",
            icon: <BribeTokenIcon />,
          },
        ]}
        balances={{
          SLP:
            stakeAction == "WITHDRAW"
              ? Number(lmInfo.userInfo.amount)
              : slpBalance,
        }}
        stake={(amount: BigNumber, selected: string) => {
          slpAllowance < Number(formatEther(amount))
            ? approve(
                lmInfo.lpToken,
                {account, library, chainId, ...others},
                amount,
                lm.address,
              )
            : deposit(lm, {account, library, chainId, ...others}, amount).then(
                (_) => setOpenModalBribe(false),
              );
        }}
        deposit={(amount: BigNumber, selected: string) => {
          slpAllowance < Number(formatEther(amount))
            ? approve(
                lmInfo.lpToken,
                {account, library, chainId, ...others},
                amount,
                lm.address,
              )
            : deposit(lm, {account, library, ...others}, amount).then((_) =>
                setOpenModalBribe(false),
              );
        }}
        withdraw={(amount: BigNumber, selected: string) => {
          withdraw(
            lm,
            {account, library, chainId, ...others},
            amount,
            true,
          ).then((_) => setOpenModalBribe(false));
        }}
      />

      <div className="bg-secondary-gray-lightest dark:bg-secondary-gray-lightest-alt pt-24 pb-16">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-end content-container">
          <div className="flex flex-col items-start py-8 lg:py-0 lg:pt-8 flex-grow w-full max-w-sm">
            <h1 className="font-bold lg:text-left">BRIBE</h1>
            <h3 className="font-light">PROTOCOL</h3>
            <div>
              <h5 className="">Total value locked</h5>
              <h5 className="font-bold">
                $
                {commify(
                  (
                    ((poolAaveBal || 0) + (poolStkAaveBal || 0)) *
                    (aavePrice || 0)
                  ).toFixed(2) || 0,
                )}
              </h5>
            </div>

            {/* <div className="flex justify-center lg:justify-start">
              <RewardsBox
                title="Bribe Rewards"
                value={userShare.bribeRewards ? userShare.bribeRewards : "0"}
                action="Harvest Bribe"
                // canClaim={Number(aavePool.pendingBribeReward) > 0}
                canClaim={true}
                classes="mr-3"
              />
              <RewardsBox
                title="USDC Rewards"
                value={`$ ${
                  aavePool.pendingUSDCReward ? aavePool.pendingUSDCReward : "0"
                }`}
                action="Claim USDC"
                // canClaim={Number(aavePool.pendingUSDCReward) > 0}
                canClaim={true}
              />
            </div> */}
          </div>

          <ActiveProposalInfo
            className="p-4 md:p-6 lg:p-8 mt-5 rounded-lg lg:ml-5 flex-grow w-full max-w-sm"
            proposal={{
              name: proposalContent?.basename || "--",
              nextVoteEnds: proposalContent?.basename
                ? voteStatistics.expiration.days +
                  " days, " +
                  voteStatistics.expiration.hours +
                  " hours"
                : "--",
              highestBid: Number(
                formatUnits(
                  aavePool.bids[active?.id?.toString()]?.highestBid || 0,
                  aavePool.bidAsset?.decimals,
                ),
              ),
              shareOfPool: userShare.poolShare,
              estimatedBribe: estimatedBribe,
              bidApr: userShare.usdcAPR,
            }}
          />
        </div>
      </div>
      <ProjectsTable
        projects={[
          {
            name: "Aave",
            icon: <AaveIconWithColor />,
            bidApr: userShare.usdcAPR,
            bribeApr: userShare.bribeAPR,
            bribeRewards: userShare.bribeRewards,
            usdcRewards: userShare.usdcRewards,
            estimatedBidReward: userShare.estimatedUSDCRewards,
            highestBid: formatUnits(
              aavePool.bids[active?.id?.toString()]?.highestBid || 0,
              aavePool.bidAsset?.decimals,
            ),
            tvl: commify(
              (
                ((poolAaveBal || 0) + (poolStkAaveBal || 0)) *
                (aavePrice || 0)
              ).toFixed(2) || 0,
            ),
            deposit: commify(
              (
                ((userAaveBal || 0) + (userStkAaveBal || 0)) *
                (aavePrice || 0)
              ).toFixed(2) || 0,
            ),
          },
        ]}
      />
      {config[chainId || 1].LiquidityMining ? (
        <div className="mt-36 bg-secondary-gray-lightest dark:bg-secondary-gray-lightest-alt pt-4 pb-16">
          <div className="flex flex-col items-start content-container">
            <StakeInfo
              title="Earn additional rewards for being a BRIBE liquidity Provider"
              subtitle="Deposit SLP-ETH/BRB and earn BRIBE"
              pending={commify(lmInfo.userInfo.pending || "")}
              currentAPR={0} // needs to be replaced with actual APR
              tvl={commify(lmInfo.poolInfo.supply || "")} // needs to be replaced with actual TVL
            >
              <div>
                {/* needs to be replaced with actual tooltip info to be displayed */}
                <p>APR</p>
              </div>
            </StakeInfo>
            <StakeBribeBox
              stakedInfo={{
                amount: Number(lmInfo.userInfo.amount),
                isEnabled: true,
                isStaked: !!Number(lmInfo.userInfo.amount),
                stakedAmountDollarValue: Number(
                  (Number(lmInfo.userInfo.amount) * 1).toFixed(2),
                ),
              }}
              stakeLabel="Stake SLP-ETH/BRB tokens"
              tokenLabel="SLP-ETH/BRB staked"
              isModalOpen={false}
              setOpenModal={setOpenModalBribe}
              setStakeAction={setStakeAction}
            />
          </div>
        </div>
      ) : (
        <span />
      )}
    </div>
  );
};

export default HomePage;

import {useWeb3React} from "@web3-react/core";
import {
  claimReward,
  deposit,
  increaseAllowance,
  withdraw,
} from "actions/aavePool";
import {stake, unstake} from "actions/dividends";
import {usePriceFromGecko} from "blockchain-integration";
import {PoolDropdown} from "components/Claim";
import {
  AaveProposalBox,
  ActiveProposalTabs,
  CurrentStateTable,
  ProjectTitle,
  StakeBribeBox,
  StakeInfo,
  StakeTokenBox,
  StakeUnstakeModal,
} from "components/Project";
import {
  AaveIconWithColor,
  AaveIconWithColorSmall,
  BribeTokenIcon,
  ExternalLinkIcon,
  UsdcIcon,
} from "components/SVGicons";
import config, {geckoBribeID} from "config";
import {BigNumber} from "ethers";
import {formatUnits} from "ethers/lib/utils";
import {useStkAaveRewards} from "hooks/aaveGovernance";
import {useAavePool, useAavePoolInfo} from "hooks/aavePool";
import {useDividends, useDividendsInfo} from "hooks/dividends";
import {useAllowances, useBalances} from "hooks/erc20";
import {useUserShare} from "hooks/userShare";
import {useState} from "react";
import {commify} from "utils";

const Aave = () => {
  const {account, library, chainId, ...others} = useWeb3React();
  const [openModalToken, setOpenModalToken] = useState(false);
  const [openModalBribe, setOpenModalBribe] = useState(false);
  const [stakeAction, setStakeAction] = useState("");
  const dividends = useDividends();
  const dividendsInfo = useDividendsInfo();
  const pool = useAavePool();
  const poolInfo = useAavePoolInfo();
  const userShare = useUserShare();
  const us = useUserShare();
  const rw = useStkAaveRewards();
  const [poolAaveBalance, poolStkAaveBalance] = useBalances(
    [poolInfo.aave?.address, poolInfo.stkAave?.address],
    config[chainId || 1].AavePool,
  );
  const [
    userBribeBalance,
    userAaveBalance,
    userStkAaveBalance,
    userRewardsDividendsBalance,
    userStakedDividendsBalance,
    waaveBalance,
    wstkAaveBalance,
  ] = useBalances(
    [
      poolInfo.bribe?.address,
      poolInfo.aave?.address,
      poolInfo.stkAave?.address,
      dividendsInfo.rewardAsset?.address,
      dividends.address,
      poolInfo.wrappedAave?.address,
      poolInfo.wrappedStkAave?.address,
    ],
    account,
  );
  const tvp = poolAaveBalance + poolStkAaveBalance;
  const yvp = waaveBalance + wstkAaveBalance;
  const [aavePrice, bribePrice] = usePriceFromGecko(["aave", geckoBribeID]);
  const [bribeAllowance] = useAllowances(
    [dividendsInfo.stakeAsset.address],
    account,
    dividends.address,
  );
  const [aaveAllowance, stkAaveAllowance] = useAllowances(
    [poolInfo.aave?.address, poolInfo.stkAave?.address],
    account,
    pool.address,
  );

  return (
    <div className="mx-auto w-full">
      {/* Stake/Unstake Modal for Governance Tokens */}
      <StakeUnstakeModal
        open={openModalToken}
        setModalAction={setOpenModalToken}
        stakeAction={stakeAction}
        decimals={poolInfo?.aave?.decimals || 18}
        allowances={{
          aave: aaveAllowance,
          stkAave: stkAaveAllowance,
        }}
        tokenList={[
          {
            tokenName: "aave",
            icon: <AaveIconWithColorSmall />,
          },
          {
            tokenName: "stkAave",
            icon: <AaveIconWithColorSmall />,
          },
        ]}
        balances={{
          aave: stakeAction == "WITHDRAW" ? waaveBalance : userAaveBalance,
          stkAave:
            stakeAction == "WITHDRAW" ? wstkAaveBalance : userStkAaveBalance,
        }}
        stake={(amount: BigNumber, selected: string) => {
          eval(selected + "Allowance") <
          Number(formatUnits(amount, poolInfo[selected]?.decimals))
            ? increaseAllowance(
                poolInfo[selected]?.address,
                {account, library, ...others},
                amount,
                pool.address,
              )
            : deposit(
                pool,
                {account, library, ...others},
                poolInfo[selected]?.address,
                amount,
              );
        }}
        deposit={(amount: BigNumber, selected: string) => {
          eval(selected + "Allowance") <
          Number(formatUnits(amount, poolInfo[selected]?.decimals))
            ? increaseAllowance(
                poolInfo[selected]?.address,
                {account, library, ...others},
                amount,
                pool.address,
              )
            : deposit(
                pool,
                {account, library, ...others},
                poolInfo[selected]?.address,
                amount,
              );
        }}
        withdraw={(amount: BigNumber, selected: string) => {
          withdraw(
            pool,
            {account, library, ...others},
            poolInfo[selected]?.address,
            amount,
          );
        }}
      />

      {/* Stake/Unstake Modal for Bribe Tokens */}
      <StakeUnstakeModal
        open={openModalBribe}
        setModalAction={setOpenModalBribe}
        stakeAction={stakeAction}
        allowances={{bribe: bribeAllowance}}
        decimals={dividendsInfo?.stakeAsset?.decimals || 18}
        tokenList={[
          {
            tokenName: "bribe",
            icon: <BribeTokenIcon />,
          },
        ]}
        balances={{
          bribe:
            stakeAction == "WITHDRAW"
              ? userStakedDividendsBalance
              : userBribeBalance,
        }}
        stake={(amount: BigNumber, selected: string) => {
          bribeAllowance <
          Number(formatUnits(amount, dividendsInfo.stakeAsset.decimals))
            ? increaseAllowance(
                dividendsInfo.stakeAsset.address,
                {account, library, ...others},
                amount,
                dividends.address,
              )
            : stake(
                dividends,
                {account, library, ...others},
                amount,
                false,
              ).then((_) => setOpenModalBribe(false));
        }}
        deposit={(amount: BigNumber, selected: string) => {
          bribeAllowance <
          Number(formatUnits(amount, dividendsInfo.stakeAsset.decimals))
            ? increaseAllowance(
                dividendsInfo.stakeAsset.address,
                {account, library, ...others},
                amount,
                dividends.address,
              )
            : stake(
                dividends,
                {account, library, ...others},
                amount,
                false,
              ).then((_) => setOpenModalBribe(false));
        }}
        withdraw={(amount: BigNumber, selected: string) => {
          unstake(dividends, {account, library, ...others}, amount, false).then(
            (_) => setOpenModalBribe(false),
          );
        }}
      />

      <div className="bg-secondary-gray-lightest dark:bg-secondary-gray-lightest-alt pt-24 pb-16">
        {/* Current state table */}
        <ProjectTitle projectName={"Aave"} />

        <CurrentStateTable
          currentProjectState={{
            yourVotesValue: yvp,
            aprValue: Number(userShare.bribeAPR || 0),
            projectName: "Aave + stkAave",
            shareOfPoolValue: ((yvp * 100) / (tvp || 1)).toFixed(2),
            totalVotingPowerValue: tvp,
          }}
        />
      </div>
      {/* Stake actions */}
      <div className="w-full">
        <h4 className="content-container mt-20">
          <span className="font-bold">Stake</span>
          <span className="font-light"> Tokens</span>
        </h4>
        <div className="content-container flex flex-col lg:flex-row lg:justify-between lg:space-x-4">
          <div className="w-full lg:w-1/2">
            <StakeInfo
              title="Earn interest for delegating your votes"
              subtitle="Deposit AAVE / StkAave                                                            "
              currentAPR={Number(userShare.bribeAPR) || 0}
              // tvl={Number((tvp * aavePrice).toFixed(2))}
            >
              {/* tooltip token apr */}
              <div className="max-w-[250px] lg:max-w-sm">
                <p className="caption">
                  USDC = {us.usdcAPR || "--"}% from bidding activity on Aave
                  Pool
                </p>
                <strong className="caption text-xs">
                  Aave votes staked in this Bribe Pool are incentivized by
                  bidders renting the voting power for use in governance
                </strong>
                <p className="caption">
                  BRIBE = {us.bribeAPR || "--"}% from Aave Pool BRIBE liquidity
                  mining
                </p>
                {/* usdcBribeAPR missing below  */}
                <p className="caption">
                  Aave = {rw.apr.toFixed(2) || "--"}% from Aave Safety Module
                  stkAave rewards
                </p>
              </div>
            </StakeInfo>
            <StakeTokenBox
              stakedInfo={{
                amount: waaveBalance + wstkAaveBalance,
                isEnabled: true,
                isStaked: !!(waaveBalance + wstkAaveBalance),
                stakedAmountDollarValue: Number(
                  ((waaveBalance + wstkAaveBalance) * aavePrice).toFixed(2),
                ),
              }}
              isModalOpen={openModalToken}
              setOpenModal={setOpenModalToken}
              setStakeAction={setStakeAction}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <StakeInfo
              title="Bribe stakers earn more from each bid"
              subtitle="Deposit BRIBE"
              currentAPR={0}
              // tvl={Number((tvp * aavePrice).toFixed(2))}
            >
              {/* tooltip bribe apr  */}
              <div className="max-w-[250px] lg:max-w-sm">
                <p className="caption">
                  USDC = {"0.00"}% from bidding activity on Aave pool
                </p>
                <strong className="caption text-xs">
                  Bribe staked in this pool is incentivized by bidders using
                  Bribe
                </strong>
              </div>
            </StakeInfo>
            <StakeBribeBox
              stakedInfo={{
                amount: Number(userStakedDividendsBalance),
                isEnabled: true,
                isStaked: !!Number(userStakedDividendsBalance),
                stakedAmountDollarValue: Number(
                  (Number(userStakedDividendsBalance) * bribePrice).toFixed(2),
                ),
              }}
              isModalOpen={openModalBribe}
              setOpenModal={setOpenModalBribe}
              setStakeAction={setStakeAction}
            />
          </div>
        </div>
      </div>

      {/* <div className="content-container flex flex-wrap justify-center mt-8 lg:flex-nowrap lg:space-x-4">
        <BribeEarnedBox
          earned={Number(poolInfo.pendingBribeReward).toFixed(2)}
          bribeAddress={poolInfo.bribe?.address as string}
          collectEnabled={!!Number(poolInfo.pendingBribeReward)}
          bribeRewardTotalDollarValue={Number(
            (Number(poolInfo.pendingBribeReward) * bribePrice).toFixed(2),
          )}
        />
      </div> */}

      {/* Claim widget */}

      <div className="mb-20 w-full ">
        {/* claim rewards section  */}
        <div className="content-container mt-24 mb-8">
          <h4 className="font-bold">
            Claim <span className="font-normal">Rewards</span>
          </h4>
        </div>
        {/* Aave Pools -> PoolDropdown is a reusable component to display any number of pools */}
        <PoolDropdown
          collectAllEnabled={!!us.bribeRewards || !!us.usdcRewards}
          PoolIcon={<AaveIconWithColor />}
          poolName="Aave"
          aprTotal={commify(Number(us.bribeAPR) + Number(us.usdcAPR) + rw.apr)}
          usdcBribeAPR={"0.00"} // actual value missing and needs to replace the hard-coded value
          usdcAPR={us.usdcAPR || "--"}
          bribeAPR={us.bribeAPR || "--"}
          aaveAPR={rw.apr.toFixed(2) || "--"}
          earnedTotal={commify(
            Number(us.usdcRewards) +
              Number((Number(us.bribeRewards) * bribePrice).toFixed(2)) +
              rw.claimable,
          )}
          claimAll={() =>
            claimReward(pool, {account, library, chainId, ...others})
          }
          // claimAll={} function for claiming all the rewards from pool
          poolRewards={[
            {
              icon: <BribeTokenIcon />,
              name: "BRIBE",
              apr: commify(us.bribeAPR),
              reward: commify(Number(us.bribeRewards) * bribePrice),
            },
            {
              icon: <UsdcIcon />,
              name: "USDC",
              apr: commify(us.usdcAPR),
              reward: commify(us.usdcRewards),
            },
            {
              icon: <AaveIconWithColorSmall />,
              name: "Aave",
              apr: commify(rw.apr),
              reward: commify(us.aaveRewards),
            },
          ]}
        />
      </div>

      {/* Active proposals */}
      <div className="content-container mt-32 mb-8">
        <h4 className="font-bold">
          Active<span className="font-normal"> Proposals</span>
        </h4>
      </div>
      <ActiveProposalTabs />
      <div className="content-container">
        <AaveProposalBox />
      </div>

      <div className="content-container  mt-8 mb-16">
        <p className="flex items-center text-secondary-topaz dark:text-secondary-topaz-alt">
          <a
            className="flex items-center"
            href="https://aave.github.io/aip/"
            target="_blank"
          >
            See all proposals on Aave Governance
            <ExternalLinkIcon className="ml-2 fill-current text-secondary-topaz dark:text-secondary-topaz-alt" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Aave;

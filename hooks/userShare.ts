import {useEffect, useMemo, useState} from "react";
import {useWeb3React} from "@web3-react/core";
import {usdc, usePriceFromGecko} from "blockchain-integration";
import config, {geckoBribeID} from "config";
import {useAaveGovernance} from "./aaveGovernance";
import {useAavePoolInfo} from "./aavePool";
import {useBalance, useBalances} from "./erc20";
import {formatEther, formatUnits, parseUnits} from "ethers/lib/utils";
import {commify} from "utils";

type UserShare = {
  poolShare?: string;
  bribeAPR?: string;
  bribeRewards?: string;
  usdcAPR?: string;
  usdcRewards?: string;
  estimatedUSDCRewards?: string;
  aaveRewards?: string;
  aaveAPR?: string;
};

export const useUserShare = (): UserShare => {
  const {account, chainId} = useWeb3React();
  const gov = useAaveGovernance();
  const poolInfo = useAavePoolInfo();
  const [userShare, setUserShare] = useState({});
  const active = gov.activeProposals?.[0];
  const currentBid = poolInfo.bids[active?.id?.toString()];
  const [poolStkAaveBalance, poolAaveBalance] = useBalances(
    [poolInfo.stkAave?.address, poolInfo.aave?.address],
    config[chainId || 1].AavePool,
  );
  const [waaveBalance, wstkAaveBalance] = useBalances(
    [poolInfo.wrappedAave?.address, poolInfo.wrappedStkAave?.address],
    account,
  );
  const tvp = poolAaveBalance + poolStkAaveBalance || 0;
  const yvp = waaveBalance + wstkAaveBalance || 0;
  const [aavePrice, bribePrice] = usePriceFromGecko(["aave", geckoBribeID]);
  useMemo(() => {
    if (poolInfo?.bribeRewardConfig?.rewardAmountDistributedPerSecond) {
      const bribeRewardPerYear =
        Number(
          formatEther(
            poolInfo?.bribeRewardConfig?.rewardAmountDistributedPerSecond,
          ),
        ) *
        365 *
        24 *
        3600;
      const highestBid = Number(
        formatUnits(currentBid?.highestBid || 0, poolInfo.bidAsset?.decimals),
      );
      // we consider an 8 days voting period on average for proposals
      const usdcRewardPerYear = (highestBid / 8) * 365 * 0.84;
      const tvpDollar = tvp * aavePrice;
      const poolShare = (yvp && yvp / tvp) || 0;
      const bribeAPR =
        (tvpDollar && (bribeRewardPerYear / tvpDollar) * 100) || 0;
      const usdcAPR = (tvpDollar && (usdcRewardPerYear / tvpDollar) * 100) || 0;
      const estimatedUSDCReward = poolShare * (highestBid || 0) * 0.84;
      setUserShare({
        poolShare: (poolShare * 100).toFixed(2),
        bribeAPR: bribeAPR.toFixed(2),
        bribeRewards: Number(poolInfo.pendingBribeReward).toFixed(2),
        usdcAPR: usdcAPR.toFixed(2),
        estimatedUSDCRewards: estimatedUSDCReward.toFixed(2),
        usdcRewards: poolInfo.pendingUSDCReward,
        aaveRewards: commify(poolInfo.pendingAaveReward),
      });
    }
  }, [
    poolInfo.pendingUSDCReward,
    poolInfo.pendingBribeReward,
    aavePrice,
    yvp,
    tvp,
    account,
    chainId,
  ]);
  return userShare;
};

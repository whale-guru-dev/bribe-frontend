import {useWeb3React} from "@web3-react/core";
import config from "config";
import {BigNumber, ethers} from "ethers";
import {formatEther} from "ethers/lib/utils";
import {useMemo, useState} from "react";
import {useQuery} from "react-query";
import {LiquidityMining__factory} from "types";
import {getSigner, provider} from "utils";
import {useBlockNumber} from "./blocknumber";

let liquidityMiningInfo: LiquidityMiningInfo = {
  lpToken: "",
  poolInfo: {},
  userInfo: {},
};

type LiquidityMiningInfo = {
  lpToken: string;
  poolInfo: {
    accBribePerShare?: string;
    lastRewardBlock?: string;
    end?: string;
    locked?: boolean;
    bribePerBlock?: string;
    supply?: string;
  };
  userInfo: {amount?: string; rewardDebt?: string; pending?: string};
};

const extractInfo = async (
  chainId?: number,
  account?: string,
): Promise<LiquidityMiningInfo> => {
  const lmAddress = chainId
    ? config[chainId].LiquidityMining
    : config[1]?.["LiquidityMining"];

  if (!lmAddress) return liquidityMiningInfo;

  const lm = LiquidityMining__factory.connect(lmAddress, provider(chainId));

  const alpToken = lm.lpToken(0);
  const apoolInfo = lm.poolInfo(0);
  const auserInfo = lm.userInfo(0, account as string).catch((e) => e);
  const apending = lm.pendingBribe(0, account as string).catch((e) => e);

  const [lpToken, poolInfo, userInfo, pending] = await Promise.all([
    alpToken,
    apoolInfo,
    auserInfo,
    apending,
  ]);

  return {
    lpToken,
    poolInfo: {
      accBribePerShare: formatEther(poolInfo.accBribePerShare),
      lastRewardBlock: formatEther(poolInfo.lastRewardBlock),
      end: formatEther(poolInfo.end),
      bribePerBlock: formatEther(poolInfo.bribePerBlock),
      supply: formatEther(poolInfo.supply),
      locked: poolInfo.locked,
    },
    userInfo: {
      amount: formatEther(userInfo.amount),
      rewardDebt: formatEther(userInfo.rewardDebt),
      pending: formatEther(pending),
    },
  };
};

export function useLMInfo(): LiquidityMiningInfo {
  const {account, chainId} = useWeb3React();
  const [lmInfo, setLMInfo] = useState(liquidityMiningInfo);
  const bn = useBlockNumber();
  const {data} = useQuery(["lmInfo", account, chainId, bn], () => {
    return extractInfo(chainId, account as string);
  });
  useMemo(() => {
    if (data) setLMInfo(data);
  }, [JSON.stringify(data)]);
  return lmInfo;
}

export const useLiquidityMining = () => {
  const {library, account, chainId} = useWeb3React();
  const lmAddress = chainId
    ? config[chainId].LiquidityMining
    : config[1]?.["LiquidityMining"];
  if (account && chainId && lmAddress) {
    return new LiquidityMining__factory(
      getSigner(library, account as string),
    ).attach(lmAddress);
  } else {
    return LiquidityMining__factory.connect(
      lmAddress || ethers.constants.AddressZero,
      provider(1)
    );
  }
};

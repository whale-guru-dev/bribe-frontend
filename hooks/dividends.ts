import config from "config";
import {Dividends__factory} from "types/factories/Dividends__factory";
import {getSigner, provider} from "utils";
import {extractInfo as extractERC20Info, TokenInfo} from "hooks/erc20";
import {formatUnits} from "@ethersproject/units";
import {BigNumber, ethers} from "ethers";
import {useMemo, useState} from "react";
import {useQuery} from "react-query";
import {useWeb3React} from "@web3-react/core";
import {useBlockNumber} from "./blocknumber";

type DividendsInfo = {
  userRewards: {
    pendingReward: string;
    lastPricePerShare: string;
  };
  userDividends: string;
  rewardAsset: TokenInfo;
  stakeAsset: TokenInfo;
  totalDividendsReceived: string;
  totalStaked: string;
  pricePerShare: BigNumber;
};

const extractInfo = async (
  chainId: number,
  account: string,
  // blockNumber: number,
): Promise<DividendsInfo> => {
  const dividends = Dividends__factory.connect(
    config[chainId]?.Dividends,
    provider(chainId),
  );
  const auserRewards = dividends.userRewards(account).catch((e) => e);
  const auserDividends = dividends.dividendOf(account);
  const arewardAsset = dividends.rewardAsset();
  const astakeAsset = dividends.stakeAsset();
  const atotalDividendsReceived = dividends.totalDividendsReceived();
  const atotalStaked = dividends.totalStaked();
  const apricePerShare = dividends.pricePerShare();

  const [
    userRewards,
    userDividends,
    rewardAsset,
    stakeAsset,
    totalDividendsReceived,
    totalStaked,
    pricePerShare,
  ] = await Promise.all([
    auserRewards,
    auserDividends,
    arewardAsset,
    astakeAsset,
    atotalDividendsReceived,
    atotalStaked,
    apricePerShare,
  ]);

  const [rewardAssetInfo, stakeAssetInfo] = await Promise.all([
    extractERC20Info(rewardAsset, chainId),
    extractERC20Info(stakeAsset, chainId),
  ]);
  return {
    userRewards: {
      lastPricePerShare: formatUnits(
        userRewards?.lastPricePerShare || 0,
        stakeAssetInfo.decimals,
      ),
      pendingReward: formatUnits(
        userRewards?.pendingReward || 0,
        rewardAssetInfo.decimals,
      ),
    },
    userDividends: formatUnits(userDividends, rewardAssetInfo.decimals),
    rewardAsset: rewardAssetInfo,
    stakeAsset: stakeAssetInfo,
    totalDividendsReceived: formatUnits(
      totalDividendsReceived,
      rewardAssetInfo.decimals,
    ),
    totalStaked: formatUnits(totalStaked, stakeAssetInfo.decimals),
    pricePerShare,
  };
};

const dividendsInfo: DividendsInfo = {
  userRewards: {
    lastPricePerShare: "0",
    pendingReward: "0",
  },
  userDividends: "0",
  rewardAsset: {name: "Bribe", address: "", symbol: "BRB", decimals: 18},
  stakeAsset: {name: "Bribe", address: "", symbol: "BRB", decimals: 18},
  totalDividendsReceived: "0",
  totalStaked: "0",
  pricePerShare: BigNumber.from(0),
};

export function useDividendsInfo(): DividendsInfo {
  const [dividends, setDividends] = useState(dividendsInfo);
  const bn = useBlockNumber();
  const {chainId, account} = useWeb3React();
  const {data, isLoading} = useQuery(["dividends", chainId, account, bn], () =>
    extractInfo(chainId || 1, account as string),
  );
  useMemo(() => {
    if (data) setDividends(data);
  }, [JSON.stringify(data)]);
  return dividends;
}

export const useDividends = () => {
  const {library, account, chainId} = useWeb3React();
  if (account && chainId) {
    return new Dividends__factory(getSigner(library, account as string)).attach(
      config[chainId].Dividends,
    );
  } else {
    return Dividends__factory.connect(
      config[1].Dividends,
      provider(1),
    );
  }
};

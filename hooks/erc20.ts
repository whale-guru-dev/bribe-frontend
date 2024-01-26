import {useWeb3React} from "@web3-react/core";
import {useMemo, useState} from "react";
import {useQuery} from "react-query";
import {ERC20__factory} from "types";
import {
  formatAmount,
  gasAmount,
  getIpfsHashFromBytes32,
  getSigner,
  provider,
} from "utils";
import {useBlockNumber} from "./blocknumber";

export interface TokenInfo {
  icon?: string;
  name: string;
  address: string;
  symbol: string;
  decimals: number;
}

export const extractInfo = async (
  address: string,
  chainId?: number,
): Promise<TokenInfo> => {
  try {
    const erc20 = ERC20__factory.connect(address, provider(chainId));
    const aname = erc20.name();
    const asymbol = erc20.symbol();
    const adecimals = erc20.decimals();

    const [name, symbol, decimals] = await Promise.all([
      aname,
      asymbol,
      adecimals,
    ]);
    return {
      name,
      address,
      symbol,
      decimals,
    };
  } catch (e) {
    return {name: "", decimals: 18, symbol: "", address: ""};
  }
};

export const useAllowance = (tokenAddress, owner, spender): number => {
  const [allowance, setAllowance] = useState(0);
  const {chainId, library} = useWeb3React();
  const bn = useBlockNumber();
  useQuery(
    ["allowance", tokenAddress, owner, spender, bn, chainId],
    async function () {
      if (!tokenAddress || !owner) return 0;
      const token = ERC20__factory.connect(
        tokenAddress as string,
        provider(chainId),
      );
      const aallowance = token
        .connect(getSigner(library, owner))
        .allowance(owner as string, spender, gasAmount());
      const adecimals = token.decimals();
      const [allowance, decimals] = await Promise.all([aallowance, adecimals]);
      // console.log(formatAmount(allowance, decimals));
      // return formatAmount(allowance, decimals);
      setAllowance(formatAmount(allowance, decimals));
    },
  );
  return allowance;
};

export const useBalance = (
  tokenAddress?: string,
  account?: string | undefined | null,
): number => {
  const {chainId} = useWeb3React();
  const {data} = useQuery(
    ["balance", tokenAddress, account, chainId],
    async function () {
      if (!tokenAddress || !account) return 0;
      const token = ERC20__factory.connect(
        tokenAddress as string,
        provider(chainId),
      );
      const aamount = token.balanceOf(account as string);
      const adecimals = token.decimals();
      const [amount, decimals] = await Promise.all([aamount, adecimals]);
      return formatAmount(amount, decimals);
    },
  );
  if (data) return data;
  return 0;
};

export const useAllowances = (
  tokenAddress: (string | undefined | null)[],
  account?: string | undefined | null,
  spender?: string,
): number[] => {
  const [allowances, setAllowances] = useState<number[]>([]);
  const {chainId} = useWeb3React();
  const bn = useBlockNumber();
  const {data} = useQuery(
    ["allowances", JSON.stringify(tokenAddress), account, bn, chainId],
    async function () {
      if (!tokenAddress || !account || !spender) return [];
      const tokens = (tokenAddress || [])
        .filter((t) => !!t)
        .map((t) => ERC20__factory.connect(t as string, provider(chainId)));
      const allowances: number[] = [];
      const results = await Promise.all(
        tokens.reduce((acc, cur) => {
          // if (!cur) return acc;
          acc.push(cur?.decimals());
          acc.push(cur?.allowance(account, spender));
          return acc;
        }, [] as Promise<any>[]),
      );
      while (results.length) {
        allowances.push(formatAmount(results.pop(), results.pop()));
      }
      return allowances.reverse();
    },
  );
  useMemo(() => {
    if (data) setAllowances(data);
  }, [JSON.stringify(data)]);
  return allowances;
};

export const useBalances = (
  tokenAddress: (string | undefined | null)[],
  account?: string | undefined | null,
): number[] => {
  const [balances, setBalances] = useState<number[]>([]);
  const {chainId} = useWeb3React();
  const bn = useBlockNumber();
  const {data} = useQuery(
    ["balances", JSON.stringify(tokenAddress), account, bn, chainId],
    async function () {
      if (!tokenAddress || !account) return [];
      const tokens = (tokenAddress || [])
        .filter((t) => !!t)
        .map((t) => ERC20__factory.connect(t as string, provider(chainId)));
      const balances: number[] = [];
      const results = await Promise.all(
        tokens.reduce((acc, cur) => {
          // if (!cur) return acc;
          acc.push(cur?.decimals());
          acc.push(cur?.balanceOf(account));
          return acc;
        }, [] as Promise<any>[]),
      );
      while (results.length) {
        balances.push(formatAmount(results.pop(), results.pop()));
      }
      return balances.reverse();
    },
  );
  useMemo(() => {
    if (data) setBalances(data);
  }, [JSON.stringify(data)]);
  return balances;
};

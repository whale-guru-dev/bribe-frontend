import bs58 from "bs58";
import {BigNumber} from "ethers";
import {Web3Provider, JsonRpcSigner} from "@ethersproject/providers";
import {commify as com} from "ethers/lib/utils";
export * from "./provider";

export function getIpfsHashFromBytes32(bytes32Hex: string) {
  const hashHex = "1220" + bytes32Hex.slice(2);
  const hashBytes = Buffer.from(hashHex, "hex");
  const hashStr = bs58.encode(hashBytes);
  return hashStr;
}

// format an ERC20 amount as a number with 2 decimals
export const formatAmount = (amount: BigNumber, ERC20decimals: number) => {
  if (!amount) return 0;
  return (
    amount.div(BigNumber.from(10).pow(ERC20decimals - 3)).toNumber() / 1000
  );
};

export const getSigner = (
  library: Web3Provider,
  account: string,
): JsonRpcSigner => {
  return library.getSigner(account).connectUnchecked();
};

export const getProviderOrSigner = (
  library: Web3Provider,
  account?: string,
): Web3Provider | JsonRpcSigner => {
  return account ? getSigner(library, account) : library;
};

export const gasAmount = () => {
  // if (!process.env.production) {
  //   return {gasLimit: 1000000};
  // }
  return {};
};

export const commify = (value: any) => {
  if (value == "NaN" || (value != 0 && !value)) return "";
  if (typeof value == "number") return com(value?.toFixed(2));
  return com(Number(value).toFixed(2));
};

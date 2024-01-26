import {Web3ReactContextInterface} from "@web3-react/core/dist/types";
import {BigNumber} from "ethers";
import {Dividends} from "types/Dividends";
import {gasAmount, getSigner} from "utils";

export async function stake(
  dividends: Dividends,
  {library, account}: Web3ReactContextInterface<any>,
  amount: BigNumber,
  update: boolean,
) {
  return await (
    await dividends
      .connect(getSigner(library, account as string))
      .stake(account as string, amount, update, gasAmount())
  ).wait();
}

export async function unstake(
  dividends: Dividends,
  {library, account}: Web3ReactContextInterface<any>,
  amount: BigNumber,
  update: boolean,
) {
  return await (
    await dividends
      .connect(getSigner(library, account as string))
      .unstake(amount, update, gasAmount())
  ).wait();
}

export async function claimUserDividend(
  dividends: Dividends,
  {library, account}: Web3ReactContextInterface<any>,
  update: boolean,
) {
  return await (
    await dividends
      .connect(getSigner(library, account as string))
      .claimUserDividend(update, gasAmount())
  ).wait();
}

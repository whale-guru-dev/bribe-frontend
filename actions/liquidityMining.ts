import {Web3ReactContextInterface} from "@web3-react/core/dist/types";
import {BigNumber} from "ethers";
import {LiquidityMining} from "types";
import {gasAmount, getSigner} from "utils";

export async function deposit(
  lm: LiquidityMining,
  {library, account}: Web3ReactContextInterface<any>,
  amount: BigNumber,
) {
  return await (
    await lm
      .connect(getSigner(library, account as string))
      .deposit(0, amount, account as string, gasAmount())
  ).wait();
}

export async function withdraw(
  lm: LiquidityMining,
  {library, account}: Web3ReactContextInterface<any>,
  amount: BigNumber,
  harvest: boolean,
) {
  return harvest
    ? await (
        await lm
          .connect(getSigner(library, account as string))
          .withdraw(0, amount, account as string, gasAmount())
      ).wait()
    : await (
        await lm
          .connect(getSigner(library, account as string))
          .withdrawAndHarvest(0, amount, account as string, gasAmount())
      ).wait();
}

export async function harvest(
  lm: LiquidityMining,
  {library, account}: Web3ReactContextInterface<any>,
) {
  return await (
    await lm
      .connect(getSigner(library, account as string))
      .harvest(0, account as string, gasAmount())
  ).wait();
}

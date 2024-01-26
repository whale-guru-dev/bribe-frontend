import {Web3ReactContextInterface} from "@web3-react/core/dist/types";
import {BigNumber, ethers} from "ethers";
import {parseUnits} from "ethers/lib/utils";
import {AavePool, ERC20__factory} from "types";
import {gasAmount, getSigner, provider} from "utils";

export async function bid(
  aavePool: AavePool,
  {library, account}: Web3ReactContextInterface<any>,
  proposalId: number,
  amount: BigNumber,
  support: boolean,
) {
  return await (
    await aavePool
      .connect(getSigner(library, account as string))
      .bid(account as string, proposalId, amount, support, gasAmount())
  ).wait();
}

// export async function setDelayPeriod(
//   aavePool: AavePool,
//   {library, account}: Web3ReactContextInterface<any>,
//   withdrawalPeriodInSeconds: number,
// ) {
//   return await aavePool
//     .connect(getSigner(library, account as string))
//     .setDelayPeriod(withdrawalPeriodInSeconds);
// }

export async function blockProposalId(
  aavePool: AavePool,
  {library, account}: Web3ReactContextInterface<any>,
  proposalId: number,
) {
  return await aavePool
    .connect(getSigner(library, account as string))
    .blockProposalId(proposalId);
}

export async function unblockProposalId(
  aavePool: AavePool,
  {library, account}: Web3ReactContextInterface<any>,
  proposalId: number,
) {
  return await aavePool
    .connect(getSigner(library, account as string))
    .unblockProposalId(proposalId);
}

export async function distributeRewards(
  aavePool: AavePool,
  {library, account}: Web3ReactContextInterface<any>,
  proposalId: number,
) {
  return await aavePool
    .connect(getSigner(library, account as string))
    .distributeRewards(proposalId);
}

export async function vote(
  aavePool: AavePool,
  {library, account}: Web3ReactContextInterface<any>,
  proposalId: number,
) {
  return await aavePool
    .connect(getSigner(library, account as string))
    .vote(proposalId);
}

export async function increaseAllowance(
  asset: string,
  {library, account, chainId}: Web3ReactContextInterface<any>,
  amount: BigNumber,
  spender: string,
) {
  console.log(asset, chainId, library, account, amount, spender);
  const erc20 = ERC20__factory.connect(asset, provider(chainId));
  return await erc20
    .connect(getSigner(library, account as string))
    .increaseAllowance(spender, amount, gasAmount());
}

export async function approve(
  asset: string,
  {library, account, chainId}: Web3ReactContextInterface<any>,
  amount: BigNumber,
  spender: string,
) {
  const erc20 = ERC20__factory.connect(asset, provider(chainId));
  return await erc20
    .connect(getSigner(library, account as string))
    .approve(spender, amount, gasAmount());
}

export async function deposit(
  aavePool: AavePool,
  {library, account, chainId}: Web3ReactContextInterface<any>,
  asset: string,
  amount: BigNumber,
) {
  return await aavePool
    .connect(getSigner(library, account as string))
    .deposit(asset, account as string, amount, false, gasAmount());
}

export async function withdraw(
  aavePool: AavePool,
  {library, account}: Web3ReactContextInterface<any>,
  asset: string,
  amount: BigNumber,
) {
  console.log(getSigner(library, account as string));
  console.log("withdrawing", asset, account, amount);
  return await aavePool
    .connect(getSigner(library, account as string))
    .withdraw(asset, account as string, amount, false, gasAmount());
}

export async function claimReward(
  aavePool: AavePool,
  {library, account}: Web3ReactContextInterface<any>,
) {
  return await aavePool
    .connect(getSigner(library, account as string))
    .claimReward(
      account as string,
      ethers.constants.AddressZero,
      ethers.constants.HashZero,
      false,
      gasAmount(),
    );
}

export async function refund(
  aavePool: AavePool,
  {library, account}: Web3ReactContextInterface<any>,
  proposalId: number,
) {
  return await aavePool
    .connect(getSigner(library, account as string))
    .refund(proposalId, gasAmount());
}

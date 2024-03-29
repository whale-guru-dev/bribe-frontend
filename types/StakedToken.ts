/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type AssetConfigInputStruct = {
  emissionPerSecond: BigNumberish;
  totalStaked: BigNumberish;
  underlyingAsset: string;
};

export type AssetConfigInputStructOutput = [BigNumber, BigNumber, string] & {
  emissionPerSecond: BigNumber;
  totalStaked: BigNumber;
  underlyingAsset: string;
};

export interface StakedTokenInterface extends utils.Interface {
  functions: {
    "COOLDOWN_SECONDS()": FunctionFragment;
    "DISTRIBUTION_END()": FunctionFragment;
    "EMISSION_MANAGER()": FunctionFragment;
    "PRECISION()": FunctionFragment;
    "REVISION()": FunctionFragment;
    "REWARDS_VAULT()": FunctionFragment;
    "REWARD_TOKEN()": FunctionFragment;
    "STAKED_TOKEN()": FunctionFragment;
    "UNSTAKE_WINDOW()": FunctionFragment;
    "_aaveGovernance()": FunctionFragment;
    "_countsSnapshots(address)": FunctionFragment;
    "_snapshots(address,uint256)": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "assets(address)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "claimRewards(address,uint256)": FunctionFragment;
    "configureAssets((uint128,uint256,address)[])": FunctionFragment;
    "cooldown()": FunctionFragment;
    "decimals()": FunctionFragment;
    "decreaseAllowance(address,uint256)": FunctionFragment;
    "getNextCooldownTimestamp(uint256,uint256,address,uint256)": FunctionFragment;
    "getTotalRewardsBalance(address)": FunctionFragment;
    "getUserAssetData(address,address)": FunctionFragment;
    "increaseAllowance(address,uint256)": FunctionFragment;
    "initialize(address,string,string,uint8)": FunctionFragment;
    "name()": FunctionFragment;
    "redeem(address,uint256)": FunctionFragment;
    "stake(address,uint256)": FunctionFragment;
    "stakerRewardsToClaim(address)": FunctionFragment;
    "stakersCooldowns(address)": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "COOLDOWN_SECONDS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DISTRIBUTION_END",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "EMISSION_MANAGER",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "PRECISION", values?: undefined): string;
  encodeFunctionData(functionFragment: "REVISION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "REWARDS_VAULT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "REWARD_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "STAKED_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "UNSTAKE_WINDOW",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_aaveGovernance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_countsSnapshots",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "_snapshots",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "assets", values: [string]): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "claimRewards",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "configureAssets",
    values: [AssetConfigInputStruct[]]
  ): string;
  encodeFunctionData(functionFragment: "cooldown", values?: undefined): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getNextCooldownTimestamp",
    values: [BigNumberish, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalRewardsBalance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserAssetData",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakerRewardsToClaim",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "stakersCooldowns",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "COOLDOWN_SECONDS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DISTRIBUTION_END",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "EMISSION_MANAGER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "PRECISION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "REVISION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "REWARDS_VAULT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "REWARD_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "STAKED_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "UNSTAKE_WINDOW",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_aaveGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_countsSnapshots",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_snapshots", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "assets", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "configureAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cooldown", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNextCooldownTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalRewardsBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserAssetData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakerRewardsToClaim",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakersCooldowns",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "AssetConfigUpdated(address,uint256)": EventFragment;
    "AssetIndexUpdated(address,uint256)": EventFragment;
    "Cooldown(address)": EventFragment;
    "Redeem(address,address,uint256)": EventFragment;
    "RewardsAccrued(address,uint256)": EventFragment;
    "RewardsClaimed(address,address,uint256)": EventFragment;
    "SnapshotDone(address,uint128,uint128)": EventFragment;
    "Staked(address,address,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
    "UserIndexUpdated(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AssetConfigUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AssetIndexUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Cooldown"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Redeem"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardsAccrued"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardsClaimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SnapshotDone"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Staked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UserIndexUpdated"): EventFragment;
}

export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  { owner: string; spender: string; value: BigNumber }
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export type AssetConfigUpdatedEvent = TypedEvent<
  [string, BigNumber],
  { asset: string; emission: BigNumber }
>;

export type AssetConfigUpdatedEventFilter =
  TypedEventFilter<AssetConfigUpdatedEvent>;

export type AssetIndexUpdatedEvent = TypedEvent<
  [string, BigNumber],
  { asset: string; index: BigNumber }
>;

export type AssetIndexUpdatedEventFilter =
  TypedEventFilter<AssetIndexUpdatedEvent>;

export type CooldownEvent = TypedEvent<[string], { user: string }>;

export type CooldownEventFilter = TypedEventFilter<CooldownEvent>;

export type RedeemEvent = TypedEvent<
  [string, string, BigNumber],
  { from: string; to: string; amount: BigNumber }
>;

export type RedeemEventFilter = TypedEventFilter<RedeemEvent>;

export type RewardsAccruedEvent = TypedEvent<
  [string, BigNumber],
  { user: string; amount: BigNumber }
>;

export type RewardsAccruedEventFilter = TypedEventFilter<RewardsAccruedEvent>;

export type RewardsClaimedEvent = TypedEvent<
  [string, string, BigNumber],
  { from: string; to: string; amount: BigNumber }
>;

export type RewardsClaimedEventFilter = TypedEventFilter<RewardsClaimedEvent>;

export type SnapshotDoneEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { owner: string; oldValue: BigNumber; newValue: BigNumber }
>;

export type SnapshotDoneEventFilter = TypedEventFilter<SnapshotDoneEvent>;

export type StakedEvent = TypedEvent<
  [string, string, BigNumber],
  { from: string; onBehalfOf: string; amount: BigNumber }
>;

export type StakedEventFilter = TypedEventFilter<StakedEvent>;

export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  { from: string; to: string; value: BigNumber }
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export type UserIndexUpdatedEvent = TypedEvent<
  [string, string, BigNumber],
  { user: string; asset: string; index: BigNumber }
>;

export type UserIndexUpdatedEventFilter =
  TypedEventFilter<UserIndexUpdatedEvent>;

export interface StakedToken extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StakedTokenInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    COOLDOWN_SECONDS(overrides?: CallOverrides): Promise<[BigNumber]>;

    DISTRIBUTION_END(overrides?: CallOverrides): Promise<[BigNumber]>;

    EMISSION_MANAGER(overrides?: CallOverrides): Promise<[string]>;

    PRECISION(overrides?: CallOverrides): Promise<[number]>;

    REVISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    REWARDS_VAULT(overrides?: CallOverrides): Promise<[string]>;

    REWARD_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    STAKED_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    UNSTAKE_WINDOW(overrides?: CallOverrides): Promise<[BigNumber]>;

    _aaveGovernance(overrides?: CallOverrides): Promise<[string]>;

    _countsSnapshots(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    _snapshots(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { blockNumber: BigNumber; value: BigNumber }
    >;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    assets(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        emissionPerSecond: BigNumber;
        lastUpdateTimestamp: BigNumber;
        index: BigNumber;
      }
    >;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    claimRewards(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    configureAssets(
      assetsConfigInput: AssetConfigInputStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cooldown(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getNextCooldownTimestamp(
      fromCooldownTimestamp: BigNumberish,
      amountToReceive: BigNumberish,
      toAddress: string,
      toBalance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getTotalRewardsBalance(
      staker: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUserAssetData(
      user: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      aaveGovernance: string,
      name: string,
      symbol: string,
      decimals: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    redeem(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stake(
      onBehalfOf: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakerRewardsToClaim(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    stakersCooldowns(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  COOLDOWN_SECONDS(overrides?: CallOverrides): Promise<BigNumber>;

  DISTRIBUTION_END(overrides?: CallOverrides): Promise<BigNumber>;

  EMISSION_MANAGER(overrides?: CallOverrides): Promise<string>;

  PRECISION(overrides?: CallOverrides): Promise<number>;

  REVISION(overrides?: CallOverrides): Promise<BigNumber>;

  REWARDS_VAULT(overrides?: CallOverrides): Promise<string>;

  REWARD_TOKEN(overrides?: CallOverrides): Promise<string>;

  STAKED_TOKEN(overrides?: CallOverrides): Promise<string>;

  UNSTAKE_WINDOW(overrides?: CallOverrides): Promise<BigNumber>;

  _aaveGovernance(overrides?: CallOverrides): Promise<string>;

  _countsSnapshots(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  _snapshots(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { blockNumber: BigNumber; value: BigNumber }
  >;

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  assets(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      emissionPerSecond: BigNumber;
      lastUpdateTimestamp: BigNumber;
      index: BigNumber;
    }
  >;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  claimRewards(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  configureAssets(
    assetsConfigInput: AssetConfigInputStruct[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cooldown(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  decimals(overrides?: CallOverrides): Promise<number>;

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getNextCooldownTimestamp(
    fromCooldownTimestamp: BigNumberish,
    amountToReceive: BigNumberish,
    toAddress: string,
    toBalance: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getTotalRewardsBalance(
    staker: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUserAssetData(
    user: string,
    asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    aaveGovernance: string,
    name: string,
    symbol: string,
    decimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  redeem(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stake(
    onBehalfOf: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakerRewardsToClaim(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  stakersCooldowns(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    COOLDOWN_SECONDS(overrides?: CallOverrides): Promise<BigNumber>;

    DISTRIBUTION_END(overrides?: CallOverrides): Promise<BigNumber>;

    EMISSION_MANAGER(overrides?: CallOverrides): Promise<string>;

    PRECISION(overrides?: CallOverrides): Promise<number>;

    REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    REWARDS_VAULT(overrides?: CallOverrides): Promise<string>;

    REWARD_TOKEN(overrides?: CallOverrides): Promise<string>;

    STAKED_TOKEN(overrides?: CallOverrides): Promise<string>;

    UNSTAKE_WINDOW(overrides?: CallOverrides): Promise<BigNumber>;

    _aaveGovernance(overrides?: CallOverrides): Promise<string>;

    _countsSnapshots(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _snapshots(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { blockNumber: BigNumber; value: BigNumber }
    >;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    assets(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        emissionPerSecond: BigNumber;
        lastUpdateTimestamp: BigNumber;
        index: BigNumber;
      }
    >;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    claimRewards(
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    configureAssets(
      assetsConfigInput: AssetConfigInputStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    cooldown(overrides?: CallOverrides): Promise<void>;

    decimals(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getNextCooldownTimestamp(
      fromCooldownTimestamp: BigNumberish,
      amountToReceive: BigNumberish,
      toAddress: string,
      toBalance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalRewardsBalance(
      staker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserAssetData(
      user: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialize(
      aaveGovernance: string,
      name: string,
      symbol: string,
      decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;

    redeem(
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stake(
      onBehalfOf: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stakerRewardsToClaim(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stakersCooldowns(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): ApprovalEventFilter;
    Approval(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): ApprovalEventFilter;

    "AssetConfigUpdated(address,uint256)"(
      asset?: string | null,
      emission?: null
    ): AssetConfigUpdatedEventFilter;
    AssetConfigUpdated(
      asset?: string | null,
      emission?: null
    ): AssetConfigUpdatedEventFilter;

    "AssetIndexUpdated(address,uint256)"(
      asset?: string | null,
      index?: null
    ): AssetIndexUpdatedEventFilter;
    AssetIndexUpdated(
      asset?: string | null,
      index?: null
    ): AssetIndexUpdatedEventFilter;

    "Cooldown(address)"(user?: string | null): CooldownEventFilter;
    Cooldown(user?: string | null): CooldownEventFilter;

    "Redeem(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      amount?: null
    ): RedeemEventFilter;
    Redeem(
      from?: string | null,
      to?: string | null,
      amount?: null
    ): RedeemEventFilter;

    "RewardsAccrued(address,uint256)"(
      user?: null,
      amount?: null
    ): RewardsAccruedEventFilter;
    RewardsAccrued(user?: null, amount?: null): RewardsAccruedEventFilter;

    "RewardsClaimed(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      amount?: null
    ): RewardsClaimedEventFilter;
    RewardsClaimed(
      from?: string | null,
      to?: string | null,
      amount?: null
    ): RewardsClaimedEventFilter;

    "SnapshotDone(address,uint128,uint128)"(
      owner?: null,
      oldValue?: null,
      newValue?: null
    ): SnapshotDoneEventFilter;
    SnapshotDone(
      owner?: null,
      oldValue?: null,
      newValue?: null
    ): SnapshotDoneEventFilter;

    "Staked(address,address,uint256)"(
      from?: string | null,
      onBehalfOf?: string | null,
      amount?: null
    ): StakedEventFilter;
    Staked(
      from?: string | null,
      onBehalfOf?: string | null,
      amount?: null
    ): StakedEventFilter;

    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TransferEventFilter;
    Transfer(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TransferEventFilter;

    "UserIndexUpdated(address,address,uint256)"(
      user?: string | null,
      asset?: string | null,
      index?: null
    ): UserIndexUpdatedEventFilter;
    UserIndexUpdated(
      user?: string | null,
      asset?: string | null,
      index?: null
    ): UserIndexUpdatedEventFilter;
  };

  estimateGas: {
    COOLDOWN_SECONDS(overrides?: CallOverrides): Promise<BigNumber>;

    DISTRIBUTION_END(overrides?: CallOverrides): Promise<BigNumber>;

    EMISSION_MANAGER(overrides?: CallOverrides): Promise<BigNumber>;

    PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    REWARDS_VAULT(overrides?: CallOverrides): Promise<BigNumber>;

    REWARD_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    STAKED_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    UNSTAKE_WINDOW(overrides?: CallOverrides): Promise<BigNumber>;

    _aaveGovernance(overrides?: CallOverrides): Promise<BigNumber>;

    _countsSnapshots(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _snapshots(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    assets(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    claimRewards(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    configureAssets(
      assetsConfigInput: AssetConfigInputStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cooldown(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getNextCooldownTimestamp(
      fromCooldownTimestamp: BigNumberish,
      amountToReceive: BigNumberish,
      toAddress: string,
      toBalance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getTotalRewardsBalance(
      staker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserAssetData(
      user: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      aaveGovernance: string,
      name: string,
      symbol: string,
      decimals: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    redeem(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stake(
      onBehalfOf: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakerRewardsToClaim(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stakersCooldowns(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    COOLDOWN_SECONDS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DISTRIBUTION_END(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    EMISSION_MANAGER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    REVISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    REWARDS_VAULT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    REWARD_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    STAKED_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    UNSTAKE_WINDOW(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _aaveGovernance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _countsSnapshots(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _snapshots(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    assets(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimRewards(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    configureAssets(
      assetsConfigInput: AssetConfigInputStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cooldown(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getNextCooldownTimestamp(
      fromCooldownTimestamp: BigNumberish,
      amountToReceive: BigNumberish,
      toAddress: string,
      toBalance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getTotalRewardsBalance(
      staker: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserAssetData(
      user: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      aaveGovernance: string,
      name: string,
      symbol: string,
      decimals: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    redeem(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stake(
      onBehalfOf: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakerRewardsToClaim(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stakersCooldowns(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

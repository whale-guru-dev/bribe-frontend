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

export interface AaveDistributionManagerInterface extends utils.Interface {
  functions: {
    "DISTRIBUTION_END()": FunctionFragment;
    "EMISSION_MANAGER()": FunctionFragment;
    "PRECISION()": FunctionFragment;
    "assets(address)": FunctionFragment;
    "configureAssets((uint128,uint256,address)[])": FunctionFragment;
    "getUserAssetData(address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DISTRIBUTION_END",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "EMISSION_MANAGER",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "PRECISION", values?: undefined): string;
  encodeFunctionData(functionFragment: "assets", values: [string]): string;
  encodeFunctionData(
    functionFragment: "configureAssets",
    values: [AssetConfigInputStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserAssetData",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "DISTRIBUTION_END",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "EMISSION_MANAGER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "PRECISION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "assets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "configureAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserAssetData",
    data: BytesLike
  ): Result;

  events: {
    "AssetConfigUpdated(address,uint256)": EventFragment;
    "AssetIndexUpdated(address,uint256)": EventFragment;
    "UserIndexUpdated(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AssetConfigUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AssetIndexUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UserIndexUpdated"): EventFragment;
}

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

export type UserIndexUpdatedEvent = TypedEvent<
  [string, string, BigNumber],
  { user: string; asset: string; index: BigNumber }
>;

export type UserIndexUpdatedEventFilter =
  TypedEventFilter<UserIndexUpdatedEvent>;

export interface AaveDistributionManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AaveDistributionManagerInterface;

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
    DISTRIBUTION_END(overrides?: CallOverrides): Promise<[BigNumber]>;

    EMISSION_MANAGER(overrides?: CallOverrides): Promise<[string]>;

    PRECISION(overrides?: CallOverrides): Promise<[number]>;

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

    configureAssets(
      assetsConfigInput: AssetConfigInputStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getUserAssetData(
      user: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  DISTRIBUTION_END(overrides?: CallOverrides): Promise<BigNumber>;

  EMISSION_MANAGER(overrides?: CallOverrides): Promise<string>;

  PRECISION(overrides?: CallOverrides): Promise<number>;

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

  configureAssets(
    assetsConfigInput: AssetConfigInputStruct[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getUserAssetData(
    user: string,
    asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    DISTRIBUTION_END(overrides?: CallOverrides): Promise<BigNumber>;

    EMISSION_MANAGER(overrides?: CallOverrides): Promise<string>;

    PRECISION(overrides?: CallOverrides): Promise<number>;

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

    configureAssets(
      assetsConfigInput: AssetConfigInputStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    getUserAssetData(
      user: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
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
    DISTRIBUTION_END(overrides?: CallOverrides): Promise<BigNumber>;

    EMISSION_MANAGER(overrides?: CallOverrides): Promise<BigNumber>;

    PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    assets(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    configureAssets(
      assetsConfigInput: AssetConfigInputStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getUserAssetData(
      user: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DISTRIBUTION_END(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    EMISSION_MANAGER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    assets(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    configureAssets(
      assetsConfigInput: AssetConfigInputStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getUserAssetData(
      user: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

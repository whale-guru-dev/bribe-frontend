/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface GovernanceStrategyInterface extends utils.Interface {
  functions: {
    "AAVE()": FunctionFragment;
    "STK_AAVE()": FunctionFragment;
    "getPropositionPowerAt(address,uint256)": FunctionFragment;
    "getTotalPropositionSupplyAt(uint256)": FunctionFragment;
    "getTotalVotingSupplyAt(uint256)": FunctionFragment;
    "getVotingPowerAt(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "AAVE", values?: undefined): string;
  encodeFunctionData(functionFragment: "STK_AAVE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getPropositionPowerAt",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalPropositionSupplyAt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalVotingSupplyAt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getVotingPowerAt",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "AAVE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "STK_AAVE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPropositionPowerAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalPropositionSupplyAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalVotingSupplyAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVotingPowerAt",
    data: BytesLike
  ): Result;

  events: {};
}

export interface GovernanceStrategy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GovernanceStrategyInterface;

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
    AAVE(overrides?: CallOverrides): Promise<[string]>;

    STK_AAVE(overrides?: CallOverrides): Promise<[string]>;

    getPropositionPowerAt(
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTotalPropositionSupplyAt(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTotalVotingSupplyAt(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getVotingPowerAt(
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  AAVE(overrides?: CallOverrides): Promise<string>;

  STK_AAVE(overrides?: CallOverrides): Promise<string>;

  getPropositionPowerAt(
    user: string,
    blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTotalPropositionSupplyAt(
    blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTotalVotingSupplyAt(
    blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getVotingPowerAt(
    user: string,
    blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    AAVE(overrides?: CallOverrides): Promise<string>;

    STK_AAVE(overrides?: CallOverrides): Promise<string>;

    getPropositionPowerAt(
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalPropositionSupplyAt(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalVotingSupplyAt(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVotingPowerAt(
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    AAVE(overrides?: CallOverrides): Promise<BigNumber>;

    STK_AAVE(overrides?: CallOverrides): Promise<BigNumber>;

    getPropositionPowerAt(
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalPropositionSupplyAt(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalVotingSupplyAt(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVotingPowerAt(
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    AAVE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    STK_AAVE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPropositionPowerAt(
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalPropositionSupplyAt(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalVotingSupplyAt(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVotingPowerAt(
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

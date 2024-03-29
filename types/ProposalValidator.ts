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

export interface ProposalValidatorInterface extends utils.Interface {
  functions: {
    "MINIMUM_QUORUM()": FunctionFragment;
    "ONE_HUNDRED_WITH_PRECISION()": FunctionFragment;
    "PROPOSITION_THRESHOLD()": FunctionFragment;
    "VOTE_DIFFERENTIAL()": FunctionFragment;
    "VOTING_DURATION()": FunctionFragment;
    "getMinimumPropositionPowerNeeded(address,uint256)": FunctionFragment;
    "getMinimumVotingPowerNeeded(uint256)": FunctionFragment;
    "isProposalPassed(address,uint256)": FunctionFragment;
    "isPropositionPowerEnough(address,address,uint256)": FunctionFragment;
    "isQuorumValid(address,uint256)": FunctionFragment;
    "isVoteDifferentialValid(address,uint256)": FunctionFragment;
    "validateCreatorOfProposal(address,address,uint256)": FunctionFragment;
    "validateProposalCancellation(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "MINIMUM_QUORUM",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ONE_HUNDRED_WITH_PRECISION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PROPOSITION_THRESHOLD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "VOTE_DIFFERENTIAL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "VOTING_DURATION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMinimumPropositionPowerNeeded",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMinimumVotingPowerNeeded",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isProposalPassed",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isPropositionPowerEnough",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isQuorumValid",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isVoteDifferentialValid",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "validateCreatorOfProposal",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "validateProposalCancellation",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "MINIMUM_QUORUM",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ONE_HUNDRED_WITH_PRECISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PROPOSITION_THRESHOLD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "VOTE_DIFFERENTIAL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "VOTING_DURATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMinimumPropositionPowerNeeded",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMinimumVotingPowerNeeded",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isProposalPassed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isPropositionPowerEnough",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isQuorumValid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isVoteDifferentialValid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateCreatorOfProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateProposalCancellation",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ProposalValidator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ProposalValidatorInterface;

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
    MINIMUM_QUORUM(overrides?: CallOverrides): Promise<[BigNumber]>;

    ONE_HUNDRED_WITH_PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    PROPOSITION_THRESHOLD(overrides?: CallOverrides): Promise<[BigNumber]>;

    VOTE_DIFFERENTIAL(overrides?: CallOverrides): Promise<[BigNumber]>;

    VOTING_DURATION(overrides?: CallOverrides): Promise<[BigNumber]>;

    getMinimumPropositionPowerNeeded(
      governance: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getMinimumVotingPowerNeeded(
      votingSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isProposalPassed(
      governance: string,
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isPropositionPowerEnough(
      governance: string,
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isQuorumValid(
      governance: string,
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isVoteDifferentialValid(
      governance: string,
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    validateCreatorOfProposal(
      governance: string,
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    validateProposalCancellation(
      governance: string,
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  MINIMUM_QUORUM(overrides?: CallOverrides): Promise<BigNumber>;

  ONE_HUNDRED_WITH_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

  PROPOSITION_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;

  VOTE_DIFFERENTIAL(overrides?: CallOverrides): Promise<BigNumber>;

  VOTING_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

  getMinimumPropositionPowerNeeded(
    governance: string,
    blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getMinimumVotingPowerNeeded(
    votingSupply: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isProposalPassed(
    governance: string,
    proposalId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isPropositionPowerEnough(
    governance: string,
    user: string,
    blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isQuorumValid(
    governance: string,
    proposalId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isVoteDifferentialValid(
    governance: string,
    proposalId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  validateCreatorOfProposal(
    governance: string,
    user: string,
    blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  validateProposalCancellation(
    governance: string,
    user: string,
    blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    MINIMUM_QUORUM(overrides?: CallOverrides): Promise<BigNumber>;

    ONE_HUNDRED_WITH_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    PROPOSITION_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;

    VOTE_DIFFERENTIAL(overrides?: CallOverrides): Promise<BigNumber>;

    VOTING_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    getMinimumPropositionPowerNeeded(
      governance: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMinimumVotingPowerNeeded(
      votingSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isProposalPassed(
      governance: string,
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isPropositionPowerEnough(
      governance: string,
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isQuorumValid(
      governance: string,
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isVoteDifferentialValid(
      governance: string,
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    validateCreatorOfProposal(
      governance: string,
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    validateProposalCancellation(
      governance: string,
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    MINIMUM_QUORUM(overrides?: CallOverrides): Promise<BigNumber>;

    ONE_HUNDRED_WITH_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    PROPOSITION_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;

    VOTE_DIFFERENTIAL(overrides?: CallOverrides): Promise<BigNumber>;

    VOTING_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    getMinimumPropositionPowerNeeded(
      governance: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMinimumVotingPowerNeeded(
      votingSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isProposalPassed(
      governance: string,
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isPropositionPowerEnough(
      governance: string,
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isQuorumValid(
      governance: string,
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isVoteDifferentialValid(
      governance: string,
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validateCreatorOfProposal(
      governance: string,
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validateProposalCancellation(
      governance: string,
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MINIMUM_QUORUM(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ONE_HUNDRED_WITH_PRECISION(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    PROPOSITION_THRESHOLD(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    VOTE_DIFFERENTIAL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    VOTING_DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMinimumPropositionPowerNeeded(
      governance: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMinimumVotingPowerNeeded(
      votingSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isProposalPassed(
      governance: string,
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPropositionPowerEnough(
      governance: string,
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isQuorumValid(
      governance: string,
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isVoteDifferentialValid(
      governance: string,
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validateCreatorOfProposal(
      governance: string,
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validateProposalCancellation(
      governance: string,
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

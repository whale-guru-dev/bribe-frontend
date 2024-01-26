/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export type ProposalWithoutVotesStruct = {
  id: BigNumberish;
  creator: string;
  executor: string;
  targets: string[];
  values: BigNumberish[];
  signatures: string[];
  calldatas: BytesLike[];
  withDelegatecalls: boolean[];
  startBlock: BigNumberish;
  endBlock: BigNumberish;
  executionTime: BigNumberish;
  forVotes: BigNumberish;
  againstVotes: BigNumberish;
  executed: boolean;
  canceled: boolean;
  strategy: string;
  ipfsHash: BytesLike;
};

export type ProposalWithoutVotesStructOutput = [
  BigNumber,
  string,
  string,
  string[],
  BigNumber[],
  string[],
  string[],
  boolean[],
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  boolean,
  boolean,
  string,
  string
] & {
  id: BigNumber;
  creator: string;
  executor: string;
  targets: string[];
  values: BigNumber[];
  signatures: string[];
  calldatas: string[];
  withDelegatecalls: boolean[];
  startBlock: BigNumber;
  endBlock: BigNumber;
  executionTime: BigNumber;
  forVotes: BigNumber;
  againstVotes: BigNumber;
  executed: boolean;
  canceled: boolean;
  strategy: string;
  ipfsHash: string;
};

export interface MockAaveGovernanceWithTokensInterface
  extends ethers.utils.Interface {
  functions: {
    "cancel(uint256)": FunctionFragment;
    "createProposal(uint256)": FunctionFragment;
    "getGovernanceStrategy()": FunctionFragment;
    "getProposalById(uint256)": FunctionFragment;
    "getProposalState(uint256)": FunctionFragment;
    "getVotingPowerAt(address,uint256)": FunctionFragment;
    "receiptAaveToken()": FunctionFragment;
    "receiptstkAaveToken()": FunctionFragment;
    "setReceiptTokens(address,address)": FunctionFragment;
    "submitVote(uint256,bool)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "cancel",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createProposal",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getGovernanceStrategy",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getProposalById",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getProposalState",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getVotingPowerAt",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "receiptAaveToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "receiptstkAaveToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setReceiptTokens",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "submitVote",
    values: [BigNumberish, boolean]
  ): string;

  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGovernanceStrategy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProposalById",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProposalState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVotingPowerAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receiptAaveToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receiptstkAaveToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setReceiptTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "submitVote", data: BytesLike): Result;

  events: {};
}

export interface MockAaveGovernanceWithTokens extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockAaveGovernanceWithTokensInterface;

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
    cancel(
      proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createProposal(
      proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getGovernanceStrategy(overrides?: CallOverrides): Promise<[string]>;

    getProposalById(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [ProposalWithoutVotesStructOutput] & {
        p: ProposalWithoutVotesStructOutput;
      }
    >;

    getProposalState(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getVotingPowerAt(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    receiptAaveToken(overrides?: CallOverrides): Promise<[string]>;

    receiptstkAaveToken(overrides?: CallOverrides): Promise<[string]>;

    setReceiptTokens(
      receiptAaveToken_: string,
      receiptstkAaveToken_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    submitVote(
      proposalId: BigNumberish,
      support: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  cancel(
    proposalId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createProposal(
    proposalId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getGovernanceStrategy(overrides?: CallOverrides): Promise<string>;

  getProposalById(
    proposalId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<ProposalWithoutVotesStructOutput>;

  getProposalState(
    proposalId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  getVotingPowerAt(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  receiptAaveToken(overrides?: CallOverrides): Promise<string>;

  receiptstkAaveToken(overrides?: CallOverrides): Promise<string>;

  setReceiptTokens(
    receiptAaveToken_: string,
    receiptstkAaveToken_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  submitVote(
    proposalId: BigNumberish,
    support: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    cancel(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    createProposal(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getGovernanceStrategy(overrides?: CallOverrides): Promise<string>;

    getProposalById(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<ProposalWithoutVotesStructOutput>;

    getProposalState(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    getVotingPowerAt(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    receiptAaveToken(overrides?: CallOverrides): Promise<string>;

    receiptstkAaveToken(overrides?: CallOverrides): Promise<string>;

    setReceiptTokens(
      receiptAaveToken_: string,
      receiptstkAaveToken_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    submitVote(
      proposalId: BigNumberish,
      support: boolean,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    cancel(
      proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createProposal(
      proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getGovernanceStrategy(overrides?: CallOverrides): Promise<BigNumber>;

    getProposalById(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProposalState(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVotingPowerAt(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    receiptAaveToken(overrides?: CallOverrides): Promise<BigNumber>;

    receiptstkAaveToken(overrides?: CallOverrides): Promise<BigNumber>;

    setReceiptTokens(
      receiptAaveToken_: string,
      receiptstkAaveToken_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    submitVote(
      proposalId: BigNumberish,
      support: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    cancel(
      proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createProposal(
      proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getGovernanceStrategy(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProposalById(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProposalState(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVotingPowerAt(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    receiptAaveToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    receiptstkAaveToken(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setReceiptTokens(
      receiptAaveToken_: string,
      receiptstkAaveToken_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    submitVote(
      proposalId: BigNumberish,
      support: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

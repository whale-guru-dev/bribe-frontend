import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("https://api.thegraph.com/subgraphs/name/dansofter/bribe-subgraph-mainnet", {
    method: "POST",
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type BidHistory = {
  __typename?: 'BidHistory';
  highestBid: Scalars['BigInt'];
  highestBidder: Scalars['Bytes'];
  id: Scalars['ID'];
  prevHighestBidder: Scalars['Bytes'];
  proposalId: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};

export type BidHistory_Filter = {
  highestBid?: InputMaybe<Scalars['BigInt']>;
  highestBid_gt?: InputMaybe<Scalars['BigInt']>;
  highestBid_gte?: InputMaybe<Scalars['BigInt']>;
  highestBid_in?: InputMaybe<Array<Scalars['BigInt']>>;
  highestBid_lt?: InputMaybe<Scalars['BigInt']>;
  highestBid_lte?: InputMaybe<Scalars['BigInt']>;
  highestBid_not?: InputMaybe<Scalars['BigInt']>;
  highestBid_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  highestBidder?: InputMaybe<Scalars['Bytes']>;
  highestBidder_contains?: InputMaybe<Scalars['Bytes']>;
  highestBidder_in?: InputMaybe<Array<Scalars['Bytes']>>;
  highestBidder_not?: InputMaybe<Scalars['Bytes']>;
  highestBidder_not_contains?: InputMaybe<Scalars['Bytes']>;
  highestBidder_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  prevHighestBidder?: InputMaybe<Scalars['Bytes']>;
  prevHighestBidder_contains?: InputMaybe<Scalars['Bytes']>;
  prevHighestBidder_in?: InputMaybe<Array<Scalars['Bytes']>>;
  prevHighestBidder_not?: InputMaybe<Scalars['Bytes']>;
  prevHighestBidder_not_contains?: InputMaybe<Scalars['Bytes']>;
  prevHighestBidder_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proposalId?: InputMaybe<Scalars['BigInt']>;
  proposalId_gt?: InputMaybe<Scalars['BigInt']>;
  proposalId_gte?: InputMaybe<Scalars['BigInt']>;
  proposalId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposalId_lt?: InputMaybe<Scalars['BigInt']>;
  proposalId_lte?: InputMaybe<Scalars['BigInt']>;
  proposalId_not?: InputMaybe<Scalars['BigInt']>;
  proposalId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum BidHistory_OrderBy {
  HighestBid = 'highestBid',
  HighestBidder = 'highestBidder',
  Id = 'id',
  PrevHighestBidder = 'prevHighestBidder',
  ProposalId = 'proposalId',
  Timestamp = 'timestamp'
}

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type BribePerSecond = {
  __typename?: 'BribePerSecond';
  id: Scalars['ID'];
  newReward: Scalars['BigInt'];
  oldReward: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};

export type BribePerSecond_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  newReward?: InputMaybe<Scalars['BigInt']>;
  newReward_gt?: InputMaybe<Scalars['BigInt']>;
  newReward_gte?: InputMaybe<Scalars['BigInt']>;
  newReward_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newReward_lt?: InputMaybe<Scalars['BigInt']>;
  newReward_lte?: InputMaybe<Scalars['BigInt']>;
  newReward_not?: InputMaybe<Scalars['BigInt']>;
  newReward_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oldReward?: InputMaybe<Scalars['BigInt']>;
  oldReward_gt?: InputMaybe<Scalars['BigInt']>;
  oldReward_gte?: InputMaybe<Scalars['BigInt']>;
  oldReward_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oldReward_lt?: InputMaybe<Scalars['BigInt']>;
  oldReward_lte?: InputMaybe<Scalars['BigInt']>;
  oldReward_not?: InputMaybe<Scalars['BigInt']>;
  oldReward_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum BribePerSecond_OrderBy {
  Id = 'id',
  NewReward = 'newReward',
  OldReward = 'oldReward',
  Timestamp = 'timestamp'
}

export type BribeRewardStartTimestamp = {
  __typename?: 'BribeRewardStartTimestamp';
  id: Scalars['ID'];
  oldTimestamp: Scalars['BigInt'];
  startTimestamp: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};

export type BribeRewardStartTimestamp_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  oldTimestamp?: InputMaybe<Scalars['BigInt']>;
  oldTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  oldTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  oldTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oldTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  oldTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  oldTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  oldTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startTimestamp?: InputMaybe<Scalars['BigInt']>;
  startTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  startTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  startTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  startTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  startTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  startTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum BribeRewardStartTimestamp_OrderBy {
  Id = 'id',
  OldTimestamp = 'oldTimestamp',
  StartTimestamp = 'startTimestamp',
  Timestamp = 'timestamp'
}

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  bidHistories: Array<BidHistory>;
  bidHistory?: Maybe<BidHistory>;
  bribePerSecond?: Maybe<BribePerSecond>;
  bribePerSeconds: Array<BribePerSecond>;
  bribeRewardStartTimestamp?: Maybe<BribeRewardStartTimestamp>;
  bribeRewardStartTimestamps: Array<BribeRewardStartTimestamp>;
  user?: Maybe<User>;
  userDeposit?: Maybe<UserDeposit>;
  userDeposits: Array<UserDeposit>;
  userInfo?: Maybe<UserInfo>;
  userInfos: Array<UserInfo>;
  userWithdraw?: Maybe<UserWithdraw>;
  userWithdraws: Array<UserWithdraw>;
  users: Array<User>;
  vote?: Maybe<Vote>;
  votes: Array<Vote>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryBidHistoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BidHistory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BidHistory_Filter>;
};


export type QueryBidHistoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBribePerSecondArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBribePerSecondsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BribePerSecond_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BribePerSecond_Filter>;
};


export type QueryBribeRewardStartTimestampArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBribeRewardStartTimestampsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BribeRewardStartTimestamp_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BribeRewardStartTimestamp_Filter>;
};


export type QueryUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUserDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUserDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserDeposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserDeposit_Filter>;
};


export type QueryUserInfoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUserInfosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserInfo_Filter>;
};


export type QueryUserWithdrawArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUserWithdrawsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserWithdraw_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserWithdraw_Filter>;
};


export type QueryUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};


export type QueryVoteArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVotesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Vote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Vote_Filter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  bidHistories: Array<BidHistory>;
  bidHistory?: Maybe<BidHistory>;
  bribePerSecond?: Maybe<BribePerSecond>;
  bribePerSeconds: Array<BribePerSecond>;
  bribeRewardStartTimestamp?: Maybe<BribeRewardStartTimestamp>;
  bribeRewardStartTimestamps: Array<BribeRewardStartTimestamp>;
  user?: Maybe<User>;
  userDeposit?: Maybe<UserDeposit>;
  userDeposits: Array<UserDeposit>;
  userInfo?: Maybe<UserInfo>;
  userInfos: Array<UserInfo>;
  userWithdraw?: Maybe<UserWithdraw>;
  userWithdraws: Array<UserWithdraw>;
  users: Array<User>;
  vote?: Maybe<Vote>;
  votes: Array<Vote>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionBidHistoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BidHistory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BidHistory_Filter>;
};


export type SubscriptionBidHistoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBribePerSecondArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBribePerSecondsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BribePerSecond_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BribePerSecond_Filter>;
};


export type SubscriptionBribeRewardStartTimestampArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBribeRewardStartTimestampsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BribeRewardStartTimestamp_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BribeRewardStartTimestamp_Filter>;
};


export type SubscriptionUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUserDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUserDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserDeposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserDeposit_Filter>;
};


export type SubscriptionUserInfoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUserInfosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserInfo_Filter>;
};


export type SubscriptionUserWithdrawArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUserWithdrawsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserWithdraw_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserWithdraw_Filter>;
};


export type SubscriptionUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};


export type SubscriptionVoteArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVotesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Vote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Vote_Filter>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
};

export type UserDeposit = {
  __typename?: 'UserDeposit';
  amount: Scalars['BigInt'];
  asset: Scalars['Bytes'];
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  user: Scalars['Bytes'];
};

export type UserDeposit_Filter = {
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  asset?: InputMaybe<Scalars['Bytes']>;
  asset_contains?: InputMaybe<Scalars['Bytes']>;
  asset_in?: InputMaybe<Array<Scalars['Bytes']>>;
  asset_not?: InputMaybe<Scalars['Bytes']>;
  asset_not_contains?: InputMaybe<Scalars['Bytes']>;
  asset_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  user?: InputMaybe<Scalars['Bytes']>;
  user_contains?: InputMaybe<Scalars['Bytes']>;
  user_in?: InputMaybe<Array<Scalars['Bytes']>>;
  user_not?: InputMaybe<Scalars['Bytes']>;
  user_not_contains?: InputMaybe<Scalars['Bytes']>;
  user_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum UserDeposit_OrderBy {
  Amount = 'amount',
  Asset = 'asset',
  Id = 'id',
  Timestamp = 'timestamp',
  User = 'user'
}

export type UserInfo = {
  __typename?: 'UserInfo';
  aaveLastBidId: Scalars['BigInt'];
  bribeLastRewardPerShare: Scalars['BigInt'];
  id: Scalars['ID'];
  stkAaveLastBidId: Scalars['BigInt'];
  stkAaveLastRewardPerShare: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  totalPendingBidReward: Scalars['BigInt'];
  totalPendingBribeReward: Scalars['BigInt'];
  totalPendingStkAaveReward: Scalars['BigInt'];
  user: User;
};

export type UserInfo_Filter = {
  aaveLastBidId?: InputMaybe<Scalars['BigInt']>;
  aaveLastBidId_gt?: InputMaybe<Scalars['BigInt']>;
  aaveLastBidId_gte?: InputMaybe<Scalars['BigInt']>;
  aaveLastBidId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  aaveLastBidId_lt?: InputMaybe<Scalars['BigInt']>;
  aaveLastBidId_lte?: InputMaybe<Scalars['BigInt']>;
  aaveLastBidId_not?: InputMaybe<Scalars['BigInt']>;
  aaveLastBidId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bribeLastRewardPerShare?: InputMaybe<Scalars['BigInt']>;
  bribeLastRewardPerShare_gt?: InputMaybe<Scalars['BigInt']>;
  bribeLastRewardPerShare_gte?: InputMaybe<Scalars['BigInt']>;
  bribeLastRewardPerShare_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bribeLastRewardPerShare_lt?: InputMaybe<Scalars['BigInt']>;
  bribeLastRewardPerShare_lte?: InputMaybe<Scalars['BigInt']>;
  bribeLastRewardPerShare_not?: InputMaybe<Scalars['BigInt']>;
  bribeLastRewardPerShare_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  stkAaveLastBidId?: InputMaybe<Scalars['BigInt']>;
  stkAaveLastBidId_gt?: InputMaybe<Scalars['BigInt']>;
  stkAaveLastBidId_gte?: InputMaybe<Scalars['BigInt']>;
  stkAaveLastBidId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stkAaveLastBidId_lt?: InputMaybe<Scalars['BigInt']>;
  stkAaveLastBidId_lte?: InputMaybe<Scalars['BigInt']>;
  stkAaveLastBidId_not?: InputMaybe<Scalars['BigInt']>;
  stkAaveLastBidId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stkAaveLastRewardPerShare?: InputMaybe<Scalars['BigInt']>;
  stkAaveLastRewardPerShare_gt?: InputMaybe<Scalars['BigInt']>;
  stkAaveLastRewardPerShare_gte?: InputMaybe<Scalars['BigInt']>;
  stkAaveLastRewardPerShare_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stkAaveLastRewardPerShare_lt?: InputMaybe<Scalars['BigInt']>;
  stkAaveLastRewardPerShare_lte?: InputMaybe<Scalars['BigInt']>;
  stkAaveLastRewardPerShare_not?: InputMaybe<Scalars['BigInt']>;
  stkAaveLastRewardPerShare_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalPendingBidReward?: InputMaybe<Scalars['BigInt']>;
  totalPendingBidReward_gt?: InputMaybe<Scalars['BigInt']>;
  totalPendingBidReward_gte?: InputMaybe<Scalars['BigInt']>;
  totalPendingBidReward_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalPendingBidReward_lt?: InputMaybe<Scalars['BigInt']>;
  totalPendingBidReward_lte?: InputMaybe<Scalars['BigInt']>;
  totalPendingBidReward_not?: InputMaybe<Scalars['BigInt']>;
  totalPendingBidReward_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalPendingBribeReward?: InputMaybe<Scalars['BigInt']>;
  totalPendingBribeReward_gt?: InputMaybe<Scalars['BigInt']>;
  totalPendingBribeReward_gte?: InputMaybe<Scalars['BigInt']>;
  totalPendingBribeReward_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalPendingBribeReward_lt?: InputMaybe<Scalars['BigInt']>;
  totalPendingBribeReward_lte?: InputMaybe<Scalars['BigInt']>;
  totalPendingBribeReward_not?: InputMaybe<Scalars['BigInt']>;
  totalPendingBribeReward_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalPendingStkAaveReward?: InputMaybe<Scalars['BigInt']>;
  totalPendingStkAaveReward_gt?: InputMaybe<Scalars['BigInt']>;
  totalPendingStkAaveReward_gte?: InputMaybe<Scalars['BigInt']>;
  totalPendingStkAaveReward_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalPendingStkAaveReward_lt?: InputMaybe<Scalars['BigInt']>;
  totalPendingStkAaveReward_lte?: InputMaybe<Scalars['BigInt']>;
  totalPendingStkAaveReward_not?: InputMaybe<Scalars['BigInt']>;
  totalPendingStkAaveReward_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  user?: InputMaybe<Scalars['String']>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
};

export enum UserInfo_OrderBy {
  AaveLastBidId = 'aaveLastBidId',
  BribeLastRewardPerShare = 'bribeLastRewardPerShare',
  Id = 'id',
  StkAaveLastBidId = 'stkAaveLastBidId',
  StkAaveLastRewardPerShare = 'stkAaveLastRewardPerShare',
  Timestamp = 'timestamp',
  TotalPendingBidReward = 'totalPendingBidReward',
  TotalPendingBribeReward = 'totalPendingBribeReward',
  TotalPendingStkAaveReward = 'totalPendingStkAaveReward',
  User = 'user'
}

export type UserWithdraw = {
  __typename?: 'UserWithdraw';
  amount: Scalars['BigInt'];
  asset: Scalars['Bytes'];
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  user: Scalars['Bytes'];
};

export type UserWithdraw_Filter = {
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  asset?: InputMaybe<Scalars['Bytes']>;
  asset_contains?: InputMaybe<Scalars['Bytes']>;
  asset_in?: InputMaybe<Array<Scalars['Bytes']>>;
  asset_not?: InputMaybe<Scalars['Bytes']>;
  asset_not_contains?: InputMaybe<Scalars['Bytes']>;
  asset_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  user?: InputMaybe<Scalars['Bytes']>;
  user_contains?: InputMaybe<Scalars['Bytes']>;
  user_in?: InputMaybe<Array<Scalars['Bytes']>>;
  user_not?: InputMaybe<Scalars['Bytes']>;
  user_not_contains?: InputMaybe<Scalars['Bytes']>;
  user_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum UserWithdraw_OrderBy {
  Amount = 'amount',
  Asset = 'asset',
  Id = 'id',
  Timestamp = 'timestamp',
  User = 'user'
}

export type User_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

export enum User_OrderBy {
  Id = 'id'
}

export type Vote = {
  __typename?: 'Vote';
  id: Scalars['ID'];
  proposalId: Scalars['BigInt'];
  support: Scalars['Boolean'];
  timestamp: Scalars['BigInt'];
  user: Scalars['Bytes'];
};

export type Vote_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  proposalId?: InputMaybe<Scalars['BigInt']>;
  proposalId_gt?: InputMaybe<Scalars['BigInt']>;
  proposalId_gte?: InputMaybe<Scalars['BigInt']>;
  proposalId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposalId_lt?: InputMaybe<Scalars['BigInt']>;
  proposalId_lte?: InputMaybe<Scalars['BigInt']>;
  proposalId_not?: InputMaybe<Scalars['BigInt']>;
  proposalId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  support?: InputMaybe<Scalars['Boolean']>;
  support_in?: InputMaybe<Array<Scalars['Boolean']>>;
  support_not?: InputMaybe<Scalars['Boolean']>;
  support_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  user?: InputMaybe<Scalars['Bytes']>;
  user_contains?: InputMaybe<Scalars['Bytes']>;
  user_in?: InputMaybe<Array<Scalars['Bytes']>>;
  user_not?: InputMaybe<Scalars['Bytes']>;
  user_not_contains?: InputMaybe<Scalars['Bytes']>;
  user_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum Vote_OrderBy {
  Id = 'id',
  ProposalId = 'proposalId',
  Support = 'support',
  Timestamp = 'timestamp',
  User = 'user'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type UserDepositsQueryVariables = Exact<{ [key: string]: never; }>;


export type UserDepositsQuery = { __typename?: 'Query', userDeposits: Array<{ __typename: 'UserDeposit', user: any, id: string, asset: any, amount: any, timestamp: any }> };

export type UserWithdrawsQueryVariables = Exact<{ [key: string]: never; }>;


export type UserWithdrawsQuery = { __typename?: 'Query', userWithdraws: Array<{ __typename: 'UserWithdraw', user: any, id: string, asset: any, amount: any, timestamp: any }> };

export type VotesQueryVariables = Exact<{ [key: string]: never; }>;


export type VotesQuery = { __typename?: 'Query', votes: Array<{ __typename: 'Vote', id: string, proposalId: any, support: boolean, timestamp: any }> };

export type BidsQueryVariables = Exact<{ [key: string]: never; }>;


export type BidsQuery = { __typename?: 'Query', bidHistories: Array<{ __typename: 'BidHistory', id: string, proposalId: any, prevHighestBidder: any, highestBidder: any, highestBid: any, timestamp: any }> };

export type BidsPerProposalQueryVariables = Exact<{
  pid?: InputMaybe<Scalars['BigInt']>;
}>;


export type BidsPerProposalQuery = { __typename?: 'Query', bidHistories: Array<{ __typename?: 'BidHistory', id: string, proposalId: any, highestBidder: any, highestBid: any, timestamp: any }> };

export type MyBidsQueryVariables = Exact<{
  me?: InputMaybe<Scalars['Bytes']>;
}>;


export type MyBidsQuery = { __typename?: 'Query', bidHistories: Array<{ __typename?: 'BidHistory', id: string, proposalId: any, highestBidder: any, highestBid: any, timestamp: any }> };

export type RewardsQueryVariables = Exact<{ [key: string]: never; }>;


export type RewardsQuery = { __typename?: 'Query', bribePerSeconds: Array<{ __typename: 'BribePerSecond', id: string, oldReward: any, newReward: any, timestamp: any }> };


export const UserDepositsDocument = `
    query UserDeposits {
  userDeposits {
    __typename
    user
    id
    asset
    amount
    timestamp
    user
  }
}
    `;
export const useUserDepositsQuery = <
      TData = UserDepositsQuery,
      TError = unknown
    >(
      variables?: UserDepositsQueryVariables,
      options?: UseQueryOptions<UserDepositsQuery, TError, TData>
    ) =>
    useQuery<UserDepositsQuery, TError, TData>(
      variables === undefined ? ['UserDeposits'] : ['UserDeposits', variables],
      fetcher<UserDepositsQuery, UserDepositsQueryVariables>(UserDepositsDocument, variables),
      options
    );
export const UserWithdrawsDocument = `
    query UserWithdraws {
  userWithdraws {
    __typename
    user
    id
    asset
    amount
    timestamp
  }
}
    `;
export const useUserWithdrawsQuery = <
      TData = UserWithdrawsQuery,
      TError = unknown
    >(
      variables?: UserWithdrawsQueryVariables,
      options?: UseQueryOptions<UserWithdrawsQuery, TError, TData>
    ) =>
    useQuery<UserWithdrawsQuery, TError, TData>(
      variables === undefined ? ['UserWithdraws'] : ['UserWithdraws', variables],
      fetcher<UserWithdrawsQuery, UserWithdrawsQueryVariables>(UserWithdrawsDocument, variables),
      options
    );
export const VotesDocument = `
    query Votes {
  votes {
    __typename
    id
    proposalId
    support
    timestamp
  }
}
    `;
export const useVotesQuery = <
      TData = VotesQuery,
      TError = unknown
    >(
      variables?: VotesQueryVariables,
      options?: UseQueryOptions<VotesQuery, TError, TData>
    ) =>
    useQuery<VotesQuery, TError, TData>(
      variables === undefined ? ['Votes'] : ['Votes', variables],
      fetcher<VotesQuery, VotesQueryVariables>(VotesDocument, variables),
      options
    );
export const BidsDocument = `
    query Bids {
  bidHistories {
    __typename
    id
    proposalId
    prevHighestBidder
    highestBidder
    highestBid
    timestamp
  }
}
    `;
export const useBidsQuery = <
      TData = BidsQuery,
      TError = unknown
    >(
      variables?: BidsQueryVariables,
      options?: UseQueryOptions<BidsQuery, TError, TData>
    ) =>
    useQuery<BidsQuery, TError, TData>(
      variables === undefined ? ['Bids'] : ['Bids', variables],
      fetcher<BidsQuery, BidsQueryVariables>(BidsDocument, variables),
      options
    );
export const BidsPerProposalDocument = `
    query BidsPerProposal($pid: BigInt) {
  bidHistories(where: {proposalId: $pid}) {
    id
    proposalId
    highestBidder
    highestBid
    timestamp
  }
}
    `;
export const useBidsPerProposalQuery = <
      TData = BidsPerProposalQuery,
      TError = unknown
    >(
      variables?: BidsPerProposalQueryVariables,
      options?: UseQueryOptions<BidsPerProposalQuery, TError, TData>
    ) =>
    useQuery<BidsPerProposalQuery, TError, TData>(
      variables === undefined ? ['BidsPerProposal'] : ['BidsPerProposal', variables],
      fetcher<BidsPerProposalQuery, BidsPerProposalQueryVariables>(BidsPerProposalDocument, variables),
      options
    );
export const MyBidsDocument = `
    query MyBids($me: Bytes) {
  bidHistories(where: {highestBidder: $me}) {
    id
    proposalId
    highestBidder
    highestBid
    timestamp
  }
}
    `;
export const useMyBidsQuery = <
      TData = MyBidsQuery,
      TError = unknown
    >(
      variables?: MyBidsQueryVariables,
      options?: UseQueryOptions<MyBidsQuery, TError, TData>
    ) =>
    useQuery<MyBidsQuery, TError, TData>(
      variables === undefined ? ['MyBids'] : ['MyBids', variables],
      fetcher<MyBidsQuery, MyBidsQueryVariables>(MyBidsDocument, variables),
      options
    );
export const RewardsDocument = `
    query Rewards {
  bribePerSeconds {
    __typename
    id
    oldReward
    newReward
    timestamp
  }
}
    `;
export const useRewardsQuery = <
      TData = RewardsQuery,
      TError = unknown
    >(
      variables?: RewardsQueryVariables,
      options?: UseQueryOptions<RewardsQuery, TError, TData>
    ) =>
    useQuery<RewardsQuery, TError, TData>(
      variables === undefined ? ['Rewards'] : ['Rewards', variables],
      fetcher<RewardsQuery, RewardsQueryVariables>(RewardsDocument, variables),
      options
    );
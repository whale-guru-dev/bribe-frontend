import {
  BidHistory,
  BidsQuery,
  RewardsQuery,
  useBidsPerProposalQuery,
  UserDepositsQuery,
  UserWithdrawsQuery,
} from "codegen";
import {formatUnits} from "ethers/lib/utils";
import {UseQueryResult} from "react-query";
import {DateTime} from "luxon";
import {
  useAaveGovernance,
  useAaveProposal,
  useProposalContent,
  useVoteStatistics,
} from "hooks/aaveGovernance";
import {useAavePoolInfo} from "hooks/aavePool";
import {formatAmount} from "utils";
import {useWeb3React} from "@web3-react/core";

const formatNumber = (amount: string | number, decimals: number) => {
  try {
    return Number(formatUnits(String(amount), decimals));
  } catch (e) {
    return 0;
  }
};

const filterDupplicateDates = (data: ChartRewardItem[]): ChartRewardItem[] => {
  return Object.values(
    data.reduce((acc, cur) => {
      return {
        ...acc,
        [cur.date]: acc[cur.date]
          ? cur.timestamp > acc[cur.date].timestamp
            ? cur
            : acc[cur.date]
          : cur,
      };
    }, {}),
  );
};

type ChartRewardItem = {
  amount: number;
  date: string;
  totalAmount: number;
  timestamp: number;
  bribeRate: number;
  bribe: number;
  usdc: number;
  usdcRewards: number;
};

// Compute rewards for one user
export const computeRewards = (
  bids: UseQueryResult<BidsQuery, unknown>,
  deposits: UseQueryResult<UserDepositsQuery, unknown>,
  withdraws: UseQueryResult<UserWithdrawsQuery, unknown>,
  rewards: UseQueryResult<RewardsQuery, unknown>,
  account: string,
  usdcDecimals: number,
  bribeDecimals: number,
  aaveDecimals: number,
): ChartRewardItem[] => {
  const deps = deposits.data?.userDeposits || [];
  const wds =
    withdraws.data?.userWithdraws.map((ud) => {
      ud.amount = -ud.amount;
      return ud;
    }) || [];
  const rwds = rewards.data?.bribePerSeconds || [];
  const bds = Object.values(
    (bids.data?.bidHistories || []).reduce((acc, cur) => {
      return {
        ...acc,
        [cur.proposalId]:
          acc[cur.proposalId]?.highestBidder > cur.highestBidder
            ? acc[cur.proposalId]
            : cur,
      };
    }, {} as {[key: string]: BidHistory}),
  );
  let amount = 0;
  // the graph start at the 1st deposit
  const agg = [
    ...[...deps, ...wds].sort((a, b) => (a.timestamp > b.timestamp ? 0 : -1)),
    ...rwds,
    ...bds,
  ].reduce((acc, cur, index) => {
    if (cur?.__typename == "UserDeposit" || cur.__typename == "UserWithdraw") {
      // console.log(cur.user, account);
      const totalAmount =
        (acc[index - 1]?.totalAmount || 0) +
        formatNumber(cur.amount, aaveDecimals);
      if (cur.user == account?.toLowerCase()) {
        amount = amount + formatNumber(cur.amount, aaveDecimals);
      }
      return [
        ...acc,
        {
          totalAmount,
          amount,
          timestamp: cur.timestamp,
          bribeRate: 0,
          usdc: 0,
        },
      ];
    }
    if (cur?.__typename == "BribePerSecond") {
      const previous = acc.filter((c) => c.timestamp < cur.timestamp);
      return [
        ...(previous || []),
        {
          amount: previous[previous.length - 1]?.amount || 0,
          totalAmount: previous[previous.length - 1]?.totalAmount || 0,
          timestamp: cur.timestamp,
          bribeRate: formatNumber(cur.newReward, bribeDecimals),
          usdc: 0,
        },
        ...acc
          .filter((c) => c.timestamp >= cur.timestamp)
          .map((c) => ({
            ...c,
            bribeRate: formatNumber(cur.newReward, bribeDecimals),
          })),
      ];
    }
    if (cur.__typename == "BidHistory") {
      // bids only
      const previous = acc.filter((c) => c.timestamp < cur.timestamp);
      return [
        ...(previous || []),
        {
          amount: previous[previous.length - 1]?.amount || 0,
          totalAmount: previous[previous.length - 1]?.totalAmount || 0,
          timestamp: cur.timestamp,
          bribeRate: previous[previous.length - 1]?.bribeRate || 0,
          usdc:
            (previous[previous.length - 1]?.usdc || 0) +
            formatNumber(cur.highestBid, usdcDecimals),
        },
        ...acc
          .filter((c) => c.timestamp >= cur.timestamp)
          .map((c) => ({
            ...c,
            usdc: c.usdc + formatNumber(cur.highestBid, usdcDecimals),
          })),
      ];
    }
    return acc;
  }, [] as {amount: number; totalAmount: number; timestamp: number; bribeRate: number; usdc: number}[]);
  return filterDupplicateDates(
    [...agg, {...agg[agg.length - 1], timestamp: Date.now() / 1000}]
      // feed empty days with data
      .reduce((acc, cur) => {
        if (!acc || !acc[acc.length - 2]) return [...(acc || []), cur];
        const previousDay = DateTime.fromSeconds(
          Number(acc[acc.length - 2].timestamp),
        );
        const currentDay = DateTime.fromSeconds(Number(cur.timestamp));
        const diff = currentDay.diff(previousDay, "days");
        if (
          diff.days < 0 ||
          (diff.days < 1 && previousDay.daysInMonth == currentDay.daysInMonth)
        ) {
          // remove precedent day slot
          acc.pop();
        }
        const diffDays: any[] = [];
        for (var i = 1; i < diff.days - 1; i++) {
          diffDays.push({
            ...acc[acc.length - 2],
            timestamp: String(previousDay.plus({days: i}).toSeconds()),
          });
          // }
        }
        return [...(acc || []), ...(diffDays || []), cur];
      }, [] as {amount: number; totalAmount: number; timestamp: number; bribeRate: number; usdc: number}[])
      .reduce((acc, cur, index) => {
        const userShare = acc[index - 1]?.amount / acc[index - 1]?.totalAmount;
        const duration = cur.timestamp - acc[index - 1]?.timestamp;
        const accumulatedSince =
          duration * userShare * acc[index - 1]?.bribeRate;
        const usdcRewards = (cur.usdc * cur.amount) / cur.totalAmount;
        return [
          ...acc,
          {
            ...cur,
            usdcRewards,
            date: new Date(cur.timestamp * 1000).toLocaleDateString(),
            bribe: Number(
              ((acc[index - 1]?.bribe || 0) + accumulatedSince).toFixed(),
            ),
          },
        ];
      }, [] as ChartRewardItem[]),
  );
};

type StatusStates =
  | "Pending"
  | "Canceled"
  | "Active"
  | "Failed"
  | "Succeeded"
  | "Queued"
  | "Expired"
  | "Executed";

type ProposalInfo = {
  status: StatusStates;
  description: string;
  isSuccess: boolean;
  finalBid: string;
  vote: "Yay" | "Nay";
  date: Date;
  myRewards: number;
  rank?: number;
  yourBid: number;
};

export const extractProposalInfo = (
  pid: string,
  timestamp: string, // vote timestamp
  id: string,
): ProposalInfo => {
  const proposal = useAaveProposal(pid);
  const bids = useBidsPerProposalQuery({pid});
  const proposalContent = useProposalContent(proposal?.ipfsHash || "");
  const aavePool = useAavePoolInfo();
  const vote = proposal?.forVotes.gt(proposal.againstVotes) ? "Yay" : "Nay";
  const currentBid = aavePool.bids[pid];
  const rank = bids.data?.bidHistories
    .sort((a, b) => (a.highestBid > b.highestBid ? -1 : 1))
    .findIndex((b) => b.id == id);
  const yourBid =
    Number(bids.data?.bidHistories.find((b) => b.id == id)?.highestBid || 0) /
    Math.pow(10, aavePool.bidAsset?.decimals || 18);
  // const yourBid = 0;
  const myRewards =
    (proposal &&
      currentBid &&
      !proposal.poolVotingPower.isZero() &&
      formatAmount(
        proposal?.userVotingPower
          .div(proposal.poolVotingPower)
          .mul(currentBid.highestBid || 0)
          .mul(86)
          .div(100),
        aavePool.bidAsset?.decimals || 18,
      )) ||
    0;
  return {
    status: (proposal?.status || "") as StatusStates,
    description: proposalContent?.title || "",
    vote,
    finalBid: formatUnits(
      aavePool.bids[pid]?.highestBid || 0,
      aavePool.bidAsset?.decimals || 18,
    ),
    date: new Date(Number(timestamp) * 1000),
    isSuccess:
      currentBid?.support == proposal?.forVotes.gt(proposal.againstVotes)
        ? true
        : false,
    myRewards,
    rank,
    yourBid,
  };
};

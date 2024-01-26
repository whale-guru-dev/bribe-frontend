import {useWeb3React} from "@web3-react/core";
import {usePriceFromGecko} from "blockchain-integration";
import {
  useBidsQuery,
  useMyBidsQuery,
  useRewardsQuery,
  useUserDepositsQuery,
  useUserWithdrawsQuery,
  useVotesQuery,
} from "codegen";
import {ProposalBox, TableBody} from "components/Dashboard";
import Pagination from "components/Dashboard/pagination";
import {AaveIconWithColor, YearnIcon} from "components/SVGicons";
import {geckoBribeID} from "config";
import {useAaveGovernance} from "hooks/aaveGovernance";
import {useAavePoolInfo} from "hooks/aavePool";
import {memo, useEffect, useMemo, useState} from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {computeRewards} from "utils/computeRewards";

const DashboardPage = () => {
  const {account} = useWeb3React();
  const [currentBidHistoryPage, setBidHistoryCurrentPage] = useState(1);
  const [currentVoteHistoryPage, setVoteHistoryCurrentPage] = useState(1);
  const votes = useVotesQuery();
  const bids = useBidsQuery();
  const myBids = useMyBidsQuery({me: account});
  const deposits = useUserDepositsQuery();
  const withdraws = useUserWithdrawsQuery();
  const rewards = useRewardsQuery();
  const pool = useAavePoolInfo();
  const handleBidHistoryPageChange = (page) => {
    setBidHistoryCurrentPage(page);
  };
  const handleVoteHistoryPageChange = (page) => {
    setVoteHistoryCurrentPage(page);
  };
  const [bribePrice] = usePriceFromGecko([geckoBribeID]);
  const chartData = computeRewards(
    bids,
    deposits,
    withdraws,
    rewards,
    account as string,
    pool.bidAsset?.decimals || 18,
    pool.bribe?.decimals || 18,
    pool.aave?.decimals || 18,
  );
  const {activeProposals} = useAaveGovernance();
  const [mobileWindowBool, setMobileWindowBool] = useState(false);

  const checkWindowWidth = () => {
    if (typeof window != "undefined") {
      if (window.innerWidth < 700) {
        setMobileWindowBool(true);
      }
      if (window.innerWidth >= 700) {
        setMobileWindowBool(false);
      }
    }
  };

  useEffect(() => {
    if (typeof window != "undefined") {
      window.addEventListener("resize", checkWindowWidth);
      return () => window.removeEventListener("resize", checkWindowWidth);
    }
  }, []);


  return (
    <div className="w-full">
      <div className="bg-secondary-gray-lightest dark:bg-secondary-gray-lightest-alt pt-24 pb-16">
        <div className="content-container">
          {/* Total Rewards Section Start */}
          <h3 className="font-bold">Total Rewards</h3>

          <div className="text-center mt-4">
            <h6 className="mb-2">Total Rewards</h6>

            <h4 className="mb-6">
              $
              {(
                chartData[chartData.length - 1].bribe * bribePrice +
                chartData[chartData.length - 1].usdcRewards
              ).toFixed(2)}
            </h4>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-center">
              Bribe Rewards $
              {(chartData[chartData.length - 1].bribe * bribePrice).toFixed(2)}
            </p>
            <p className="text-center">
              USDC Rewards ${chartData[chartData.length - 1].usdcRewards}
            </p>
          </div>

          <div className="w-full mt-6 h-[250px] sm:h-[450px]">
            <ResponsiveContainer>
              <AreaChart data={chartData} margin={{right: 50}}>
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D1DBE0" stopOpacity={1} />
                    <stop offset="95%" stopColor="#D1DBE0" stopOpacity={0.2} />
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#333E44" stopOpacity={1} />
                    <stop offset="95%" stopColor="#333E44" stopOpacity={0.4} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="date"
                  angle={22.5}
                  height={50}
                  dy={15}
                  interval={mobileWindowBool ? 2.5 : 0}
                  fontSize={12}
                />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip
                  contentStyle={{
                    color: "#6A757A",
                    background: "#333E44",
                    border: "none",
                    borderRadius: "10px",
                  }}
                  itemStyle={{color: "#FAFAFA"}}
                />
                <Area
                  type="monotone"
                  dataKey="usdcRewards"
                  stroke={"#999999"}
                  strokeOpacity={0.5}
                  fillOpacity={0.8}
                  fill="url(#colorUv)"
                />
                <Area
                  type="monotone"
                  dataKey="bribe"
                  stroke={"#999999"}
                  strokeOpacity={0.5}
                  fillOpacity={0.5}
                  fill="url(#colorPv)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          {/* Total Rewards Section End */}
        </div>
      </div>

      <div className="content-container my-24">
        <div className="mb-16">
          {/* Current Proposal Section Start */}
          <h5>Current Proposals</h5>

          <ProposalBox proposals={activeProposals} />
          {/* Current Proposal Section End */}
        </div>

        <div className="mb-16">
          {/* Vote History Section Start */}
          <h5>Your Vote History</h5>

          <p className="subtitle">
            Your governance tokens have been used in the following votes
          </p>

          <div className="shadow-sm overflow-hidden inline-block rounded-lg border border-secondary-gray-light dark:border-secondary-gray-light-alt w-full mt-6">
            <table className="table-auto w-full caption">
              <thead>
                <tr className="grid grid-cols-12 border-b border-secondary-gray dark:border-secondary-gray-alt">
                  <th className="col-span-4 hidden md:block font-medium p-4 text-left">
                    Proposal
                  </th>
                  <th className="col-span-2 md:col-span-1 font-medium py-4 md:p-4 text-center">
                    Vote
                  </th>
                  <th className="col-span-2 md:col-span-1 font-medium py-4 md:p-4 text-center md:text-right">
                    Success
                  </th>
                  <th className="col-span-5 md:col-span-2 font-medium p-4 text-center md:text-right whitespace-nowrap">
                    Final Bid
                  </th>
                  <th className="col-span-3 md:col-span-2 font-medium p-4 text-center md:text-right whitespace-nowrap">
                    Your Reward
                  </th>
                  <th className="hidden md:block md:col-span-2 font-medium p-4 text-center md:text-right">
                    Date
                  </th>
                </tr>
              </thead>
              <TableBody data={votes.data?.votes || []} type="votes" />
            </table>
            <Pagination
              pageSize={5}
              totalItems={votes.data?.votes.length || 0}
              currentPage={currentVoteHistoryPage}
              handlePageChange={handleVoteHistoryPageChange}
            />
          </div>
          {/* Vote History Section End */}
        </div>

        <div className="mb-16">
          {/* Bid History Section Start */}
          <h5>Your Bid History</h5>

          <p className="subtitle">
            You bid to use Bribe Protocol on the following proposals
          </p>

          <div className="shadow-sm inline-block rounded-lg border border-secondary-gray-light dark:border-secondary-gray-light-alt w-full mt-6 pb-4">
            <table className="table-auto w-full caption">
              <thead>
                <tr className="grid grid-cols-12 border-b border-secondary-gray dark:border-secondary-gray-alt">
                  <th className="col-span-4 hidden md:block font-medium p-4 text-left">
                    Proposal
                  </th>
                  <th className="col-span-2 md:col-span-1 font-medium py-4 md:p-4 text-center">
                    Vote
                  </th>
                  <th className="col-span-2 md:col-span-1 font-medium py-4 md:p-4 text-center md:text-right">
                    Success
                  </th>
                  <th className="col-span-5 md:col-span-2 font-medium p-4 text-center md:text-right">
                    Bid
                  </th>
                  <th className="col-span-3 md:col-span-2 font-medium p-4 text-center md:text-right">
                    Rank
                  </th>
                  <th className="hidden md:block md:col-span-2 font-medium p-4 text-center md:text-right">
                    Date
                  </th>
                </tr>
              </thead>
              <TableBody data={myBids.data?.bidHistories || []} type="bids" />
            </table>
            <Pagination
              pageSize={5}
              totalItems={myBids.data?.bidHistories.length || 0}
              currentPage={currentBidHistoryPage}
              handlePageChange={handleBidHistoryPageChange}
            />
          </div>
          {/* Bid History Section End */}
        </div>
      </div>
    </div>
  );
};

export default memo(DashboardPage);

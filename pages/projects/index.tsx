import {DateTime, Interval} from "luxon";
import {ethers} from "ethers";
import {useAaveGovernance} from "hooks/aaveGovernance";
import {useAavePool, useAavePoolInfo} from "hooks/aavePool";
import {useWeb3React} from "@web3-react/core";

type PositionItemProps = {
  title: string;
  value: any;
  action: string;
};

const PositionItem = ({title, value, action}: PositionItemProps) => {
  return (
    <div className="w-1/5">
      <h3 className="text-base">{title}</h3>
      <div className="text-4xl my-2 font-light">{value}</div>
      <button className="bg-grey-3 py-2 w-full text-white">{action}</button>
    </div>
  );
};

const Project = () => {
  const aaveGovernance = useAaveGovernance();
  const aavePool = useAavePoolInfo();
  const unclaimedUSDC = 418;
  const bribeRewards = 23;
  const highestBid = 100000;
  const nextVoteExp = DateTime.now().plus({days: 7});
  const nextVoteDur = Interval.fromDateTimes(
    DateTime.now(),
    nextVoteExp,
  ).toDuration();
  return (
    <div className="mx-auto max-w-7xl w-2/3 mt-8">
      {/* Current position block */}
      <div className="flex justify-around w-full">
        <div>
          <h1>Your Rewards</h1>
          <div className="flex space-x-4">
            <div className="text-center">
              <h3>Bribe rewards</h3>
              {}
            </div>
          </div>
        </div>
        <PositionItem
          title="Unclaimed USDC"
          value={"$ " + unclaimedUSDC}
          action="Claim USDC"
        />
        <PositionItem
          title="Bribe Rewards"
          value={bribeRewards}
          action="Harvest Bribe"
        />
        <PositionItem
          title="Next vote finishes in..."
          value={
            // nextVoteDur?.days +
            // " days " +
            nextVoteDur?.hours + " hrs " + nextVoteDur?.minutes + " min "
          }
          action="View Proposal"
        />

        <PositionItem
          title="Current highest bid"
          value={"$ " + ethers.utils.commify(highestBid)}
          action="Claim USDC"
        />
      </div>
      {/* Proposal table */}
      <div className="flex w-full mt-28 py-4">
        <div className="w-1/6 px-4">Project</div>
        <div className="w-1/6 px-4">APR</div>
        <div className="w-1/6 px-4">Bribe Rewards</div>
        <div className="w-1/6 px-4">Active Proposals</div>
        <div className="w-1/6 px-4">Your Votes (Deposited)</div>
        <div className="w-1/6 px-4">Voting Power (TVL)</div>
      </div>
      <div className="flex w-full bg-grey-4 py-12 border-black border mt-4">
        <div className="w-1/6 px-4">Aave</div>
        <div className="w-1/6 px-4">17.1%</div>
        <div className="w-1/6 px-4">{aavePool.pendingAaveReward}</div>
        <div className="w-1/6 px-4">{aaveGovernance.counts}</div>
        <div className="w-1/6 px-4">{}</div>
        <div className="w-1/6 px-4">{} StkAave + Aave</div>
      </div>
      {/* <div className="flex w-full bg-grey-4 py-12 border-black border mt-4">
        <div className="w-1/6 px-4">Aave</div>
        <div className="w-1/6 px-4">17.1%</div>
        <div className="w-1/6 px-4">100.17</div>
        <div className="w-1/6 px-4">2</div>
        <div className="w-1/6 px-4">0.00</div>
        <div className="w-1/6 px-4">223.4 StkAave + Aave</div>
      </div>
      <div className="flex w-full bg-grey-4 py-12 border-black border mt-4">
        <div className="w-1/6 px-4">Aave</div>
        <div className="w-1/6 px-4">17.1%</div>
        <div className="w-1/6 px-4">100.17</div>
        <div className="w-1/6 px-4">2</div>
        <div className="w-1/6 px-4">0.00</div>
        <div className="w-1/6 px-4">223.4 StkAave + Aave</div>
      </div> */}
    </div>
  );
};

export default Project;

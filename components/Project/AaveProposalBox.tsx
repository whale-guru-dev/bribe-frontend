import {
  ProposalWithoutVotes,
  useAaveGovernance,
  useProposalContent,
  useVoteStatistics,
} from "hooks/aaveGovernance";
import {useBlockNumber} from "hooks/blocknumber";

import Link from "next/link";
import {ProposalWithoutVotesStructOutput} from "types/AaveGovernanceV2";
import {CheckWithCircleIcon, CrossWithCircleIcon} from "components/SVGicons";
import {useState} from "react";
import {ProgressBar, QuorumProgressBar} from ".";
import {useWeb3React} from "@web3-react/core";
import {useAavePoolInfo} from "hooks/aavePool";
import {formatUnits, parseUnits} from "@ethersproject/units";

// const sampleTooltipContent = {
//   "Estimate influence:": "5.1%",
//   "Bribe vote power:": "12,000",
//   "Bribe protocol vote:": "YAY",
//   "Likely outcome:": "WINNING",
// };

const ProposalItem = ({
  proposal,
  highestBid,
}: {
  proposal: ProposalWithoutVotes;
  highestBid: number;
}) => {
  const proposalContent = useProposalContent(proposal.ipfsHash);

  // const blockNumber = useBlockNumber();
  const {yay, nay, expiration} = useVoteStatistics(proposal);
  return (
    <Link href={"/projects/aave/" + proposal.id.toString()}>
      <a>
        <div className="rounded-lg bg-secondary-gray-lighter dark:bg-secondary-gray-lighter-alt dark:text-primary-onix-alt py-6 mt-4 w-full">
          <p className="body-2 font-bold px-8 mb-4">{proposalContent?.title}</p>
          <div className="flex flex-col px-8 xl:flex-row xl:justify-between xl:space-x-4">
            <div className="border-b-2 pb-4 xl:w-1/2 xl:pb-0 xl:border-b-0">
              <div>
                <p className="my-2 uppercase">
                  {expiration.days} days, {expiration.hours} hours left
                </p>
              </div>
              <p className="mt-6">{proposalContent?.shortDescription}</p>
            </div>
            <div className="w-full pt-4 xl:pt-0 xl:w-1/2">
              <div className="flex items-center space-x-4 my-2">
                <p className="w-12 font-roboto uppercase">YAY</p>
                <ProgressBar votes={yay} voteChoice={"yay"} />
                <p className="w-12 font-roboto">{Math.floor(yay) + "%"}</p>
              </div>
              <div className="flex items-center space-x-4 my-2">
                <p className="w-12 font-roboto uppercase">NAY</p>
                <ProgressBar votes={nay} voteChoice={"nay"} />
                <p className="w-12 font-roboto">{Math.ceil(nay) + "%"}</p>
              </div>
              <div className="flex mt-6">
                <p className="mr-2 font-bold">Highest bid:</p>
                <p className="">${highestBid}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

const ProposalBox = () => {
  const ag = useAaveGovernance();
  const pool = useAavePoolInfo();
  return (
    <>
      {ag.activeProposals
        .sort((a, b) => (a.endBlock > b.endBlock ? 0 : -1))
        .map((ap) => (
          <ProposalItem
            key={ap.id.toString()}
            proposal={ap}
            highestBid={Number(
              formatUnits(
                pool.bids[ap.id.toString()]?.highestBid?.toString() || "0",
                pool?.bidAsset?.decimals,
              ),
            )}
          />
        ))}
    </>
  );
};

export default ProposalBox;

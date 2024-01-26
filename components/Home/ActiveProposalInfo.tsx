import Tooltip from "components/Project/Tooltip";
import {InfoIcon} from "components/SVGicons";
import {commify} from "utils";

export type ProposalProps = {
  name: string;
  nextVoteEnds: string;
  highestBid?: number;
  shareOfPool?: string;
  estimatedBribe?: number;
  bidApr?: string;
};

export type ActiveProposalProps = {
  proposal?: ProposalProps;
  className?: string;
};

const ActiveProposalInfo = ({proposal, className}: ActiveProposalProps) => {
  return (
    <div
      className={`${className} ${
        proposal
          ? "bg-secondary-gray-light dark:bg-secondary-gray-lighter-alt"
          : "border border-secondary-gray-medium dark:border-secondary-gray-medium-alt"
      }`}
    >
      <div className="flex justify-between mb-2">
        <p className="body-2 font-bold whitespace-nowrap mr-2">
          {proposal ? "Next proposal" : "No active proposals"}
        </p>
        {proposal && <p className="body-2">{proposal.name}</p>}
      </div>

      {proposal && (
        <div className="flex justify-between font-medium mb-2">
          <p className="body-2 font-bold whitespace-nowrap mr-2">
            Next vote ends
          </p>
          {proposal && (
            <p className="body-2 text-secondary-gray-dark dark:text-secondary-gray-dark-alt">
              {proposal.nextVoteEnds}
            </p>
          )}
        </div>
      )}

      <div className="flex justify-between font-medium mb-5">
        <p className="body-2 font-bold">Highest bid</p>
        <p
          className={`body-2 ${
            proposal && proposal.highestBid
              ? "text-secondary-gray-dark dark:text-secondary-gray-dark-alt"
              : "text-alert-rubi dark:text-alert-rubi-alt"
          }`}
        >
          {proposal &&
            `${
              proposal && proposal.highestBid
                ? commify(proposal.highestBid)
                : "No bids"
            }`}
        </p>
      </div>

      <div className="flex justify-between mb-2">
        <p className="body-3">Bribe Pool</p>
        <p className="body-3">Aave</p>
      </div>

      <div className="flex justify-between mb-2">
        <p className="body-3">Share of Pool</p>
        <p className="body-3">
          {proposal && proposal.shareOfPool ? `${proposal.shareOfPool}%` : "--"}
        </p>
      </div>

      <div className="flex justify-between mb-2">
        <p className="body-3">Estimated reward</p>
        <p className="body-3">
          {proposal && proposal.estimatedBribe
            ? "$ " + commify(proposal.estimatedBribe)
            : "--"}
        </p>
      </div>

      <div className="flex justify-between">
        <div className="flex items-center">
          <p className="body-3 mr-1">APR this bid</p>
          <Tooltip
            element={
              <InfoIcon
                className="cursor-pointer -mt-1"
                width={18}
                height={18}
              />
            }
            tooltipClasses="bottom-8 -left-16 lg:-right-10"
            tooltipTailClasses="bottom-7 -right-5"
          >
            <div className="text-left input-label">
              <p>APR is determined by ROI/voting period * 365</p>
              <p className="my-1">
                Expected ROI this bid:{" "}
                {proposal && proposal.bidApr
                  ? `${commify(Number(proposal.bidApr || 0))}%`
                  : "--"}
              </p>
              <p>Voting period: 7 days</p>
            </div>
          </Tooltip>
        </div>
        <p className={`body-3 ${proposal && proposal.bidApr && "font-bold"}`}>
          {proposal && proposal.bidApr
            ? `${commify(Number(proposal.bidApr || 0))}%`
            : "--"}
        </p>
      </div>
    </div>
  );
};

export default ActiveProposalInfo;

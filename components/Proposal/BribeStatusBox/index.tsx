import {useState} from "react";
import Results from "./Results";
import {DownCarrotIcon} from "components/SVGicons";
import CONSTANTS from "constants/index";
import {commify} from "utils";
import {BigNumber} from "ethers";

const {DECISIONS, STATUS_ICONS, STATUS_PILLS} = CONSTANTS;
const {YAY} = DECISIONS;

export interface BribeStatusProps {
  status: string;
  bidAmount: string;
  bribeVote: string;
  finalVote: string;
  influence: string;
  againstVotes?: BigNumber;
  forVotes?: BigNumber;
}

const BribeStatusBox = ({
  status,
  bidAmount,
  bribeVote,
  finalVote,
  influence,
  againstVotes,
  forVotes,
}: BribeStatusProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const statusBgColor = STATUS_PILLS[status].bg;
  const StatusIcon = STATUS_ICONS[status];

  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="p-5 md:p-6 lg:p-8 bg-secondary-gray-lighter dark:bg-secondary-gray-lighter-alt rounded-lg">
          <div className="flex justify-between items-center mb-11">
            <p className="subtitle-1 text-secondary-gray-dark dark:text-secondary-gray-dark-alt">
              Final Outcome
            </p>
            <p
              className={`subtitle-1 text-primary-pearl dark:text-primary-pearl-alt py-1 px-2 rounded-[4px] ${statusBgColor}`}
            >
              {status}
            </p>
          </div>

          <div className="flex items-center">
            {StatusIcon && (
              <div className="fill-current dark:text-primary-pearl ">
                <StatusIcon />
              </div>
            )}

            <div className="flex-grow ml-3">
              <div className="flex justify-between items-center">
                <p className="body-2 font-bold mb-2">Bribe vote</p>
                <p
                  className={`uppercase mb-2 ${
                    bribeVote === YAY
                      ? "text-alert-jade dark:text-alert-jade-alt"
                      : "text-alert-rubi dark:text-alert-rubi-alt"
                  }`}
                >
                  {bribeVote}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <p className="body-2 font-bold">Final vote</p>
                <p
                  className={`uppercase ${
                    finalVote === YAY
                      ? "text-alert-jade dark:text-alert-jade-alt"
                      : "text-alert-rubi dark:text-alert-rubi-alt"
                  }`}
                >
                  {finalVote}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 md:p-6 lg:p-8 bg-secondary-gray-lighter dark:bg-secondary-gray-lighter-alt rounded-lg flex flex-col justify-between text-secondary-gray-dark dark:text-secondary-gray-dark-alt ">
          <p className="subtitle-1 mb-4">Bribe Offered (USDC)</p>
          <div>
            <h5 className="body-1 font-bold">{commify(bidAmount)}</h5>
            <p className="caption">~${commify(bidAmount)}</p>
          </div>
        </div>
      </div>

      <div className="p-5 md:p-6 lg:p-8 bg-secondary-gray-lightest dark:bg-secondary-gray-lightest-alt rounded-lg mb-8">
        <p className="body-1 mb-6">
          You placed the highest bid. Your funds are now{" "}
          <span className="font-bold text-[#1E75B7]">available to claim</span>{" "}
          by the users of Bribe protocol.
        </p>

        <div className="flex justify-between items-center">
          <p className="body-1 font-bold">Bid details</p>
          <button onClick={() => setShowDetails(!showDetails)}>
            <DownCarrotIcon
              className={
                "fill-current text-primary-onix dark:text-primary-onix-alt" +
                (showDetails ? "rotate-180" : "")
              }
            />
          </button>
        </div>

        {showDetails && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            <div>
              <Results
                status={status}
                bidAmount={bidAmount}
                bribeVote={bribeVote}
                finalVote={finalVote}
                influence={influence}
                againstVotes={againstVotes}
                forVotes={forVotes}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BribeStatusBox;

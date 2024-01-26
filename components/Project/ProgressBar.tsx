import Tooltip from "./Tooltip";

export type ProgressBarProps = {
  votes: number;
  bribeVotes?: number;
  voteChoice: string;
  tooltipContent?: object;
};

const ProgressBar = ({
  votes,
  bribeVotes,
  voteChoice,
  tooltipContent,
}: ProgressBarProps) => {
  return (
    <div className="flex h-4 rounded-full overflow-hidden bg-secondary-gray dark:bg-secondary-gray-alt w-full">
      <div
        className={
          "relative h-4 rounded-l-full " +
          (voteChoice === "nay"
            ? "bg-alert-rubi dark:bg-alert-rubi-alt"
            : "bg-alert-jade dark:bg-alert-jade-alt")
        }
        style={{width: votes + "%"}}
      >
        {bribeVotes && tooltipContent && (
          <div
            className="absolute bg-transparent-onix-60 h-4"
            style={{left: `${100 - bribeVotes}%`, width: bribeVotes + "%"}}
          >
            <Tooltip wrapperClasses="h-full w-full">
              {Object.keys(tooltipContent).map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-between text-primary-pearl"
                  >
                    <p className="caption">{item}</p>
                    <p className="font-bold caption">{tooltipContent[item]}</p>
                  </div>
                );
              })}
            </Tooltip>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;

import {commify} from "ethers/lib/utils";
import CONSTANTS from "constants/index";

const {DECISIONS} = CONSTANTS;

const BAR_COLORS = {
  [DECISIONS.YAY]: "bg-alert-jade dark:bg-alert-jade-alt",
  [DECISIONS.NAY]: "bg-alert-rubi dark:bg-alert-rubi-alt",
};

interface IProgress {
  voteType: string;
  tokenLabel: string;
  numOfVotes: number;
  votesPct: number;
  target?: number;
}

const Progress = ({
  voteType,
  tokenLabel,
  numOfVotes,
  votesPct,
  target,
}: IProgress) => {
  return (
    <>
      <p className="body-2 font-bold">{voteType}</p>
      <div className="flex justify-between">
        {voteType === "Quorum" && target ? (
          <p className="body-3 text-secondary-gray-dark dark:text-secondary-gray-dark-alt my-1">{`${commify(
            numOfVotes,
          )} / ${commify(target)} ${tokenLabel}`}</p>
        ) : (
          <p className="body-3 text-secondary-gray-dark dark:text-secondary-gray-dark-alt my-1">{`${commify(
            numOfVotes,
          )} ${tokenLabel}`}</p>
        )}
        <p className="body-3 text-secondary-gray-dark dark:text-secondary-gray-dark-alt font-bold">
          {votesPct.toFixed(2)} %
        </p>
      </div>
      <div className="flex h-4 rounded-full overflow-hidden bg-secondary-gray dark:bg-secondary-gray-alt w-full">
        <div
          className={`h-4 ${BAR_COLORS[voteType]}`}
          style={{width: votesPct + "%"}}
        />
      </div>
    </>
  );
};

export default Progress;

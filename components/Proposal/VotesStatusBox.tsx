import {Progress} from "components/Proposal";
import Toggle from "components/Toggle";
import {CheckWithCircleIcon, CrossWithCircleIcon} from "components/SVGicons";
import CONSTANTS from "constants/index";

const {DECISIONS} = CONSTANTS;

type VotesStatusBoxProps = {
  yaypct: number;
  naypct: number;
  isQuorumValid: boolean;
  votingpower: number;
  yay: number;
  nay: number;
  className: string;
};

const VotesStatusBox = ({
  yay,
  nay,
  yaypct,
  naypct,
  isQuorumValid,
  votingpower,
  className,
}: VotesStatusBoxProps) => {
  const total = yay + nay + votingpower;

  return (
    <div className={className}>
      <div className="flex justify-between mb-5">
        <h6>Current Results</h6>
        <div className="flex items-center">
          <p className="subtitle-1 mr-1">Quorum</p>
          {isQuorumValid ? (
            <CheckWithCircleIcon className="-mt-1 fill-current text-alert-jade dark:text-alert-jade-alt" />
          ) : (
            <CrossWithCircleIcon className="-mt-1 fill-current text-alert-rubi dark:text-alert-rubi-alt" />
          )}
        </div>
      </div>
      <div className="mb-7">
        <Progress
          voteType={DECISIONS.YAY}
          tokenLabel="Aave"
          numOfVotes={Math.ceil(yay)}
          votesPct={yaypct}
        />
      </div>

      <div className="mb-7">
        <Progress
          voteType={DECISIONS.NAY}
          tokenLabel="Aave"
          numOfVotes={Math.ceil(nay)}
          votesPct={naypct}
        />
      </div>

      <div className="flex items-center">
        <Toggle htmlForName="with-bribe-toggle" />
        <p className="text-secondary-gray-dark dark:text-secondary-gray-dark-alt text-right ml-3">
          With Bribe
        </p>
      </div>
    </div>
  );
};

export default VotesStatusBox;

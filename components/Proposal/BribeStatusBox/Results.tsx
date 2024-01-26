import {commify} from "ethers/lib/utils";
import CONSTANTS from "constants/index";
import {BigNumber} from "@ethersproject/bignumber";
import {useAaveProposal} from "hooks/aaveGovernance";
import {useRouter} from "next/router";
import {useWeb3ReactManager} from "@web3-react/core/dist/manager";
import {useWeb3React} from "@web3-react/core";
import config from "config";

const {STATUS_COLORS} = CONSTANTS;

export interface BribeResultsProps {
  status: string;
  bidAmount: string;
  bribeVote: string;
  finalVote: string;
  influence: string;
  againstVotes?: BigNumber;
  forVotes?: BigNumber;
}

const Results = ({
  status,
  bidAmount,
  bribeVote,
  finalVote,
  influence,
}: BribeResultsProps) => {
  const router = useRouter();
  const {id} = router.query;
  const {chainId} = useWeb3React();
  const proposal = useAaveProposal(id as string);
  const voteDiffs = proposal?.forVotes
    .sub(proposal.againstVotes)
    .div(
      proposal?.forVotes.add(proposal.againstVotes).isZero()
        ? 1
        : proposal?.forVotes.add(proposal.againstVotes),
    )
    .mul(100)
    .toNumber();
  const voteDiffsWithBribe =
    proposal &&
    (bribeVote == "Yay"
      ? proposal?.forVotes.add(proposal.poolVotingPower)
      : proposal?.forVotes.sub(proposal.poolVotingPower)
    )
      ?.sub(proposal.againstVotes)
      .div(
        proposal?.forVotes
          .add(proposal.againstVotes.add(proposal.poolVotingPower))
          .isZero()
          ? 1
          : proposal?.forVotes.add(
              proposal.againstVotes.add(proposal.poolVotingPower),
            ),
      )
      .mul(100)
      .toNumber();
  return (
    <div className="p-5 md:p-6 lg:p-8 bg-secondary-gray-light dark:bg-secondary-gray-light-alt rounded-lg">
      <div className="modal-row-item">
        <p className="font-bold">Bribe Protocal Vote:</p>
        <p
          className={`font-bold text-${STATUS_COLORS[status]} dark:text-${STATUS_COLORS[status]}-alt`}
        >
          {bribeVote}
        </p>
      </div>

      <div className="modal-row-item">
        <p className="font-bold">Final Vote:</p>
        <p
          className={`font-bold text-${STATUS_COLORS[status]} dark:text-${STATUS_COLORS[status]}-alt`}
        >
          {finalVote}
        </p>
      </div>

      <div className="modal-row-item">
        <p className="font-bold">Bribe Protocol:</p>
        <p
          className={`uppercase text-xs sm:text-sm md:text-base text-primary-pearl dark:text-primary-pearl-alt py-1 px-2 rounded-[4px] bg-${STATUS_COLORS[status]} dark:bg-${STATUS_COLORS[status]}-alt`}
        >
          {status}
        </p>
      </div>

      <div className="modal-row-item">
        <p>Vote differential before Bribe:</p>
        <p className="text-secondary-gray-dark dark:text-secondary-gray-dark-alt">
          {voteDiffs}%
        </p>
      </div>

      <div className="modal-row-item">
        <p>Vote differential after Bribe:</p>
        <p className="text-secondary-gray-dark dark:text-secondary-gray-dark-alt">
          {voteDiffsWithBribe}%
        </p>
      </div>

      <div className="modal-row-item">
        <p>Bribe influence:</p>
        <p className="text-secondary-gray-dark dark:text-secondary-gray-dark-alt">
          {influence}%
        </p>
      </div>

      <div className="modal-row-item">
        <p>Highest Bid:</p>
        <p className="text-secondary-gray-dark dark:text-secondary-gray-dark-alt">
          {commify(bidAmount)}
        </p>
      </div>

      <div className="modal-row-item mt-8">
        <p className="font-bold">Your Bid:</p>
        <p className="font-bold text-secondary-gray-dark dark:text-secondary-gray-dark-alt">
          {commify(bidAmount)}
        </p>
      </div>

      <div className="modal-row-item font-bold">
        <p>Your Vote:</p>
        <p
          className={`text-${STATUS_COLORS[status]} dark:text-${STATUS_COLORS[status]}-alt`}
        >
          {bribeVote}
        </p>
      </div>

      <div className="modal-row-item font-bold">
        <p>Your Bid position:</p>
        <p
          className={`text-${STATUS_COLORS[status]} dark:text-${STATUS_COLORS[status]}-alt`}
        >
          #1
        </p>
      </div>
    </div>
  );
};

export default Results;

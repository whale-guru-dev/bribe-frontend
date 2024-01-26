import {commify, parseUnits} from "ethers/lib/utils";
import {Dialog} from "@headlessui/react";
import {UsdcIcon, ClosingXicon} from "components/SVGicons";
import CONSTANTS from "constants/index";
import {bid, increaseAllowance} from "actions/aavePool";
import {useAavePool} from "hooks/aavePool";
import {useWeb3React} from "@web3-react/core";
import {useRouter} from "next/router";

const {DECISIONS} = CONSTANTS;

export interface ConfirmBribeModalProps {
  isOpen: boolean;
  setIsOpen: Function;
  vote: string;
  amount: number;
  influence: string;
  tvp: number;
  before: number;
  after: number;
  decimals?: number;
  allowance?: number;
  bid: () => Promise<any>;
  increaseAllowance: () => Promise<any>;
}

const ConfirmBribeModal = ({
  isOpen,
  setIsOpen,
  vote,
  amount,
  influence,
  tvp,
  before,
  after,
  allowance,
  bid,
  increaseAllowance,
}: ConfirmBribeModalProps) => {
  const router = useRouter();
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="modal-dialog"
    >
      <Dialog.Overlay className="blur-overlay" />

      <div className="modal-content max-w-[640px] w-full">
        <button onClick={() => setIsOpen(false)} className="float-right">
          <ClosingXicon className="fill-current text-primary-onix dark:text-primary-onix-alt" />
        </button>

        <h5 className="text-center my-10">Confirm Bid</h5>

        <div className="flex flex-col items-center mb-8">
          <p className="subtitle-1 text-secondary-gray-dark dark:text-secondary-gray-dark-alt mb-1">
            You Bid
          </p>
          <div className="flex items-center">
            <UsdcIcon />
            <p className="body-1 font-bold ml-2">
              {!isNaN(amount) ? commify(amount) : 0}
            </p>
          </div>
        </div>

        <div className="mx-auto p-8 bg-secondary-gray-lighter dark:bg-secondary-gray-lighter-alt rounded-lg mb-8 max-w-[360px]">
          <div className="modal-row-item">
            <p>Vote Direction:</p>
            <p
              className={
                vote === DECISIONS.YAY
                  ? "text-alert-jade dark:text-alert-jade-alt"
                  : "text-alert-rubi dark:text-alert-rubi-alt"
              }
            >
              {vote}
            </p>
          </div>
          <div className="modal-row-item">
            <p>Bid Position:</p>
            <p className="text-secondary-gray-dark dark:text-secondary-gray-dark-alt">
              #1
            </p>
          </div>
          <div className="modal-row-item">
            <p>Total Voting Power:</p>
            <p className="text-secondary-gray-dark dark:text-secondary-gray-dark-alt">
              {tvp}
            </p>
          </div>
          <div className="modal-row-item">
            <p>Estimated Influence:</p>
            <p className="text-secondary-gray-dark dark:text-secondary-gray-dark-alt">
              {influence}%
            </p>
          </div>
          <div className="modal-row-item mt-8">
            <p className="font-bold">{vote} Before Bribe:</p>
            <p className="font-bold">{before}%</p>
          </div>
          <div className="modal-row-item">
            <p className="font-bold">{vote} After Bribe:</p>
            <p className="font-bold">{after}%</p>
          </div>
          <div className="modal-row-item">
            <p className="font-bold">{vote} Prediction:</p>
            <p className="font-bold">WINNING</p>
          </div>
        </div>

        <div className="max-w-md mx-auto">
          <p className="caption mb-8 px-2 text-secondary-gray-dark dark:text-secondary-gray-dark-alt text-center">
            Output is estimated. Polls can change up to the last minute. If your
            bid is the highest, your bid will be distributed among Bribe users
            24 hours after the vote closes. If you are not the highest bidder,
            your deposit will be returned automatically after the voting period
            has ended.
          </p>

          <div className="flex gap-5 px-2">
            <button
              onClick={() => setIsOpen(false)}
              className="button-medium p-3 w-full rounded-lg bg-primary-pearl dark:bg-primary-pearl-alt border border-secondary-gray-dark dark:border-secondary-gray-dark-alt"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                (allowance || 0) < amount ? increaseAllowance() : bid();
                // .then((_) => setIsOpen(false))
                // .catch((_) => setIsOpen(false));
              }}
              className="button-medium p-3 w-full rounded-lg bg-primary-agate dark:bg-primary-agate-alt dark:text-primary-onix"
            >
              {(allowance || 0) < amount ? "Increase allowance" : "Place Bid"}
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ConfirmBribeModal;

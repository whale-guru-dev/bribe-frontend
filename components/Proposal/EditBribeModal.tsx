import {useState, useEffect} from "react";
import {Dialog, Listbox, Transition} from "@headlessui/react";
import {BigNumberInput} from "components";
import {
  UsdcIcon,
  DownArrowIcon,
  ClosingXicon,
  CheckIcon,
  DownCarrotIcon,
} from "components/SVGicons";
import CONSTANTS from "constants/index";
import {commify} from "utils";
import {PoolDropdown} from "components/Claim";

const {BRIBE_ACTIONS} = CONSTANTS;

const TYPES_MAPPING = {
  [BRIBE_ACTIONS.DECREASE]: {
    title: "Decrease Bid",
    buttonText: "Decrease Bid",
    labelText: "To be withdrawn",
  },
  [BRIBE_ACTIONS.INCREASE]: {
    title: "Increase Bid",
    buttonText: "Increase Bid",
    labelText: "To be deposited",
  },
};

export interface EditBribeModalProps {
  allowance: number;
  bid: () => Promise<any>;
  increaseAllowance: () => Promise<any>;
  isOpen: boolean;
  setIsOpen: Function;
  token: string;
  setToken: Function;
  currentBid: string;
  inputValue: string;
  setInputValue: Function;
  maxAmount: number;
  decimals?: number;
  type: string;
  tvp: number;
  direction: "Nay" | "Yay";
  influence: string;
  before: number;
  after: number;
}

const EditBribeModal = ({
  allowance,
  isOpen,
  setIsOpen,
  token,
  setToken,
  currentBid,
  inputValue,
  setInputValue,
  maxAmount,
  decimals,
  type,
  tvp,
  direction,
  influence,
  before,
  after,
  bid,
  increaseAllowance,
}: EditBribeModalProps) => {
  const onCloseModal = () => {
    setInputValue("");
    setIsOpen(false);
  };

  const newBid = Number(currentBid) + Number(inputValue);
  return (
    <Dialog open={isOpen} onClose={onCloseModal} className="modal-dialog">
      <Dialog.Overlay className="blur-overlay" />

      <div className="modal-content max-w-[640px] w-full max-h-[94vh] flex flex-col justify-between overflow-element">
        <button onClick={() => setIsOpen(false)}>
          <ClosingXicon className="float-right fill-current text-primary-onix dark:text-primary-onix-alt" />
        </button>

        <h5 className="text-center pt-2 pb-5">{TYPES_MAPPING[type].title}</h5>

        <div className="flex flex-col items-center">
          <p className="subtitle-1 text-secondary-gray-dark dark:text-secondary-gray-dark-alt mb-1">
            Current Bid
          </p>
          <div className="flex items-center">
            <UsdcIcon />
            <p className="body-1 font-bold ml-2">{commify(currentBid)}</p>
          </div>
        </div>

        <div className="relative flex justify-center text-secondary-gray-dark dark:text-secondary-gray-dark-alt mt-2 mb-5">
          <DownArrowIcon className="fill-current text-primary-onix dark:text-primary-onix-alt" />
        </div>

        <div className="flex flex-col items-center mb-5">
          <p className="subtitle-1 text-secondary-gray-dark dark:text-secondary-gray-dark-alt mb-1">
            New Bid
          </p>
          <p className="text-secondary-gray-dark">{commify(newBid)}</p>
        </div>

        <div className="max-w-md w-full mx-auto">
          <div className="flex justify-between items-center mb-2">
            <p className="text-secondary-gray-dark dark:text-secondary-gray-dark-alt">
              {TYPES_MAPPING[type].labelText}
            </p>
            <p className="text-secondary-gray-dark dark:text-secondary-gray-dark-alt">
              Balance: {commify(maxAmount)}
            </p>
          </div>

          <div className="border bg-primary-pearl dark:bg-primary-pearl-alt border-secondary-gray dark:border-secondary-gray-alt flex justify-between items-center py-2 px-6 rounded-lg mb-8">
            <Listbox
              value={token}
              onChange={(token: string) => {
                setToken(token);
                setInputValue(0);
              }}
            >
              <div className="relative">
                <Listbox.Button className="bg-primary-pearl dark:bg-primary-pearl-alt w-full py-3">
                  {({open}) => (
                    <p className="flex justify-between items-center px-5 input-text uppercase">
                      {token}{" "}
                      <DownCarrotIcon
                        className={
                          "ml-2 fill-current text-primary-onix dark:text-primary-onix-alt " +
                          (open ? "rotate-180" : "")
                        }
                      />
                    </p>
                  )}
                </Listbox.Button>
                <Transition
                  enter="transition duration-100 ease-out opacity-100"
                  leave="transition duration-75 ease-out opacity-0"
                >
                  <Listbox.Options className="absolute w-full overflow-hidden rounded-lg shadow-lg bg-primary-pearl dark:bg-primary-pearl-alt">
                    {["usdc", "mim"].map((option) => {
                      const isSelectedOption = option === token;

                      return (
                        <Listbox.Option
                          key={option}
                          value={option}
                          className={`flex justify-between items-center px-5 py-3 input-text cursor-pointer uppercase hover:bg-secondary-gray-dark dark:bg-secondary-gray-dark-alt hover:text-primary-pearl dark:hover:text-primary-pearl-alt ${
                            isSelectedOption &&
                            "bg-primary-agate dark:bg-primary-agate-alt bg-opacity-20"
                          }`}
                        >
                          {option}
                          {isSelectedOption ? (
                            <span className="ml-2">
                              <CheckIcon className="fill-current text-primary-onix dark:text-primary-onix-alt" />
                            </span>
                          ) : (
                            ""
                          )}
                        </Listbox.Option>
                      );
                    })}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>

            <BigNumberInput
              decimals={decimals}
              value={inputValue}
              onChange={(v) => setInputValue(v)}
              // placeholder={`Type an amount to ${
              //   type === BRIBE_ACTIONS.DECREASE ? "withdraw" : "deposit"
              // }`}
              placeholder="0.00"
              max={String(maxAmount)}
              className="py-2 flex-grow bg-primary-pearl dark:bg-primary-pearl-alt text-center ml-2 w-1/3 sm:w-full"
            />

            <button
              disabled={maxAmount === undefined || maxAmount <= 0}
              onClick={() => setInputValue(maxAmount)}
              className="rounded-lg ml-2 p-3 bg-primary-agate dark:bg-primary-agate-alt dark:text-primary-onix bg-opacity-20 button-small disabled:bg-secondary-gray dark:disabled:bg-secondary-gray-alt disabled:cursor-not-allowed"
            >
              Max
            </button>
          </div>

          <div className="mx-auto py-4 px-8 bg-secondary-gray-lighter dark:bg-secondary-gray-lighter-alt rounded-lg max-w-[360px] w-full mb-8">
            <div className="modal-row-item">
              <p className="font-bold">Current Bid Position:</p>
              <p className="text-secondary-gray-dark dark:text-secondary-gray-dark-alt">
                #1
              </p>
            </div>
            <div className="modal-row-item font-bold">
              <p>New Bid Position</p>
              <p className="text-secondary-gray-dark dark:text-secondary-gray-dark-alt">
                #1
              </p>
            </div>
            <div className="modal-row-item">
              <p>Total Voting Power:</p>
              <p className="text-secondary-gray-dark dark:text-secondary-gray-dark-alt">
                {commify(tvp)}
              </p>
            </div>
            <div className="modal-row-item">
              <p>Vote direction:</p>
              <p className="text-secondary-gray-dark dark:text-secondary-gray-dark-alt">
                {direction}
              </p>
            </div>
            <div className="modal-row-item">
              <p>Estimated Influence:</p>
              <p className="text-secondary-gray-dark dark:text-secondary-gray-dark-alt">
                {influence}%
              </p>
            </div>
            <div className="modal-row-item mt-8">
              <p className="font-bold">YAY Before Bribe:</p>
              <p className="font-bold">{commify(before)}%</p>
            </div>
            <div className="modal-row-item">
              <p className="font-bold">YAY After Bribe:</p>
              <p className="font-bold">{commify(after)}%</p>
            </div>
            <div className="modal-row-item">
              <p className="font-bold">YAY Prediction:</p>
              <p className="font-bold">{after > 50 ? "WINNING" : "LOOSING"}</p>
            </div>
          </div>

          <div className="flex gap-5 px-2">
            <button
              onClick={() => setIsOpen(false)}
              className="button-medium p-3 w-full rounded-lg bg-primary-pearl dark:bg-primary-pearl-alt border border-secondary-gray-dark dark:border-secondary-gray-dark-alt"
            >
              Cancel
            </button>
            <button
              disabled={parseFloat(inputValue) > 0 ? false : true}
              onClick={() => {
                allowance >= Number(inputValue) ? bid() : increaseAllowance();
              }}
              className="button-medium p-3 w-full rounded-lg bg-primary-agate dark:bg-primary-agate-alt dark:text-primary-onix disabled:bg-secondary-gray dark:disabled:bg-secondary-gray-alt disabled:cursor-not-allowed"
            >
              {allowance >= Number(inputValue)
                ? "Increase Bid"
                : "Increase Allowance"}
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default EditBribeModal;

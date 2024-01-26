import {Listbox, Transition} from "@headlessui/react";
import {useWeb3React} from "@web3-react/core";
import {BigNumberInput} from "components";
import {DownCarrotIcon, UpCarrotIcon, CheckIcon} from "components/SVGicons";
import {useAavePoolInfo} from "hooks/aavePool";
import {commify} from "utils";

export interface CreateBribeProps {
  options: string[];
  decision: string;
  setDecision: (value: string) => void;
  token: string;
  setToken: (value: string) => void;
  usdcBalance: number;
  mimBalance: number;
  highestBid: string;
  openModal: Function;
  enableAmount: string;
  setEnableAmount: Function;
}

const CreateBribe = ({
  options,
  decision,
  setDecision,
  token,
  setToken,
  mimBalance,
  usdcBalance,
  highestBid,
  openModal,
  enableAmount,
  setEnableAmount,
}: CreateBribeProps) => {
  const tokenBalance = token == "mim" ? mimBalance : usdcBalance;
  const pool = useAavePoolInfo();
  const isEnabled =
    Number(enableAmount) >= Number(highestBid) + Number(highestBid) / 100;
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6">
      <div>
        <div className="p-8 rounded-lg bg-secondary-gray-lighter dark:bg-secondary-gray-lighter-alt">
          <div className="justify-between flex mb-7">
            <p className="subtitle-1 text-secondary-gray-dark dark:text-secondary-gray-dark-alt">
              Vote
            </p>
            <p
              className="subtitle-1 cursor-pointer"
              onClick={(_) => setEnableAmount(tokenBalance)}
            >
              <span className="text-secondary-gray-dark dark:text-secondary-gray-dark-alt mr-1">
                Balance
              </span>{" "}
              {tokenBalance && commify(tokenBalance)}
            </p>
          </div>

          <div className="flex justify-between">
            <BigNumberInput
              decimals={pool?.bidAsset?.decimals}
              className="bg-primary-pearl dark:bg-primary-pearl-alt outline-none py-3 px-5 w-3/5 border border-secondary-gray dark:border-secondary-gray-alt text-secondary-gray-dark dark:text-secondary-gray-dark-alt input-text rounded-tl-lg rounded-bl-lg"
              placeholder={String(
                Number(highestBid) + Number(highestBid) / 100,
              )}
              onChange={(v) => {
                setEnableAmount(v);
              }}
              max={String(tokenBalance)}
              value={enableAmount}
            />
            <div className="w-2/5">
              <Listbox
                value={token}
                onChange={(token: string) => {
                  setToken(token);
                  setEnableAmount(0);
                }}
              >
                <div className="relative">
                  <Listbox.Button className="bg-primary-pearl dark:bg-primary-pearl-alt w-full rounded-sm py-3 border-l-0 border-r-0 border border-secondary-gray dark:border-secondary-gray-alt">
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
            </div>
            <div className="w-2/5">
              <Listbox value={decision} onChange={setDecision}>
                <div className="relative">
                  <Listbox.Button className="bg-primary-pearl dark:bg-primary-pearl-alt w-full rounded-sm py-3 border border-secondary-gray dark:border-secondary-gray-alt rounded-tr-lg rounded-br-lg">
                    {({open}) => (
                      <p className="flex justify-between items-center px-5 input-text">
                        {decision}{" "}
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
                      {options.map((option) => {
                        const isSelectedOption = option === decision;

                        return (
                          <Listbox.Option
                            key={option}
                            value={option}
                            className={`flex justify-between items-center px-5 py-3 input-text cursor-pointer hover:bg-secondary-gray-dark dark:bg-secondary-gray-dark-alt hover:text-primary-pearl dark:hover:text-primary-pearl-alt ${
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
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between p-8 rounded-lg bg-secondary-gray-lighter dark:bg-secondary-gray-lighter-alt">
        <p className="subtitle-1 text-secondary-gray-dark dark:text-secondary-gray-dark-alt mb-7">
          Place Bid
        </p>
        <button
          onClick={(_) => isEnabled && openModal()}
          className={`p-3 w-full text-center button-medium rounded-lg
            ${
              isEnabled
                ? "bg-primary-agate dark:bg-primary-agate-alt"
                : "bg-secondary-gray dark:bg-secondary-gray-alt text-secondary-gray-dark dark:text-secondary-gray-dark-alt cursor-default"
            }`}
        >
          {isEnabled ? "Place Bid" : "Enable Bribe"}
        </button>
      </div>
    </div>
  );
};

export default CreateBribe;

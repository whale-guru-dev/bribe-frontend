import {commify} from "utils";
import CONSTANTS from "../../constants";
import {PlusIcon, MinusIcon} from "components/SVGicons";

export type DepositWithdrawBoxProps = {
  alreadyStakedAmount: number;
  stakedAmountDollarValue: number;
  isEnabled: boolean;
  isStaked: boolean;
  tokenLabel: string;
  stakeLabel: string;
  setModalAction: Function;
  setStakeAction: Function;
  btnName1: string;
  btnName2: string;
};

type ActionHandlerProps = {
  action: string;
  setStakeAction: Function;
  setModalAction: Function;
};

function actionHandler({
  action,
  setStakeAction,
  setModalAction,
}: ActionHandlerProps) {
  setStakeAction(action);
  setModalAction(true);
}

const {STAKE_ACTION} = CONSTANTS;

const DepositWithdrawBox = ({
  alreadyStakedAmount,
  stakedAmountDollarValue,
  isEnabled,
  isStaked,
  tokenLabel,
  stakeLabel,
  setModalAction,
  setStakeAction,
  btnName1,
  btnName2,
}: DepositWithdrawBoxProps) => {
  return (
    <div className="w-full bg-secondary-gray-lighter dark:bg-secondary-gray-lighter-alt rounded-lg p-8 mt-2 drop-shadow-md ">
      <p className="uppercase text-secondary-gray-dark dark:text-secondary-gray-dark-alt body-3 mb-10">
        {!isEnabled ? "Enable Farm" : tokenLabel}
      </p>
      <div className="flex items-center space-y-4 justify-between">
        {!isEnabled ? (
          <button className="rounded-lg bg-primary-agate dark:bg-primary-agate-alt w-full h-btnHeight hover:bg-secondary-amber dark:hover:bg-secondary-amber-alt">
            <p className="font-normal button-medium">Enable farm</p>
          </button>
        ) : !isStaked ? (
          <div className="flex space-x-3 w-full">
            <button
              onClick={() =>
                actionHandler({
                  action: STAKE_ACTION.STAKE,
                  setStakeAction,
                  setModalAction,
                })
              }
              className="rounded-lg bg-primary-agate dark:bg-primary-agate-alt dark:text-primary-onix w-full h-btnHeight hover:bg-secondary-amber dark:hover:bg-secondary-amber-alt"
            >
              <p className="font-normal button-medium">{stakeLabel}</p>
            </button>
          </div>
        ) : (
          <div className="flex w-full justify-between items-center">
            <div>
              <p className="text-secondary-gray-dark dark:text-secondary-gray-dark-alt body-1 font-bold">
                {commify(alreadyStakedAmount)}
              </p>
              <p className="text-secondary-gray-dark dark:text-secondary-gray-dark-alt caption">
                ~${commify(stakedAmountDollarValue)}
              </p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() =>
                  actionHandler({
                    action: STAKE_ACTION.WITHDRAW,
                    setStakeAction,
                    setModalAction,
                  })
                }
                className="border border-primary-onix dark:border-primary-onix-alt rounded-lg h-btnHeight w-12 hover:bg-secondary-gray-medium dark:hover:bg-secondary-gray-medium-alt"
              >
                <p className="flex justify-center items-center">
                  {btnName1 === STAKE_ACTION.WITHDRAW ? (
                    <MinusIcon className="fill-current dark:text-primary-onix-alt" />
                  ) : (
                    btnName1
                  )}
                </p>
              </button>
              <button
                onClick={() =>
                  actionHandler({
                    action: btnName2,
                    setStakeAction,
                    setModalAction,
                  })
                }
                className="border border-primary-onix dark:border-primary-onix-alt rounded-lg h-btnHeight w-12 hover:bg-secondary-gray-medium dark:hover:bg-secondary-gray-medium-alt"
              >
                <p className="flex justify-center items-center">
                  {btnName2 === STAKE_ACTION.DEPOSIT ? (
                    <PlusIcon className="fill-current dark:text-primary-onix-alt" />
                  ) : (
                    btnName2
                  )}
                </p>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DepositWithdrawBox;

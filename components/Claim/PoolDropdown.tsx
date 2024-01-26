import {Disclosure} from "@headlessui/react";
import Tooltip from "components/Project/Tooltip";
import {DropdownItem} from ".";
import {DownCarrotIcon, InfoIcon} from "components/SVGicons";
import {ReactElement, useState} from "react";
import {ContractTransaction} from "@ethersproject/contracts";

export type PoolDropdownProps = {
  collectAllEnabled: boolean;
  PoolIcon: ReactElement;
  poolName: string;
  aprTotal: string;
  earnedTotal: string;
  usdcBribeAPR: string;
  usdcAPR: string;
  bribeAPR: string;
  aaveAPR: string;
  claimAll: () => Promise<ContractTransaction>;
  poolRewards: Array<ProjectItemProps>;
};

type ProjectItemProps = {
  icon: ReactElement;
  name: string;
  apr: string;
  reward: string;
};

const APRtooltip = ({
  usdcBiddingPercent,
  usdcBribePercent,
  bribeLiquidityPercent,
  aaveSafetyModulePercent,
}) => (
  <div className="text-left">
    <p className="caption">
      USDC = {usdcBiddingPercent}% from bidding activity on Aave Pool (from
      user's Aave/stkAave)
    </p>
    {/* <strong className="caption text-xs">
      Aave votes staked in this Bribe Pool are incentivized by bidders renting
      the voting power for use in governance
    </strong> */}
    <p className="caption">
      USDC = {usdcBribePercent}% from bidding activity on Aave Pool (from user's
      BRIBE)
    </p>
    <p className="caption">
      BRIBE = {bribeLiquidityPercent}% from Aave Pool BRIBE liquidity mining
    </p>
    <p className="caption">
      Aave = {aaveSafetyModulePercent}% from Aave Safety Module stkAave rewards
    </p>
  </div>
);

const PoolDropdown = ({
  collectAllEnabled,
  PoolIcon,
  poolName,
  aprTotal,
  earnedTotal,
  poolRewards,
  usdcAPR,
  aaveAPR,
  bribeAPR,
  usdcBribeAPR,
  claimAll,
}: PoolDropdownProps) => {
  return (
    <div className="content-container mb-12">
      <Disclosure>
        {({open}) => (
          <div>
            <div className="grid grid-cols-10 items-center px-8 py-4 bg-secondary-gray dark:bg-secondary-gray-lighter-alt dark:text-primary-pearl text-primary-pearl-alt rounded-lg">
              {/* icon and project name col span  */}
              <div className="col-span-10 mb-4 sm:mb-0 sm:col-span-3">
                <div className="flex items-center">
                  <div className="mr-2 sm:mr-0 sm:w-1/3">{PoolIcon}</div>
                  <p className="w-2/3 body-2 font-bold">
                    {poolName} Pool rewards
                  </p>
                </div>
              </div>

              {/* apr col span  */}
              <div className="col-span-5 sm:col-span-2 text-right">
                <div className="flex justify-end w-full">
                  <p className="dark:text-secondary-gray-light text-secondary-gray-light-alt caption w-3/4 text-right">
                    APR
                  </p>
                  <div className="w-1/4 flex items-center pl-2">
                    <Tooltip
                      element={
                        <InfoIcon
                          className="cursor-pointer bg-white rounded-full"
                          width={18}
                          height={18}
                        />
                      }
                      tooltipClasses="bottom-6 -right-48 sm:bottom-8 sm:-right-16"
                      tooltipTailClasses="bottom-4 left-0 sm:bottom-6"
                    >
                      <APRtooltip
                        usdcBiddingPercent={usdcAPR}
                        usdcBribePercent={usdcBribeAPR}
                        bribeLiquidityPercent={bribeAPR}
                        aaveSafetyModulePercent={aaveAPR}
                      />
                    </Tooltip>
                  </div>
                </div>
                {/* APR value on the pool */}
                <p className="font-bold text-right w-3/4">{aprTotal}%</p>
              </div>

              {/* earned col span  */}
              <div className="col-span-5 sm:col-span-2 text-right">
                <p className="dark:text-secondary-gray-light text-secondary-gray-light-alt caption uppercase">
                  Earned (USD)
                </p>
                {/* Total Earned Amount */}
                <p className="font-bold">${earnedTotal}</p>
              </div>

              {/* claim and dropdown buttons col span  */}
              <div className="border-t dark:border-secondary-gray border-secondary-gray-alt sm:border-none col-span-11 mt-8 sm:mt-0 sm:col-span-3 flex justify-between items-center h-full">
                <div className="w-2/3 flex justify-end">
                  <button
                    disabled={!collectAllEnabled}
                    type="button"
                    className={
                      "w-40 bg-primary-agate text-primary-onix dark:bg-primary-agate-alt rounded-lg h-btnHeight disabled:bg-secondary-gray-medium dark:disabled:bg-secondary-gray-alt disabled:text-secondary-gray-dark hover:bg-secondary-amber dark:hover:bg-secondary-amber-alt " +
                      (collectAllEnabled
                        ? "cursor-pointer text-primary-onix"
                        : "cursor-not-allowed text-secondary-gray-dark dark:text-secondary-gray-dark-alt")
                    }
                    onClick={(_) => {
                      claimAll();
                    }}
                  >
                    Claim All
                  </button>
                </div>
                <Disclosure.Button
                  type="button"
                  className={
                    "w-1/3 flex justify-center items-center h-full " +
                    (open ? "rotate-180" : "")
                  }
                >
                  <DownCarrotIcon className="fill-current dark:text-primary-pearl text-primary-pearl-alt" />
                </Disclosure.Button>
              </div>
            </div>

            {/* dropdown panel section  */}
            {open && (
              <Disclosure.Panel>
                <div className="mt-2">
                  {poolRewards.map((item) => {
                    return (
                      <DropdownItem
                        key={item.name}
                        rewardItem={{
                          icon: item.icon,
                          name: item.name,
                          apr: item.apr,
                          reward: item.reward,
                        }}
                      />
                    );
                  })}
                </div>
              </Disclosure.Panel>
            )}
          </div>
        )}
      </Disclosure>
    </div>
  );
};

export default PoolDropdown;

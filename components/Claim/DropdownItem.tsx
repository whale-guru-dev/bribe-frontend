import {ReactNode} from "react";
import {commify} from "utils";
import {useWeb3React} from "@web3-react/core";
import {useAavePool} from "hooks/aavePool";

export type DropdownItemProps = {
  rewardItem: {
    icon: ReactNode;
    name: string;
    apr?: string;
    reward?: string;
  };
};

const DropdownItem = ({rewardItem}: DropdownItemProps) => {
  const web3 = useWeb3React();
  const pool = useAavePool();
  return (
    <div className="grid grid-cols-10 sm:grid-cols-10 items-center bg-secondary-gray-lighter dark:bg-secondary-gray-lightest-alt rounded-lg p-1 mb-2 px-8">
      <div className="col-span-10 mb-2 sm:col-span-3 flex items-center">
        <div className="mr-2 sm:mr-0 sm:w-1/3 sm:pl-2">
          <div className="w-[24px] rounded-full fill-current bg-primary-onix dark:bg-primary-onix-alt text-primary-pearl dark:text-primary-pearl-alt">
            {rewardItem.icon}
          </div>
        </div>
        <p className="w-2/3 font-bold">{rewardItem.name} rewards</p>
      </div>
      <div className="col-span-5 sm:col-span-2 text-right">
        <p className="w-3/4 font-bold">{rewardItem.apr || "--"}%</p>
      </div>
      <div className="col-span-5 sm:col-span-2 text-right">
        <div className="sm:justify-end sm:pr-2 font-bold">
          <p>${rewardItem.reward || "--"}</p>
        </div>
      </div>
      <div className="hidden sm:block sm:col-span-2">{/*  */}</div>
    </div>
  );
};

export default DropdownItem;

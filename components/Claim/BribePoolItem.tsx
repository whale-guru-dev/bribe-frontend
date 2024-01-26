import {ReactNode} from "react";
import {BribeTokenIcon} from "components/SVGicons";
import {commify} from "utils";
import {useWeb3React} from "@web3-react/core";
import {useAavePool} from "hooks/aavePool";
import {claimReward} from "actions/aavePool";

export type BribePoolItemProps = {
  project: {
    icon: ReactNode;
    name: string;
    apr?: string;
    bribeReward?: string;
    bribePrice?: number;
  };
};

const BRIBE_PRICE = 1; // temp variable, replace with actual token price

const BribePoolItem = ({project}: BribePoolItemProps) => {
  const web3 = useWeb3React();
  const pool = useAavePool();
  return (
    <div className="grid grid-cols-10 items-center bg-secondary-gray-lighter rounded-lg p-8 mb-4">
      <div className="col-span-10 pb-4 border-b border-secondary-gray-medium mb-2 sm:mb-0 sm:pb-0 sm:border-none sm:col-span-3 flex items-center">
        <div className="w-1/3">{project.icon}</div>
        <p className="w-2/3 body-2 font-bold uppercase">{project.name}</p>
      </div>
      <p className="col-span-5 sm:col-span-2 text-center sm:text-right">
        {project.apr || "--"}%
      </p>
      <div className="col-span-5 sm:col-span-2 text-center sm:text-right">
        <div className="flex justify-center sm:justify-end">
          <BribeTokenIcon />
          <p className="ml-2">{project.bribeReward || "--"}</p>
        </div>
        <p className="caption text-secondary-gray-dark">
          ~$
          {project.bribeReward
            ? commify(Number(project.bribeReward) * BRIBE_PRICE)
            : ""}
        </p>
      </div>
      <div className="col-span-10 mt-4 sm:mt-0 sm:col-span-3">
        <div className="w-full sm:w-3/4 flex justify-center sm:justify-end">
          <button
            type="button"
            className={
              "w-40 bg-primary-agate rounded-lg h-btnHeight hover:bg-secondary-amber "
            }
            onClick={(_) => claimReward(pool, web3)}
          >
            Harvest Bribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default BribePoolItem;

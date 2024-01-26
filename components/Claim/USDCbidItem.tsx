import {ReactNode} from "react";
import Link from "next/link";
import {UsdcIcon, InfoIcon} from "components/SVGicons";
import Tooltip from "components/Project/Tooltip";
import {commify} from "utils";

export type USDCbidItemProps = {
  project: {
    icon: ReactNode;
    proposalId: number;
    bid: number;
    claimAmount: string;
    tooltip: ReactNode;
  };
};

const USDCbidItem = ({project}: USDCbidItemProps) => {
  return (
    <div className="grid grid-cols-10 item-center bg-secondary-gray-lighter rounded-lg p-8 mb-4">
      <div className="col-span-10 pb-4 border-b border-secondary-gray-medium mb-2 sm:mb-0 sm:pb-0 sm:border-none sm:col-span-3 flex items-center">
        <div className="w-1/3">{project.icon}</div>
        <div className="w-2/3">
          <p className="body-2 font-bold uppercase">ID {project.proposalId}</p>
          <Link href={`/projects/aave/` + project.proposalId.toString()}>
            <a className="text-secondary-topaz">Go to proposal</a>
          </Link>
        </div>
      </div>
      <div className="col-span-5 sm:col-span-2 flex items-center justify-center sm:justify-end">
        <p className="mr-2">${commify(project.bid)}</p>
        <Tooltip
          element={<InfoIcon className="cursor-pointer" />}
          tooltipClasses="bottom-7 -right-8"
          tooltipTailClasses="bottom-6 left-1"
        >
          {project.tooltip}
        </Tooltip>
      </div>
      <div className="col-span-5 sm:col-span-2 text-center sm:text-right">
        <div className="flex justify-center sm:justify-end">
          <UsdcIcon />
          <p className="ml-2">{commify(project.claimAmount)}</p>
        </div>
        <p className="caption text-secondary-gray-dark">
          ~${project.claimAmount}
        </p>
      </div>
      <div className="col-span-10 mt-4 sm:mt-0 sm:col-span-3">
        <div className="w-full sm:w-3/4 flex justify-center sm:justify-end">
          <button
            type="button"
            className={
              "w-40 bg-primary-agate rounded-lg h-btnHeight hover:bg-secondary-amber "
            }
          >
            Claim USDC
          </button>
        </div>
      </div>
    </div>
  );
};

export default USDCbidItem;

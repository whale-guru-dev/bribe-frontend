import Tooltip from "components/Project/Tooltip";
import {ReactNode} from "react";
import {InfoIcon} from "components/SVGicons";

export type TableHeaderProps = {
  title1: string;
  title2: string;
  title3: string;
  tooltip?: ReactNode;
};

const TableHeader = ({title1, title2, title3, tooltip}: TableHeaderProps) => {
  return (
    <div className="grid grid-cols-10 items-end px-8 pt-8 pb-4">
      <div className="hidden sm:col-span-3 sm:flex">
        <div className="w-1/3" />
        <p className="w-2/3">{title1}</p>
      </div>
      <div className="col-span-5 sm:col-span-2">
        <div className="flex justify-center sm:justify-end space-x-2">
          <p>{title2}</p>
          {tooltip && (
            <Tooltip
              element={<InfoIcon className="cursor-pointer" />}
              tooltipClasses="bottom-7 -right-8"
              tooltipTailClasses="bottom-6 left-1"
            >
              {tooltip}
            </Tooltip>
          )}
        </div>
      </div>
      <p className="col-span-5 sm:col-span-2 text-center sm:text-right">
        {title3}
      </p>
    </div>
  );
};

export default TableHeader;

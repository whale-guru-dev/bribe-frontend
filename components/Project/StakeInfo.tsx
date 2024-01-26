import Tooltip from "./Tooltip";
import {InfoIcon} from "components/SVGicons";
import {commify} from "utils";
import {ReactNode} from "react";

export type StakeInfoProps = {
  title: string;
  subtitle: string;
  currentAPR?: number;
  tvl?: string;
  pending?: string;
  children?: ReactNode;
};

const StakeInfo = ({
  title,
  subtitle,
  currentAPR,
  tvl,
  pending,
  children,
}: StakeInfoProps) => {
  return (
    <div className="my-12">
      <div className="mt-4 sm:flex-row sm:space-x-6">
        <div className="w-full">
          <p className="uppercase text-secondary-gray-dark dark:text-secondary-gray-dark-alt mb-2">
            {title}
          </p>
          <p className="font-bold body-1">{subtitle}</p>
          <p className="flex items-center text-secondary-gray-dark dark:text-secondary-gray-dark-alt mb-2 mt-4 font-light">
            <span className="uppercase">
              Current APR:{" "}
              <strong className="font-bold text-black dark:text-secondary-gray-dark-alt">
                {commify(Number(currentAPR))}%
              </strong>
            </span>
            <Tooltip
              element={
                <InfoIcon
                  className="cursor-pointer -mt-1"
                  width={24}
                  height={24}
                />
              }
              tooltipClasses="bottom-8 -left-16 lg:-right-10"
              tooltipTailClasses="bottom-7 -right-5"
            >
              {children}
            </Tooltip>
          </p>
          {pending ? (
            <p className="text-secondary-gray-dark dark:text-secondary-gray-dark-alt">
              <span className="uppercase">
                Pending rewards:{" "}
                <strong className="font-bold text-black dark:text-secondary-gray-dark-alt">
                  {commify(pending)} BRIBE
                </strong>
              </span>
            </p>
          ) : (
            <span />
          )}
        </div>
      </div>
    </div>
  );
};

export default StakeInfo;

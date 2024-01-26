import {ReactNode} from "react";
import {commify} from "utils";

export type ProjectTableItemProps = {
  name: string;
  tvl: string;
  icon: ReactNode;
  deposit?: string;
  bribeApr?: string;
  bribeRewards?: string;
  usdcRewards?: string;
  bidApr?: string;
  highestBid?: string;
  estimatedBidReward?: string;
  isActive?: boolean;
};

const TableItem = ({
  name,
  tvl,
  icon,
  deposit,
  bribeApr,
  bribeRewards,
  usdcRewards,
  bidApr,
  highestBid,
  estimatedBidReward,
  isActive,
}: ProjectTableItemProps) => {
  return (
    <div className="relative grid grid-cols-10 items-center rounded-lg px-4 py-8 bg-secondary-gray-lighter dark:bg-secondary-gray-lighter-alt mb-5 overflow-hidden">
      {isActive && (
        <p className="absolute top-0 right-0 px-2 py-1 bg-alert-jade dark:bg-alert-jade-alt subtitle-1 text-sm text-primary-pearl dark:text-primary-pearl-alt font-light tracking-wider rounded-md">
          Active Proposal
        </p>
      )}

      <div className="col-span-4 flex items-center">
        <div className="mr-3">{icon}</div>
        <div>
          <p className="body-2 font-bold">{name}</p>
          <p>${tvl}</p>
        </div>
      </div>

      <div className="text-right col-span-2">
        <p
          className={deposit ? "text-alert-jade dark:text-alert-jade-alt" : ""}
        >
          ${deposit ? deposit : "0.00"}
        </p>
      </div>

      {/* <div className="text-right col-span-2">
        <p className={`${bribeApr ? "text-xl font-bold" : ""}`}>
          {bribeApr ? `${commify(Number(bribeApr))}%` : "--"}
        </p>
        <p
          className={`my-1 ${
            bribeRewards ? "text-alert-jade dark:text-alert-jade-alt" : ""
          }`}
        >
          {bribeRewards ? commify(Number(bribeRewards)) : "--"}
        </p>
        <p
          className={
            usdcRewards ? "text-alert-jade dark:text-alert-jade-alt" : ""
          }
        >
          ${usdcRewards ? commify(Number(usdcRewards)) : "--"}
        </p>
      </div> */}

      <div className="text-right col-span-4">
        <p className={`${bidApr ? "text-xl font-bold" : ""}`}>
          {bidApr ? `${commify(Number(bidApr))}%` : "--"}
        </p>
        <p
          className={`my-1 ${
            highestBid
              ? "text-alert-jade dark:text-alert-jade-alt"
              : "text-alert-rubi dark:text-alert-rubi-alt"
          }`}
        >
          {highestBid ? commify(Number(highestBid)) : "No bids"}
        </p>
        <p
          className={
            estimatedBidReward ? "text-alert-jade dark:text-alert-jade-alt" : ""
          }
        >
          ${estimatedBidReward ? commify(Number(estimatedBidReward)) : "--"}
        </p>
      </div>
    </div>
  );
};

export default TableItem;

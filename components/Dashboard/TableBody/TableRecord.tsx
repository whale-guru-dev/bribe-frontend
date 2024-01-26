import {AaveIconWithColor} from "components/SVGicons";
import CircleFailIcon from "components/SVGicons/CircleFailIcon";
import CircleSuccessIcon from "components/SVGicons/CircleSuccessIcon";
import React, {ReactNode, useMemo, useState} from "react";
import {commify} from "utils";
import {extractProposalInfo} from "utils/computeRewards";

type UserBribe = {
  amount: number;
  isCollected: boolean;
  link: string;
};

type FinalBidType = {
  amount: number;
  status?: string;
};

export type TableRecordProps = {
  id: string;
  proposalId: string;
  timestamp: any;
};

function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(",");
}

export default function TableRecord({
  id,
  proposalId,
  timestamp,
  type,
}: TableRecordProps & {type: string}) {
  const p = extractProposalInfo(proposalId, timestamp, id);
  return (
    <tr className="grid grid-cols-12 items-center border-b border-secondary-gray dark:border-secondary-gray-alt">
      {/* proposla info */}
      <td className="p-4 col-span-12 md:col-span-4">
        <div className="flex items-center">
          <div className="mr-3">
            <AaveIconWithColor />
          </div>
          <div>
            <p className="caption">{p.description}</p>
            <div className="flex justify-start">
              <p
                className={`caption text-center px-2 mr-1 rounded-full text-primary-pearl dark:text-primary-pearl-alt uppercase ${
                  p.status === "Executed"
                    ? "bg-alert-jade dark:bg-alert-jade-alt"
                    : "bg-alert-rubi dark:bg-alert-rubi-alt"
                }`}
              >
                {p.status}
              </p>
              <p className="caption text-secondary-gray-dark dark:text-secondary-gray-dark-alt">
                ID <span>{proposalId}</span>
              </p>
            </div>
          </div>
        </div>
      </td>
      {/* position pick */}
      <td className="p-4 col-span-2 md:col-span-1 flex justify-center text-right">
        <p className="caption">{p.vote}</p>
      </td>
      {/* position result */}
      <td className="p-4 col-span-2 md:col-span-1 flex justify-center text-right">
        {p.isSuccess ? (
          <CircleSuccessIcon className="h-6 w-6 md:float-right fill-current text-alert-jade dark:text-alert-jade-alt" />
        ) : (
          <CircleFailIcon className="h-6 w-6 md:float-right fill-current text-alert-rubi dark:text-alert-rubi-alt" />
        )}
      </td>
      {/* final bid */}
      <td className="p-4 col-span-5 md:col-span-2 text-center md:text-right">
        <p className="caption">
          {commify(type == "votes" ? p?.finalBid : p?.yourBid)}
        </p>
      </td>
      {/* your bid */}
      <td className="p-4 col-span-3 md:col-span-2 text-center flex flex-col items-center md:items-end md:text-right">
        <p className="caption">
          {type == "votes"
            ? commify(p.myRewards)
            : p.rank != undefined
            ? "#" + (p.rank + 1)
            : "--"}
        </p>
      </td>
      {/* date */}
      <td className="order-first md:order-last pt-4 md:p-4 col-span-full md:col-span-2 text-center md:text-right">
        <p className="caption">{p.date.toLocaleString().slice(0, 10)}</p>
      </td>
    </tr>
  );
}

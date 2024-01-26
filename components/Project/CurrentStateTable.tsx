import {ReactElement} from "react";
import {LockIcon, ListIcon, PoolIcon, TimelineIcon} from "components/SVGicons";
import {commify} from "utils";

export type TableItemProps = {
  title: string;
  value: string;
  icon: ReactElement;
};

export type CurrentStateTableProps = {
  currentProjectState: {
    totalVotingPowerValue: number;
    yourVotesValue: number;
    shareOfPoolValue: string;
    aprValue: number;
    projectName: string;
  };
};

const CurrentStateTable = ({currentProjectState}: CurrentStateTableProps) => {
  const TableItem = ({title, value, icon}: TableItemProps) => {
    return (
      <div className="flex items-center min-w-1/4 space-x-4">
        {icon}
        <div className="flex flex-col">
          <p className="body-3 uppercase font-normal text-secondary-gray-dark dark:text-secondary-gray-dark-alt my-2">
            {title}
          </p>
          <p className="body-1 font-bold text-primary-onix dark:text-primary-onix-alt">
            {value}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="content-container flex mt-20 mb-10 md:flex-row md:space-x-6 md:justify-between">
      <div className="flex flex-col w-1/2 xl:flex-row xl:justify-between">
        <TableItem
          title={"Total Value Locked"}
          value={`${commify(currentProjectState.totalVotingPowerValue)} aave`}
          icon={
            <LockIcon className="fill-current text-secondary-gray-dark dark:text-secondary-gray-dark-alt" />
          }
        />
        <TableItem
          title={"Your Votes"}
          value={`${commify(currentProjectState.yourVotesValue)}`}
          icon={
            <ListIcon className="fill-current text-secondary-gray-dark dark:text-secondary-gray-dark-alt" />
          }
        />
      </div>
      <div className="flex flex-col w-1/2 xl:flex-row xl:justify-around">
        <TableItem
          title={"Share of pool"}
          value={`${commify(currentProjectState.shareOfPoolValue)}%`}
          icon={
            <PoolIcon className="fill-current text-secondary-gray-dark dark:text-secondary-gray-dark-alt" />
          }
        />
        <TableItem
          title={"APR"}
          value={`${commify(currentProjectState.aprValue)}%`}
          icon={
            <TimelineIcon className="fill-current text-secondary-gray-dark dark:text-secondary-gray-dark-alt" />
          }
        />
      </div>
    </div>
  );
};

export default CurrentStateTable;

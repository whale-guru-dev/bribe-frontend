import Tooltip from "components/Project/Tooltip";
import {InfoIcon} from "components/SVGicons";
import {commify} from "utils";

type TableHeaderProps = {
  bidApr?: string;
};

const TableHeader = ({bidApr}: TableHeaderProps) => {
  return (
    <div className="grid grid-cols-10 items-end mb-4">
      <div className="col-span-4 text-sm">
        <p>Project</p>
        <p>TVL (Voting Power)</p>
      </div>

      <div className="text-right col-span-2">
        <p>Deposit</p>
      </div>

      {/* <div className="text-right col-span-2">
        <div className="flex justify-end items-center">
          <p className="mr-1 uppercase">Bribe APR</p>
          <Tooltip
            element={
              <InfoIcon
                className="cursor-pointer -mt-1"
                width={18}
                height={18}
              />
            }
            tooltipClasses="bottom-6 -right-10"
            tooltipTailClasses="bottom-5"
          >
            <div className="text-left">
              <p>APR is determined on Bribe token rewards</p>
              <p className="block my-1">This does not include USDC from bids</p>
              <p>USDC rewards are an additional bonus!</p>
            </div>
          </Tooltip>
        </div>
        <p className="uppercase">Bribe rewards</p>
        <p>USDC rewards</p>
      </div> */}

      <div className="text-right col-span-4">
        <div className="flex justify-end items-center">
          <p className="mr-1">Bid APR</p>
          <Tooltip
            element={
              <InfoIcon
                className="cursor-pointer -mt-1"
                width={18}
                height={18}
              />
            }
            tooltipClasses="bottom-6 -right-6"
            tooltipTailClasses="bottom-5"
          >
            <div className="text-left">
              <p>APR is determined by ROI/voting period * 365</p>
              <p className="block my-1">
                Expected ROI this bid: {commify(Number(bidApr || 0))} %
              </p>
              <p>Voting period: 7 days</p>
            </div>
          </Tooltip>
        </div>
        <p>Highest bid</p>
        <p>Estimated reward</p>
      </div>
    </div>
  );
};

export default TableHeader;

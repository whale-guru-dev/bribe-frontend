import {ReactNode} from "react";
import {InfoIcon} from "components/SVGicons";
import Tooltip from "components/Project/Tooltip";

export interface BribeContainerProps {
  timeLeft: string;
  children: ReactNode;
}

const Bribe = ({timeLeft, children}: BribeContainerProps) => {
  return (
    <>
      <h4 className="mb-5">
        <span className="font-bold">Bid</span> for power
      </h4>

      <div className="grid grid-cols-4 gap-6 mb-10">
        <div className="col-span-4 sm:col-span-2">
          <p className="subtitle-1 text-secondary-gray-dark dark:text-secondary-gray-dark-alt">
            Bid to borrow our users’ voting power
          </p>
          <p className="font-bold body-1">
            Influence governance with their votes
          </p>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <p className="subtitle-1 text-secondary-gray-dark dark:text-secondary-gray-dark-alt">
            Your bid
          </p>
          <div className="flex items-center space-x-2">
            <p className="font-bold body-1 flex items-center">#1</p>
            <Tooltip
              element={<InfoIcon className="ml-2 cursor-pointer" />}
              tooltipClasses="bottom-8 -left-10 sm:-left-24"
              tooltipTailClasses="bottom-7 -right-7"
            >
              <p>Your Bid Position</p>
            </Tooltip>
          </div>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <p className="subtitle-1 text-secondary-gray-dark dark:text-secondary-gray-dark-alt">
            Time left
          </p>
          <p className="font-bold body-1">{timeLeft}</p>
        </div>
      </div>
      {children}
    </>
  );
};

export default Bribe;

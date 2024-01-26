import {useWeb3React} from "@web3-react/core";
import {claimReward} from "actions/aavePool";
import {useAavePool} from "hooks/aavePool";
import {commify} from "utils";

export type BribeEarnedProps = {
  earned: string;
  bribeAddress: string;
  collectEnabled: boolean;
  bribeRewardTotalDollarValue: number;
};

const BribeEarnedBox = ({
  earned,
  bribeAddress,
  collectEnabled = true,
  bribeRewardTotalDollarValue,
}: BribeEarnedProps) => {
  const web3 = useWeb3React();
  const aavePool = useAavePool();
  return (
    <div className="w-full bg-secondary-gray-lighter rounded-lg p-8 mt-2 2xl:w-32remBox">
      <p className="uppercase text-secondary-gray-dark body-3 mb-10">
        Bribe Earned
      </p>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-secondary-gray-dark body-1 font-bold">
            {commify(earned)}
          </p>
          <p className="text-secondary-gray-dark caption">
            ~${commify(bribeRewardTotalDollarValue)}
          </p>
        </div>
        <button
          disabled={!collectEnabled}
          className={
            "w-24 bg-primary-agate rounded-lg h-btnHeight disabled:bg-secondary-gray disabled:text-secondary-gray-dark hover:bg-secondary-amber " +
            (collectEnabled ? "cursor-pointer" : "cursor-not-allowed")
          }
          onClick={() => {
            claimReward(aavePool, web3);
          }}
        >
          <p
            className={
              "font-normal button-medium " +
              (collectEnabled ? "" : "text-secondary-gray-dark")
            }
          >
            Harvest
          </p>
        </button>
      </div>
    </div>
  );
};

export default BribeEarnedBox;

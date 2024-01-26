import {Disclosure} from "@headlessui/react";
import {BribePoolItem, TableHeader} from ".";
import {
  BribeTokenIconLg,
  DownCarrotIcon,
  AaveIconWithColor,
} from "components/SVGicons";
import {useUserShare} from "hooks/userShare";
import {usePriceFromGecko} from "blockchain-integration";
import * as config from "config";
import {commify} from "utils";
import {claimReward} from "actions/aavePool";
import {useWeb3React} from "@web3-react/core";
import {useAavePool} from "hooks/aavePool";

export type BribePoolsDrowpdownProps = {
  // collectAllBribeEnabled: boolean;
};

const APRtooltip = () => (
  <div className="text-left">
    <p>APR tooltip info box</p>
  </div>
);

const BribePoolsDrowpdown = () => {
  const web3 = useWeb3React();
  const pool = useAavePool();
  const userShare = useUserShare();
  const [bribePrice] = usePriceFromGecko([config.geckoBribeID]);
  return (
    <div className="content-container mb-12">
      <Disclosure>
        {({open}) => (
          <div>
            <div className="grid grid-cols-10 items-center px-8 py-4 bg-secondary-gray-dark text-primary-pearl rounded-lg">
              {/* icon and project name col span  */}
              <div className=" col-span-10 pb-4 border-b border-secondary-gray-medium mb-2 sm:mb-0 sm:pb-0 sm:border-none sm:col-span-3">
                <div className="flex items-center">
                  <div className="w-1/3">
                    <BribeTokenIconLg />
                  </div>
                  <p className="w-2/3 body-2 font-bold">All Bribe pools</p>
                </div>
              </div>

              {/* apr col span  */}
              <div className="col-span-5 sm:col-span-2 text-center sm:text-right">
                <p className="text-secondary-gray-light caption">Average APR</p>
                <p className="font-bold">{userShare.bribeAPR}%</p>
              </div>

              {/* earned col span  */}
              <div className="col-span-5 sm:col-span-2 text-center sm:text-right">
                <p className="text-secondary-gray-light caption">
                  Earned (USD)
                </p>
                <p className="font-bold">
                  $
                  {commify(
                    (
                      Number(userShare.bribeRewards || 0) * (bribePrice || 0)
                    ).toFixed(2),
                  )}
                </p>
              </div>

              {/* harvest and dropdown buttons col span  */}
              <div className="col-span-10 mt-4 sm:mt-0 sm:col-span-3 flex justify-between items-center h-full">
                <div className="w-3/4 flex justify-end">
                  {/* <button
                    disabled={!collectAllBribeEnabled}
                    type="button"
                    className={
                      "w-40 bg-primary-agate rounded-lg h-btnHeight disabled:bg-secondary-gray disabled:text-secondary-gray-dark hover:bg-secondary-amber " +
                      (collectAllBribeEnabled
                        ? "cursor-pointer text-primary-onix"
                        : "cursor-not-allowed text-secondary-gray-dark")
                    }
                    onClick={(_) => claimReward(pool, web3)}
                  >
                    Harvest All
                  </button> */}
                </div>
                <Disclosure.Button
                  type="button"
                  className={
                    "w-1/5 flex justify-center items-center h-full " +
                    (open ? "rotate-180" : "")
                  }
                >
                  <DownCarrotIcon fill="#fff" />
                </Disclosure.Button>
              </div>
            </div>

            {/* dropdown panel section  */}
            {open && (
              <Disclosure.Panel>
                <div>
                  <TableHeader
                    title1="Project"
                    title2="APR"
                    title3="Bribe Rewards"
                    tooltip={<APRtooltip />}
                  />
                  <BribePoolItem
                    project={{
                      apr: userShare.bribeAPR,
                      bribeReward: userShare.bribeRewards,
                      bribePrice: bribePrice || 0,
                      icon: <AaveIconWithColor />,
                      name: "Aave",
                    }}
                  />
                  {/* {DUMMY_DATA.map((project) => {
                    return <BribePoolItem project={project} />;
                  })} */}
                </div>
              </Disclosure.Panel>
            )}
          </div>
        )}
      </Disclosure>
    </div>
  );
};

export default BribePoolsDrowpdown;

import {Disclosure} from "@headlessui/react";
import {useWeb3React} from "@web3-react/core";
import {
  DownCarrotIcon,
  UsdcIconLg,
  AaveIconWithColor,
} from "components/SVGicons";
import {commify, formatEther, formatUnits} from "ethers/lib/utils";
import {useAaveGovernance} from "hooks/aaveGovernance";
import {useAavePoolInfo} from "hooks/aavePool";
import {useUserShare} from "hooks/userShare";
import {DefaultBidItem, TableHeader, USDCbidItem} from ".";

const WinningBidTooltip = () => (
  <div className="text-left">
    <p>Winning bid tooltip info box</p>
  </div>
);

const DUMMY_DATA = [
  // {
  //   icon: <AaveIconWithColor />,
  //   proposalId: 17,
  //   bid: 15490,
  //   claimAmount: 51.83,
  //   tooltip: <WinningBidTooltip />,
  // },
  // {
  //   icon: <AaveIconWithColor />,
  //   proposalId: 23,
  //   bid: 9571,
  //   claimAmount: 13.81,
  //   tooltip: <WinningBidTooltip />,
  // },
];

export type USDCbidsDropdownProps = {
  // avgBid?: number;
  // earnedUSDC?: number;
  // collectAllUsdcEnabled: boolean;
};

const USDCbidsDropdown = () => {
  const poolInfo = useAavePoolInfo();
  const biddedProposals = Object.values(poolInfo.bids).filter(
    (b) => Number(formatEther(b.highestBid || 0)) > 0,
  );
  const averageBid =
    biddedProposals.reduce(
      (acc, cur) =>
        acc + Number(formatUnits(cur.highestBid, poolInfo.bidAsset?.decimals)),
      0,
    ) / biddedProposals.length;
  const userShare = useUserShare();
  const formatBid = (bid) =>
    Number(formatUnits(bid || 0, poolInfo.bidAsset?.decimals));
  return (
    <div className="content-container mb-12">
      <Disclosure>
        {({open}) => (
          <div>
            <div className="grid grid-cols-10 items-center px-8 py-4 bg-secondary-gray-dark text-primary-pearl rounded-lg">
              <div className="col-span-10 pb-4 border-b border-secondary-gray-medium mb-2 sm:mb-0 sm:pb-0 sm:border-none sm:col-span-3 flex items-center">
                <div className="w-1/3">
                  <UsdcIconLg />
                </div>
                <p className="w-2/3 body-2 font-bold">All USDC bids</p>
              </div>

              <div className="col-span-5 sm:col-span-2 text-center sm:text-right">
                <p className="text-secondary-gray-light caption">
                  Average Bid (USD)
                </p>
                <p className="font-bold">
                  ${averageBid ? commify(averageBid.toFixed()) : "--"}
                </p>
              </div>

              <div className="col-span-5 sm:col-span-2 text-center sm:text-right">
                <p className="text-secondary-gray-light caption">
                  Earned (USD)
                </p>
                <p className="font-bold">
                  $
                  {userShare.usdcRewards
                    ? commify(userShare.usdcRewards)
                    : "--"}
                </p>
              </div>

              <div className="col-span-10 mt-4 sm:mt-0 sm:col-span-3 flex justify-between items-center h-full">
                <div className="w-3/4 flex justify-end">
                  {/* <button
                    disabled={!collectAllUsdcEnabled}
                    type="button"
                    className={
                      "w-40 bg-primary-agate rounded-lg h-btnHeight disabled:bg-secondary-gray disabled:text-secondary-gray-dark hover:bg-secondary-amber " +
                      (collectAllUsdcEnabled
                        ? "cursor-pointer text-primary-onix"
                        : "cursor-not-allowed text-secondary-gray-dark")
                    }
                  >
                    Claim All
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

            {open && (
              <Disclosure.Panel>
                <div>
                  <TableHeader
                    title1="Proposal"
                    title2="Winning Bid"
                    title3="USDC to claim"
                  />
                  {biddedProposals.length ? (
                    biddedProposals.map((bid) => {
                      return (
                        <USDCbidItem
                          project={{
                            claimAmount: (
                              (formatBid(bid.highestBid || 0) *
                                Number(userShare?.poolShare || 0)) /
                              100
                            ).toFixed(2),
                            bid: formatBid(bid?.highestBid),
                            icon: <AaveIconWithColor />,
                            proposalId: 0,
                            tooltip: "",
                          }}
                        />
                      );
                    })
                  ) : (
                    <DefaultBidItem />
                  )}
                </div>
              </Disclosure.Panel>
            )}
          </div>
        )}
      </Disclosure>
    </div>
  );
};

export default USDCbidsDropdown;

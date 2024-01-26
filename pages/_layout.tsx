import Header from "./_header";
import Sidebar from "./_sidebar";
import ConnectModal from "./_connectmodal";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "slices";
import {closeWalletConnectModal} from "blockchain-integration";
import React from "react";
import Breadcrumbs from "./_breadcrumbs";
import {connectMetamask} from "hooks/connect";
import {AaveIcon} from "components/SVGicons";

const paths = {
  home: true,
  projects: {
    aave: {aave: true, icon: <AaveIcon />},
  },
  dashboard: true,
};

export default ({children}: {children: React.ReactNode}) => {
  const {isOpenWalletConnectModal} = useSelector(
    (state: AppState) => state.appsettings,
  );
  typeof window != "undefined" && connectMetamask();
  const dispatch = useDispatch();

  return (
    <div className="flex-grow justify-center">
      <div>
        <ConnectModal
          open={isOpenWalletConnectModal}
          onClose={() => {
            dispatch(closeWalletConnectModal());
          }}
        />
        <div className="flex-grow">
          <Header
            paths={paths}
            isWalletConnectOpen={isOpenWalletConnectModal}
          />
          <div className="flex">
            <div className="hidden md:block bg-secondary-gray-lighter dark:bg-secondary-gray-lighter-alt">
              <Sidebar paths={paths} />
            </div>
            <div className="flex flex-col items-center w-full bg-primary-pearl dark:bg-primary-pearl-alt">
              <div className="w-full p-4 bg-secondary-gray-lightest dark:bg-secondary-gray-lightest-alt">
                <Breadcrumbs />
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

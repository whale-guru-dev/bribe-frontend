import {useDispatch} from "react-redux";
import {openWalletConnectModal, Transaction} from "blockchain-integration";
import {useWeb3React} from "@web3-react/core";
import {
  BribeTokenIcon,
  PowerIcon,
  BribeHeaderLogoIcon,
  LightModeIcon,
  DarkModeIcon,
  SlashIcon,
} from "components/SVGicons";
import {usePriceFromGecko} from "blockchain-integration";
import {geckoBribeID} from "config";
import {useEffect, useState} from "react";
import Sidebar from "./_sidebar";

const lightModeSwitch = (currentState, setState) => {
  if (currentState) {
    document.documentElement.classList.add("dark");
    sessionStorage.setItem("lightMode", (!currentState).toString());
  } else {
    document.documentElement.classList.remove("dark");
    sessionStorage.setItem("lightMode", (!currentState).toString());
  }
  setState(!currentState);
};

const LightThemeButtons = ({lightMode, setLightMode}) => (
  <button
    className="h-12 ml-4"
    onClick={() => lightModeSwitch(lightMode, setLightMode)}
  >
    {lightMode ? (
      <div className="flex flex-nowrap w-16 justify-between items-center">
        <LightModeIcon /> <SlashIcon fill="#AFBBC1" />{" "}
        <DarkModeIcon fill="#AFBBC1" />
      </div>
    ) : (
      <div className="flex flex-nowrap w-16 justify-between items-center">
        <LightModeIcon fill="#6A757A" /> <SlashIcon fill="#6A757A" />{" "}
        <DarkModeIcon fill="#FAFAFA" />
      </div>
    )}
  </button>
);

const HeaderButtons = ({
  account,
  active,
  lightMode,
  setLightMode,
  dispatch,
  deactivate,
}) => {
  return (
    <>
      {!account && !active ? (
        <div className="flex justify-center items-center">
          <LightThemeButtons
            lightMode={lightMode}
            setLightMode={setLightMode}
          />
          <button
            className="h-12 w-44 flex justify-center items-center rounded-lg ml-12 body-3 font-normal dark:text-primary-onix bg-primary-agate dark:bg-primary-agate-alt"
            onClick={() => dispatch(openWalletConnectModal())}
          >
            Connect wallet
          </button>
        </div>
      ) : (
        <div className="px-2 space-x-4 sm:space-x-12 flex justify-around md:justify-center items-center">
          <div className="h-12 w-44 rounded-lg flex justify-center items-center bg-transparent-onix-10 dark:bg-secondary-gray-alt/30">
            <div className="rounded-full mr-2 h-4 w-4  bg-alert-jade dark:bg-alert-jade-alt" />
            <p className="body-3 text-primary-onix dark:text-primary-onix-alt">
              {account?.slice(0, 6) + "..." + account?.slice(-4)}
            </p>
          </div>
          <LightThemeButtons
            lightMode={lightMode}
            setLightMode={setLightMode}
          />
          <button
            className="w-12 h-12 rounded-lg bg-primary-agate dark:bg-primary-agate-alt flex justify-center items-center "
            onClick={() => deactivate()}
          >
            <PowerIcon />
          </button>
        </div>
      )}
    </>
  );
};

const Header = ({
  paths,
  isWalletConnectOpen,
}: {
  paths: Object;
  isWalletConnectOpen: any;
}) => {
  const {account, deactivate, active} = useWeb3React();
  const dispatch = useDispatch();
  const [bribePrice] = usePriceFromGecko([geckoBribeID]);
  const [lightMode, setLightMode] = useState(true);

  useEffect(() => {
    if (!sessionStorage.getItem("lightMode")) {
      sessionStorage.setItem("lightMode", lightMode.toString());
    } else {
      let themeValue =
        sessionStorage.getItem("lightMode") === "false" ? false : true;
      lightModeSwitch(!themeValue, setLightMode);
    }

    return () => {
      sessionStorage.removeItem("lightMode");
    };
  }, []);

  return (
    <div className="flex-wrap w-full justify-between items-center p-6 bg-primary-pearl dark:bg-primary-pearl-alt md:flex md:flex-nowrap">
      <div className="flex justify-between items-center w-full">
        <BribeHeaderLogoIcon className="fill-current dark:text-primary-pearl" />
        <div className="mr-2 space-x-2 flex items-center body-3 sm:mr-8">
          <BribeTokenIcon className="fill-current rounded-full bg-primary-onix text-primary-pearl dark:bg-primary-pearl dark:text-primary-onix" />
          <p className="ml-2 text-secondary-gray-dark dark:text-secondary-gray-dark-alt">
            = ${bribePrice?.toFixed(2) || "--"}
          </p>
          {/* <p
            className={
              Math.sign(bribeTokenPriceChange) >= 0
                ? "text-alert-jade"
                : "text-alert-rubi"
            }
          >
            {Math.sign(bribeTokenPriceChange) >= 0 ? "+" : ""}
            {bribeTokenPriceChange}%
          </p> */}
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center sm:justify-between mt-6 sm:mt-0">
        <HeaderButtons
          account={account}
          active={active}
          lightMode={lightMode}
          setLightMode={setLightMode}
          dispatch={dispatch}
          deactivate={deactivate}
        />
      </div>
      <div className="md:hidden">
        <Sidebar
          paths={paths}
          isWalletConnectOpen={isWalletConnectOpen}
          children={
            <HeaderButtons
              account={account}
              active={active}
              lightMode={lightMode}
              setLightMode={setLightMode}
              dispatch={dispatch}
              deactivate={deactivate}
            />
          }
        />
      </div>
    </div>
  );
};

export default Header;

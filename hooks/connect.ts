import {useWeb3React} from "@web3-react/core";
import {injected} from "connectors/connectors";
import {useEffect, useMemo} from "react";

let tried = false;
export const connectMetamask = () => {
  const {activate, active, account} = useWeb3React();

  useMemo(async () => {
    if (!tried) {
      const isAuthorized = await injected.isAuthorized();
      if (isAuthorized) {
        activate(injected, undefined, true);
      }
      tried = true;
    }
  }, []);
};

import {InjectedConnector} from "@web3-react/injected-connector";
import {WalletConnectConnector} from "@web3-react/walletconnect-connector";
import {NetworkConnector} from "@web3-react/network-connector";

import {SupportedChainIds} from "./chains";

const supportedChainIds = Object.keys(SupportedChainIds).map((k) => Number(k));

export const injected = new InjectedConnector({
  supportedChainIds,
});

export const walletConnectConnector = new WalletConnectConnector({
  supportedChainIds,
  infuraId: "f30a8e726a8c4851bfc92a44a04bc889",
});

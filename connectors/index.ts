import {Web3Provider} from "@ethersproject/providers";
import {providers} from "@0xsequence/multicall";
import {UnsupportedChainIdError} from "@web3-react/core";
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";

import {injected} from "./connectors";

export enum ConnectorNames {
  Injected = "Injected",
  // Network       = 'Network',
  // WalletConnect = 'WalletConnect',
  // WalletLink    = 'WalletLink',
  // Ledger        = 'Ledger',
  // Trezor        = 'Trezor',
  // Lattice       = 'Lattice',
  // Frame         = 'Frame',
  // Authereum     = 'Authereum',
  // Fortmatic     = 'Fortmatic',
  // Magic         = 'Magic',
  // Portis        = 'Portis',
  // Torus         = 'Torus'
}

export type ConnectorType = ConnectorNames | null;

export const connectorsByName: {[connectorName in ConnectorNames]: any} = {
  [ConnectorNames.Injected]: injected,
};

export const getErrorMessage = (error: Error) => {
  if (error instanceof NoEthereumProviderError) {
    return "No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.";
  } else if (error instanceof UnsupportedChainIdError) {
    return "You're connected to an unsupported network.";
  } else if (error instanceof UserRejectedRequestErrorInjected) {
    return "Please authorize this website to access your Ethereum account.";
  } else {
    return "An unknown error occurred. Check the console for more details.";
  }
};

export const getLibrary = (provider: any): Web3Provider => {
  const library = new Web3Provider(provider);
  return library;
};

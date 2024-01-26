import {useWeb3React} from "@web3-react/core";
import {
  closeWalletConnectModal,
  metamask,
  walletconnect,
} from "blockchain-integration";
import {ConnectorType} from "connectors";
import {injected, walletConnectConnector} from "connectors/connectors";
import {useDispatch} from "react-redux";
import {ClosingXicon} from "components/SVGicons";
import {Dialog} from "@headlessui/react";
import {useEffect} from "react";

export interface ConnectModalProps {
  open: boolean;
  onClose: (value: ConnectorType) => void;
}

export default ({open, onClose}: ConnectModalProps) => {
  const {activate, account, active} = useWeb3React();
  const handleClose = () => {
    onClose(null);
  };

  const dispatch = useDispatch();

  const onClick = (name: ConnectorType) => () => {
    onClose(name);
  };

  useEffect(() => {
    if (active) {
      handleClose();
    }
  }, [account]);

  const connectors = [
    {icon: metamask, name: "Metamask", connector: injected},
    {
      icon: walletconnect,
      name: "Walletconnect",
      connector: walletConnectConnector,
    },
  ];

  return (
    <Dialog
      as="div"
      open={!!open}
      onClose={handleClose}
      className="modal-dialog"
    >
      <Dialog.Overlay className="blur-overlay">
        <div className="modal-content z-50 w-96 bg-secondary-gray-lighter dark:bg-secondary-gray-lighter-alt px-9 py-6">
          <Dialog.Title as="div" className="flex justify-between">
            <h5>Connect Wallet</h5>
            <ClosingXicon onClick={handleClose} className="cursor-pointer" />
          </Dialog.Title>
          <p className="body-3 my-6">
            Select a wallet to connect to Bribe Protocol:
          </p>

          <div className="flex flex-col space-y-4">
            {connectors.map((c) => (
              <div
                key={c.name}
                className="flex items-center w-full h-14 bg-secondary-gray dark:bg-secondary-gray-alt rounded-lg space-x-6 cursor-pointer px-4 py-2 hover:bg-secondary-gray-medium dark:hover:bg-secondary-gray-medium-alt"
                onClick={() => activate(c.connector)}
              >
                <img src={c.icon} title={c.name} className="h-6 w-6" />
                <p className="body-1 tracking-s">{c.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Dialog.Overlay>
    </Dialog>
  );
};

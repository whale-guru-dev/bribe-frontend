import {BigNumber} from "@ethersproject/bignumber";
import {Dialog} from "@headlessui/react";
import {ClosingXicon} from "components/SVGicons";
import {parseEther} from "ethers/lib/utils";
import {ReactElement, useState} from "react";
import {BalanceSection, ButtonSection, InputSection} from "./Components";

export type StakeUnstakeModalProps = {
  open: boolean;
  setModalAction: Function;
  tokenList: Array<TokenListProps>;
  balances: {[key: string]: string | number};
  stakeAction: string;
  allowances: {[key: string]: number};
  decimals: number;
  tokenKind?: string;
  stake: (amount: BigNumber, selected: string) => void;
  deposit: (amount: BigNumber, selected: string) => void;
  withdraw: (amount: BigNumber, selected: string) => void;
};

export type SelectedProps = {
  tokenName: string;
  icon: ReactElement;
};

export type TokenListProps = {
  tokenName: string;
  icon: ReactElement;
};

const TITLE_MAPPING = (action: string, tokenKind?: string) =>
  ({
    DEPOSIT: `Stake ${tokenKind || "governance"} token`,
    WITHDRAW: `Unstake ${tokenKind || "governance"} token`,
    STAKE: `Stake ${tokenKind || "governance"} token`,
  }[action]);

const StakeUnstakeModal = ({
  open,
  setModalAction,
  tokenList,
  balances,
  stakeAction,
  tokenKind,
  ...props
}: StakeUnstakeModalProps) => {
  const [selected, setSelected] = useState<SelectedProps>(tokenList[0]);
  const [inputValue, setInputValue] = useState("");

  function closeModal() {
    setModalAction(false);
    setSelected(tokenList[0]);
    setInputValue("");
  }
  return (
    <Dialog as="div" open={open} onClose={closeModal} className="modal-dialog">
      <Dialog.Overlay className="blur-overlay " />
      <div className="modal-content bg-primary-pearl dark:bg-primary-pearl-alt w-full sm:py-12 sm:px-20 sm:max-w-[640px]">
        <Dialog.Title as="div" className="flex flex-col items-end">
          <button type="button" onClick={() => closeModal()}>
            <ClosingXicon className="fill-current text-primary-onix dark:text-primary-onix-alt" />
          </button>
          <div className="flex w-full justify-center">
            <h5>
              {TITLE_MAPPING(stakeAction, tokenKind)
                ? TITLE_MAPPING(stakeAction, tokenKind)
                : "Stake governance token"}
            </h5>
          </div>
        </Dialog.Title>

        <BalanceSection
          balances={balances}
          selected={selected}
          stakeAction={stakeAction}
        />

        <InputSection
          selected={selected}
          setSelected={setSelected}
          tokenList={tokenList}
          inputValue={inputValue}
          setInputValue={setInputValue}
          decimals={props.decimals}
          max={String(balances[selected.tokenName])}
        />
        <div className="flex justify-between items-center mt-12 mb-4 space-x-4">
          <ButtonSection
            buttonText={"CANCEL"}
            action={closeModal}
            inputValue="1"
          />
          <ButtonSection
            buttonText={
              (stakeAction == "STAKE" || stakeAction == "DEPOSIT") &&
              Number(inputValue) > props.allowances[selected.tokenName]
                ? "APPROVE"
                : TITLE_MAPPING(stakeAction, tokenKind)
                ? stakeAction
                : "STAKE"
            }
            action={(_) => {
              props[
                TITLE_MAPPING(stakeAction, tokenKind)
                  ? stakeAction.toLowerCase()
                  : "stake"
              ](parseEther(String(inputValue)), selected.tokenName);
            }}
            inputValue={inputValue}
          />
        </div>
      </div>
    </Dialog>
  );
};

export default StakeUnstakeModal;

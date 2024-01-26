import {FC} from "react";
import {Listbox} from "@headlessui/react";
import {DownCarrotIcon} from "components/SVGicons";
import {BigNumberInput} from "components";
import {SelectedProps, TokenListProps} from "../StakeUnstakeModal";

export type InputSelectionProps = {
  selected: SelectedProps;
  setSelected: Function;
  tokenList: Array<TokenListProps>;
  inputValue: string;
  setInputValue: Function;
  max: string;
  decimals: number;
};

const tokenSelection = (e, setInputValue, setSelected) => {
  setSelected(e);
  setInputValue("");
};

const InputSection = ({
  selected,
  setSelected,
  tokenList,
  inputValue,
  setInputValue,
  max,
  decimals,
}: InputSelectionProps) => {
  return (
    <div className="flex flex-col-reverse w-full border border-secondary-gray dark:border-secondary-gray-alt rounded-lg my-2 sm:flex-row">
      <Listbox
        value={selected}
        onChange={(e) => tokenSelection(e, setInputValue, setSelected)}
      >
        <div className="relative flex w-full h-16 px-2 items-center border-secondary-gray dark:border-secondary-gray-alt sm:border-r sm:w-2/5 sm:h-auto">
          <Listbox.Button className="flex w-full justify-center items-center px-4">
            {({open}) => (
              <div className="flex justify-between items-center w-1/2 sm:w-full">
                <div className="flex items-center space-x-2 w-full">
                  <div className="border fill-current rounded-full bg-primary-onix dark:bg-primary-onix-alt text-primary-onix-alt dark:text-primary-onix">
                    {selected.icon}
                  </div>
                  <p>{selected.tokenName}</p>
                </div>
                <DownCarrotIcon
                  className={
                    "fill-current dark:text-primary-onix-alt " +
                    (open ? "rotate-180" : "")
                  }
                />
              </div>
            )}
          </Listbox.Button>
          <Listbox.Options className="absolute w-full top-[55px] left-0 rounded-br-lg rounded-bl-lg bg-secondary-gray dark:bg-secondary-gray-alt overflow-hidden">
            {tokenList.map((option, index) => (
              <Listbox.Option
                key={index}
                value={option}
                className="flex justify-center items-center px-5 py-2 cursor-pointer hover:bg-secondary-gray-lighter dark:hover:bg-secondary-gray-lighter-alt"
              >
                <div className="flex justify-center items-center w-1/2 sm:w-full">
                  <div className="w-1/4">
                    <div className="w-[24px] h-auto rounded-full fill-current text-primary-pearl bg-primary-onix dark:bg-primary-onix-alt dark:text-primary-onix">
                      {tokenList[index].icon}
                    </div>
                  </div>
                  <p className="w-3/4">{tokenList[index].tokenName}</p>
                </div>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
      <div className="flex justify-center items-center w-full h-16 px-4 sm:w-2/3">
        <BigNumberInput
          className="w-2/3 px-8 text-left bg-primary-pearl dark:bg-primary-pearl-alt rounded-lg body-1"
          placeholder="0.00"
          value={inputValue}
          decimals={decimals}
          onChange={(v) => setInputValue(v)}
          max={max}
        />
        <button
          type="button"
          disabled={parseFloat(max) > 0 ? false : true}
          onClick={() => setInputValue(max)}
          className="rounded-lg bg-transparent-agate-20 dark:bg-transparent-agate-20 w-1/4 ml-4 h-[80%] hover:bg-primary-agate dark:hover:bg-primary-agate-alt dark:text-primary-onix disabled:bg-secondary-gray dark:disabled:bg-secondary-gray-alt disabled:cursor-not-allowed"
        >
          Max
        </button>
      </div>
    </div>
  );
};

export default InputSection;

import React, {useEffect, useState, useRef} from "react";
// import {InputBase, InputBaseProps} from "@material-ui/core";
import {formatUnits, parseUnits} from "@ethersproject/units";
import {BigNumber} from "@ethersproject/bignumber";

export type BigNumberInputProps = {
  decimals: number;
  value: string;
  onChange: (value: string) => void;
  renderInput?: (props: any) => React.ReactElement;
  max?: string;
  min?: string;
  className: string;
  autoFocus?: boolean;
  placeholder?: string;
};

export const BigNumberInput = ({
  decimals,
  value,
  onChange,
  renderInput,
  autoFocus,
  placeholder = "0.00",
  max,
  min,
  className,
  ...props
}: BigNumberInputProps) => {
  const inputRef = useRef<any>(null);

  const [inputValue, setInputvalue] = useState("");

  // update current value
  useEffect(() => {
    if (!value) {
      setInputvalue("");
    } else {
      let parseInputValue;

      // try {
      //   parseInputValue = parseUnits(inputValue || "0", decimals);
      // } catch {
      //   // do nothing
      // }
      setInputvalue(value);
      // if (!parseInputValue || !parseInputValue.eq(value)) {
      // setInputvalue(formatUnits(value, decimals));
      // }
    }
  }, [value, decimals, inputValue]);

  useEffect(() => {
    if (!renderInput && autoFocus && inputRef) {
      const node = inputRef.current as HTMLInputElement;
      node.focus();
    }
  }, [autoFocus, inputRef, renderInput]);

  const updateValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.currentTarget;
    if (value === "") {
      onChange(value);
      setInputvalue(value);
      return;
    }

    let newValue: BigNumber;
    let maxValue: BigNumber;
    let minValue: BigNumber;
    try {
      newValue = parseUnits(value, decimals);
      maxValue = parseUnits(max || "0", decimals);
      minValue = parseUnits(min || "0", decimals);
      // console.log("newValue: ", newValue);
    } catch (e) {
      console.log("error: ", e);
      // don't update the input on invalid values
      return;
    }
    if (value.split(".")[1]?.length > decimals) return;
    if (newValue.lt(minValue) || newValue.gt(maxValue)) return;

    setInputvalue(value);
    onChange(value);
  };

  const inputProps = {
    placeholder,
    onChange: updateValue,
    type: "text",
    value: inputValue,
    className,
    ...props,
  };

  return renderInput ? (
    renderInput({...inputProps})
  ) : (
    <input {...inputProps} ref={inputRef} />
  );
};

BigNumberInput.defaultProps = {
  className: "",
  decimals: 0,
};

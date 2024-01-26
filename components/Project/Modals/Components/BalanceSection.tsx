import {SelectedProps} from "../StakeUnstakeModal";

export type BalanceSectionProps = {
  balances: object;
  selected: SelectedProps;
  stakeAction: string;
};

const ACTION_MAPPING = {
  DEPOSIT: "To be deposited",
  WITHDRAW: "Deposited",
  STAKE: "To be deposited",
};

const BalanceSection = ({
  balances,
  selected,
  stakeAction,
}: BalanceSectionProps) => {
  return (
    <div className="mt-12 mb-4 flex justify-between items-center">
      <p className="text-secondary-gray-dark">{ACTION_MAPPING[stakeAction]}</p>
      <div className="flex items-center">
        <p className="text-secondary-gray-dark">
          Balance: {balances[selected.tokenName]}
        </p>
      </div>
    </div>
  );
};

export default BalanceSection;

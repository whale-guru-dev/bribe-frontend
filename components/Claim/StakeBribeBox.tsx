import DepositWithdrawBox from "components/DepositWithdrawBox";

export type StakeBribeBoxProps = {
  stakedInfo: {
    isEnabled: boolean;
    isStaked: boolean;
    amount: number;
    stakedAmountDollarValue: number;
  };
  isModalOpen: boolean;
  setOpenModal: Function;
  setStakeAction: Function;
};

const StakeBribeBox = ({
  stakedInfo,
  setOpenModal,
  setStakeAction,
}: StakeBribeBoxProps) => {
  return (
    <DepositWithdrawBox
      alreadyStakedAmount={stakedInfo.amount}
      stakedAmountDollarValue={stakedInfo.stakedAmountDollarValue}
      isEnabled={stakedInfo.isEnabled}
      isStaked={stakedInfo.isStaked}
      tokenLabel="Bribe"
      stakeLabel="Stake Bribe Tokens"
      setModalAction={setOpenModal}
      setStakeAction={setStakeAction}
      btnName1="WITHDRAW"
      btnName2="DEPOSIT"
    />
  );
};

export default StakeBribeBox;

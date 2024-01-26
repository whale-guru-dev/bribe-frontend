import DepositWithdrawBox from "components/DepositWithdrawBox";

export type StakeTokenBoxProps = {
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

const StakeTokenBox = ({
  stakedInfo,
  setOpenModal,
  setStakeAction,
}: StakeTokenBoxProps) => {
  return (
    <DepositWithdrawBox
      alreadyStakedAmount={stakedInfo.amount}
      stakedAmountDollarValue={stakedInfo.stakedAmountDollarValue}
      isEnabled={stakedInfo.isEnabled}
      isStaked={stakedInfo.isStaked}
      tokenLabel="Aave + stkAave staked"
      stakeLabel="Stake Tokens"
      setModalAction={setOpenModal}
      setStakeAction={setStakeAction}
      btnName1="WITHDRAW"
      btnName2="DEPOSIT"
    />
  );
};

export default StakeTokenBox;

export type QuorumProgressBarProps = {
  quorumProgress: number;
};

const QuorumProgressBar = ({quorumProgress}: QuorumProgressBarProps) => {
  return (
    <div className="flex h-2.5 rounded-full overflow-hidden bg-secondary-gray dark:bg-secondary-gray-alt w-32">
      <div
        className="bg-primary-onix dark:bg-primary-onix-alt h-2.5"
        style={{width: `${quorumProgress}%`}}
      />
    </div>
  );
};

export default QuorumProgressBar;

import {useWeb3React} from "@web3-react/core";
import {claimReward} from "actions/aavePool";
import {useAavePool} from "hooks/aavePool";
import Link from "next/link";

type RewardsBoxProps = {
  title: string;
  value: any;
  action: string;
  canClaim: boolean;
  classes?: string;
};

const RewardsBox = ({
  title,
  value,
  action,
  canClaim,
  classes,
}: RewardsBoxProps) => {
  const pool = useAavePool();
  const web3 = useWeb3React();
  return (
    <div
      className={
        "bg-secondary-gray-light dark:bg-secondary-gray-light-alt rounded-md p-4 md:p-6 lg:p-8 flex flex-col items-center w-full max-w-[248px] " +
        classes
      }
    >
      <h3 className="subtitle-1 text-secondary-gray-dark dark:text-secondary-gray-dark-alt text-center">
        {title}
      </h3>
      <h3 className="body-1 mt-2 mb-3 font-bold">{value}</h3>
      <Link href={`/claim`}>
        <a>
          <button
            className={`p-2 lg:p-3 w-full rounded-lg text-md lg:text-xl font-normal ${
              canClaim
                ? "bg-primary-agate dark:bg-primary-agate-alt dark:text-primary-onix hover:bg-secondary-amber dark:hover:bg-secondary-amber-alt"
                : "bg-secondary-gray dark:bg-secondary-gray-alt text-secondary-gray-dark dark:text-primary-onix cursor-default"
            }`}
            // onClick={(_) => claimReward(pool, web3)}
          >
            {action}
          </button>
        </a>
      </Link>
    </div>
  );
};

export default RewardsBox;

import {AaveIconWithColor} from "components/SVGicons";
// import { ReactNode } from "react";
import {BigNumber} from "ethers";
import {useProposalContent} from "hooks/aaveGovernance";
import Link from "next/link";

export type ProposalItemProps = {
  // icon: ReactNode;
  id: BigNumber;
  // description: string;
  // status: string;
  ipfsHash: string;
};

const ProposalItem = ({
  // icon,
  id,
  // description,
  // status,
  ipfsHash,
}: ProposalItemProps) => {
  const proposalContent = useProposalContent(ipfsHash);
  return (
    <Link href={"/projects/aave/" + id.toString()}>
      <a>
        <div className="p-5 rounded-lg mt-2 flex-grow bg-secondary-gray-lighter dark:bg-secondary-gray-lighter-alt">
          <div className="relative grid grid-cols-10 mb-9">
            <div className="col-span-8 sm:col-span-9 flex items-center">
              <div className="mr-3">
                {/* {icon} */}
                <AaveIconWithColor />
              </div>
              <div>
                <p>{proposalContent?.title}</p>
                <p className="caption">
                  ID <span>{id.toString()}</span>
                </p>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center">
              {/* <div className={`p-2 rounded-2xl flex justify-center items-center ${status === 'active' ? 'bg-blue-600 text-white' : 'bg-grey-7 text-black'}`}>
            <span className="text-xs">{status}</span>
          </div> */}
              <div className="p-2 rounded-full flex justify-center items-center bg-secondary-topaz dark:bg-secondary-topaz-alt text-primary-pearl dark:text-primary-pearl-alt">
                <p className="caption">Active</p>
              </div>
            </div>
          </div>

          <p className="caption text-secondary-gray-dark dark:text-secondary-gray-dark-alt">
            {proposalContent?.shortDescription}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default ProposalItem;

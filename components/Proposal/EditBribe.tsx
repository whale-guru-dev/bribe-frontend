import {commify} from "ethers/lib/utils";
import Constants from "constants/index";
import {PlusIcon} from "components/SVGicons";

const {BRIBE_ACTIONS} = Constants;

export interface EditBribeProps {
  bribeAmount: string;
  influence: string;
  direction: "Yay" | "Nay";
  openModal: Function;
}

const EditBribe = ({
  bribeAmount,
  influence,
  direction,
  openModal,
}: EditBribeProps) => {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6">
      <div className="box-container rounded">
        <p className="text-secondary-gray-dark dark:text-secondary-gray-dark-alt text-sm mb-2">
          Vote Cast
        </p>
        <h5 className="text-secondary-gray-dark dark:text-secondary-gray-dark-alt text-lg mb-1">
          {direction}
        </h5>
        <p className="text-secondary-lighter dark:text-secondary-gray-dark-alt text-sm">
          ~{influence}% estimated influence
        </p>
      </div>

      <div className="box-container rounded flex">
        <div className="">
          <p className="text-secondary-gray-dark dark:text-secondary-gray-dark-alt text-sm mb-2">
            Bribe Offered (USDC)
          </p>
          <h5 className="text-secondary-gray-dark dark:text-secondary-gray-dark-alt text-lg mb-1">
            {commify(bribeAmount)}
          </h5>
          <p className="text-secondary-gray-medium dark:text-secondary-gray-medium-alt text-sm">{`~$${commify(
            bribeAmount,
          )}`}</p>
        </div>

        <div className="flex-grow ml-3 grid justify-end gap-2">
          {/* <button
            onClick={() => openModal(BRIBE_ACTIONS.DECREASE)}
            className="rounded border py-2 text-secondary-gray-medium dark:text-secondary-gray-medium-alt border-secondary-gray-medium dark:border-secondary-gray-medium-alt hover:bg-transparent-onix-40 dark:hover:bg-transparent-onix-40-alt mt-auto uppercase"
          >
            - Decrease
          </button> */}
          <button
            onClick={() => openModal(BRIBE_ACTIONS.INCREASE)}
            className="flex justify-center items-center rounded border w-12 py-2 text-secondary-gray-medium dark:text-secondary-gray-medium-alt border-secondary-gray-medium dark:border-secondary-gray-medium-alt hover:bg-transparent-onix-40 dark:hover:bg-transparent-onix-40-alt mt-auto uppercase"
          >
            <PlusIcon className="fill-current dark:text-primary-onix-alt" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBribe;

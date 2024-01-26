const DefaultBidItem = () => {
  return (
    <div className="grid grid-cols-10 items-center bg-secondary-gray-lighter dark:bg-secondary-gray-lighter-alt rounded-lg p-8 mb-4">
      <div className="col-span-10 sm:col-span-7">
        <p className="font-bold body-2">
          Your governance tokens have not been used by Bribe Protocol yet.
        </p>
        <p className="text-secondary-gray-dark dark:text-secondary-gray-dark-alt caption">
          After your voting power has been borrowed, you will be able to claim
          your portion of the bid.
        </p>
      </div>
      <div className="col-span-10 mt-4 sm:mt-0 sm:col-span-3">
        <div className="w-full sm:w-3/4 flex justify-center sm:justify-end">
          <button
            disabled={true}
            type="button"
            className={
              "w-40 rounded-lg h-btnHeight disabled:bg-secondary-gray dark:disabled:bg-secondary-gray-alt disabled:text-secondary-gray-dark dark:disabled:text-secondary-gray-dark-alt cursor-not-allowed text-secondary-gray-dark dark:text-secondary-gray-dark-alt"
            }
          >
            Nothing to claim
          </button>
        </div>
      </div>
    </div>
  );
};

export default DefaultBidItem;

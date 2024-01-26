import {DownArrowIcon} from "components/SVGicons";
import {commify} from "utils";
import {splitTitle} from "utils/splitTitle";

const BribesTable = ({
  items,
  title = "",
  classes = "",
}: {
  items: {id: string; account: string; amount: string; position: boolean}[];
  title: string;
  classes?: string;
}) => {
  const splitTitleArray = splitTitle(title);
  return (
    <div>
      {splitTitleArray && (
        <h5 className="mb-5">
          <span className="font-bold">{splitTitleArray[0]}</span>{" "}
          {splitTitleArray[1]}
        </h5>
      )}

      <div className={`border-2 rounded overflow-hidden ${classes}`}>
        <div className="flex space-x-4 border-b-2 px-5 py-3">
          <div className="w-1/4 flex items-center">
            <p>Rank</p>{" "}
            <DownArrowIcon className="ml-3 fill-current text-primary-onix dark:text-primary-onix-alt" />
          </div>
          <div className="w-1/4 flex items-center">
            <p>Voter</p>{" "}
            <DownArrowIcon className="ml-3  fill-current text-primary-onix dark:text-primary-onix-alt" />
          </div>
          <div className="w-1/4 flex items-center">
            <p>Position</p>{" "}
            <DownArrowIcon className="ml-3  fill-current text-primary-onix dark:text-primary-onix-alt" />
          </div>
          <div className="w-1/4 flex items-center">
            <p>Amount</p>{" "}
            <DownArrowIcon className="ml-3  fill-current text-primary-onix dark:text-primary-onix-alt" />
          </div>
        </div>

        <div className="px-5">
          {(items || []).map((item, idx) => {
            return (
              <div className="flex space-x-4 pt-4 last:pb-4" key={item.id}>
                <p className="w-1/4">{idx + 1}</p>
                <p className="w-1/4">
                  {!item
                    ? "----"
                    : item.account.slice(0, 3) + "..." + item.account.slice(-3)}
                </p>
                <p className="w-1/4">{"----"}</p>
                <p className="w-1/4">{!item ? "----" : commify(item.amount)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BribesTable;

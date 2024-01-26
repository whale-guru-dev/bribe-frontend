import {AaveIconWithColor} from "components/SVGicons";
import TableRecord, {TableRecordProps} from "./TableRecord";

type TableBodyProps = {
  data?: TableRecordProps[];
  type: "bids" | "votes";
};

const TableBody = ({data = [], type}: TableBodyProps) => {
  return (
    <>
      {data.map((record, index) => {
        return (
          <tbody
            className="bg-secondary-gray-lighter dark:bg-secondary-gray-lighter-alt"
            key={`table-body-${index}`}
          >
            <TableRecord
              id={record.id}
              proposalId={record.proposalId}
              timestamp={record.timestamp}
              key={`record-${record.id}`}
              type={type}
            />
          </tbody>
        );
      })}
    </>
  );
};
export default TableBody;

import {ReactNode} from "react";

export interface ItemDetailsProps {
  icon: ReactNode;
  title: string;
  value: string | number;
}

const ItemDetailsBox = ({icon, title, value}: ItemDetailsProps) => {
  return (
    <div className="flex items-center">
      <div className="mr-4">{icon}</div>

      <div>
        <p className="uppercase text-secondary-gray-dark dark:text-secondary-gray-dark-alt">
          {title}
        </p>
        <p className="font-bold">{value}</p>
      </div>
    </div>
  );
};

export default ItemDetailsBox;

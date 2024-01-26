import { useState } from "react";

export const Select = ({
  value,
  items,
  onSelect,
}: {
  value: string;
  items: string[];
  onSelect: (item: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        className="bg-grey-4 px-2 py-1 cursor-pointer rounded-md w-12 text-center"
        onFocus={(_) => setOpen(true)}
        onBlur={(_) => setTimeout((_) => setOpen(false), 100)}
        tabIndex={-1}
      >
        {value}
      </div>
      {open ? (
        <div className="absolute">
          {items
            .filter((item) => item != value)
            .map((item) => {
              return (
                <div
                  className="bg-white rounded-md hover:bg-gray-600 hover:text-white px-2 py-1 cursor-pointer w-12 text-center"
                  onClick={(_) => {
                    onSelect(item);
                  }}
                >
                  {item}
                </div>
              );
            })}
        </div>
      ) : null}
    </div>
  );
};

import {ReactNode} from "react";

export type TooltipProps = {
  element?: ReactNode;
  children: ReactNode;
  width?: number | string;
  wrapperClasses?: string;
  tooltipClasses?: string;
  tooltipTailClasses?: string;
};

const Tooltip = ({
  element,
  children,
  width = "auto",
  wrapperClasses = "",
  tooltipClasses = "bottom-4 -left-6",
  tooltipTailClasses = "bottom-2 left-1",
}: TooltipProps) => {
  return (
    <div className={`group relative ${wrapperClasses}`}>
      {!!element && element}

      <div className={`absolute invisible group-hover:visible`}>
        <div
          className={`absolute z-20 w-${width} min-w-max rounded-lg p-4 bg-secondary-gray-dark dark:bg-secondary-gray-light-alt text-primary-pearl text-xs ${tooltipClasses}`}
        >
          {children}
        </div>
        <div
          className={`absolute z-10 bg-secondary-gray-dark dark:bg-secondary-gray-light-alt w-4 h-4 rotate-45 ${tooltipTailClasses}`}
        />
      </div>
    </div>
  );
};

export default Tooltip;

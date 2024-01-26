import {SVGProps} from "react";

const DownArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={12} height={12} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m12 6-1.057-1.058L6.75 9.127V0h-1.5v9.127L1.065 4.935 0 6l6 6 6-6Z" />
  </svg>
);

export default DownArrowIcon;

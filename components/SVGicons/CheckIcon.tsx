import {SVGProps} from "react";

const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={13}
    fill={props.fill || "inherit"}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 10.17 2.53 6.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L17.29 1.71A.996.996 0 1 0 15.88.3L6 10.17Z"
      fill={props.fill || "inherit"}
    />
  </svg>
);

export default CheckIcon;

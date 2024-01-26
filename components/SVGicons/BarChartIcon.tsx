import {SVGProps} from "react";

const BarChartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill={props.fill || "#6A757A"}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2S6 .9 6 2v12c0 1.1.9 2 2 2Zm-6 0c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2s-2 .9-2 2v4c0 1.1.9 2 2 2Zm10-9v7c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2Z"
      fill="inherit"
    />
  </svg>
);

export default BarChartIcon;

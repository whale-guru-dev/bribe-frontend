import * as React from "react";
import {SVGProps} from "react";

const CircleSuccessIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    aria-hidden="true"
    width={20}
    height={20}
    // fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path 
    fillRule="evenodd"
    d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0ZM7.29 14.29 3.7 10.7a.996.996 0 1 1 1.41-1.41L8 12.17l6.88-6.88a.996.996 0 1 1 1.41 1.41L8.7 14.29a.996.996 0 0 1-1.41 0Z" 
    clipRule="evenodd"
    />
  </svg>
);

export default CircleSuccessIcon;

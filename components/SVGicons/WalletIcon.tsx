import * as React from "react";
import {SVGProps} from "react";

const WalletIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={17}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.5 13v.833c0 .917-.75 1.667-1.667 1.667H2.167C1.242 15.5.5 14.75.5 13.833V2.167C.5 1.25 1.242.5 2.167.5h11.666c.917 0 1.667.75 1.667 1.667V3H8c-.925 0-1.667.75-1.667 1.667v6.666C6.333 12.25 7.075 13 8 13h7.5ZM8 11.333h8.333V4.667H8v6.666Zm3.333-2.083c-.691 0-1.25-.558-1.25-1.25s.559-1.25 1.25-1.25c.692 0 1.25.558 1.25 1.25s-.558 1.25-1.25 1.25Z"
      fill="#363636"
    />
  </svg>
);

export default WalletIcon;

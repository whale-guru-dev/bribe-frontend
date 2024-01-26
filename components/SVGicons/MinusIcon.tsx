import * as React from "react";
import {SVGProps} from "react";

const MinusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1Z" />
  </svg>
);

export default MinusIcon;

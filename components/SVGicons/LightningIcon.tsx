import {SVGProps} from "react";

const LightningIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={11}
    height={18}
    fill={props.fill || "#6A757A"}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.67 18c-.35 0-.62-.31-.57-.66L4 11H.5c-.88 0-.33-.75-.31-.78C1.45 7.99 3.34 4.69 5.84.29a.577.577 0 0 1 1.07.37L6.01 7h3.51c.4 0 .62.19.4.66-3.29 5.74-5.2 9.09-5.75 10.05-.1.18-.29.29-.5.29Z"
      fill="inherit"
    />
  </svg>
);

export default LightningIcon;

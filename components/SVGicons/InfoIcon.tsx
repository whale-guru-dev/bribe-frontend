import {SVGProps} from "react";

const InfoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox={props.viewBox || "0, 0, 24, 24"}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1Zm1-8h-2V7h2v2Z"
      fill={props.fill || "#0075B7"}
    />
  </svg>
);

export default InfoIcon;

import {SVGProps} from "react";

const CalendarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={20}
    fill={props.fill || "#6A757A"}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 11h-3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1Zm0-10v1H5V1c0-.55-.45-1-1-1S3 .45 3 1v1H2C.89 2 .01 2.9.01 4L0 18a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2h-1V1c0-.55-.45-1-1-1s-1 .45-1 1Zm2 17H3c-.55 0-1-.45-1-1V7h14v10c0 .55-.45 1-1 1Z"
      fill="inherit"
    />
  </svg>
);

export default CalendarIcon;

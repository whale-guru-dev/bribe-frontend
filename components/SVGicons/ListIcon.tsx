import {SVGProps} from "react";

const ListIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill={props.fill || "#6A757A"}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 9h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1Zm0 4h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1Zm0 4h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1ZM7 7h2v2H7V7Zm0 4h2v2H7v-2Zm0 4h2v2H7v-2ZM20 3H4c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1Zm-1 16H5V5h14v14Z"
      fill="inherit"
    />
  </svg>
);

export default ListIcon;

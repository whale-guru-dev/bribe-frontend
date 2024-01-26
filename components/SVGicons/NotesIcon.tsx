import {SVGProps} from "react";

const NotesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={64} height={64} xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={32} cy={32} r={24} fill="#FFC700" fillOpacity={0.4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M46.667 22H17.333v40h29.334V22Zm-29.334-1.333H16v42.667H48V20.667H17.333Zm25.334 32H22v-1.333h20.667v1.333ZM22 36.667h20.667v-1.333H22v1.333Zm20.667 12H22v-1.333h20.667v1.333ZM22 32.667h20.667v-1.333H22v1.333Zm20.667 12H22v-1.333h20.667v1.333ZM22 28.667h20.667v-1.333H22v1.333Zm20.667 28H22v-1.333h20.667v1.333ZM22 40.667h20.667v-1.333H22v1.333ZM32 14.667a6.667 6.667 0 1 0 0-13.334 6.667 6.667 0 0 0 0 13.334ZM32 16a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-.943-8L28.7 5.643l.943-.943L32 7.057 34.357 4.7l.943.943L32.943 8l2.357 2.357-.943.943L32 8.943 29.643 11.3l-.943-.943L31.057 8Z"
    />
  </svg>
);

export default NotesIcon;

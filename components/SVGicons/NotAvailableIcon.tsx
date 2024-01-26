import {SVGProps} from "react";

const NotAvailableIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={64} height={64} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#notAvailableIcon)">
      <circle cx={32} cy={32} r={24} fill="#FFC700" fillOpacity={0.4} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.334-1.333v4.666h-4v6h4v3.333h-4v6h4V22h-4v6h4v3.333h-4v6h4v3.334h-4V46.666h4V50h-4v6h4v3.333h-4v6h5.333V64h-4v-3.334h4v-6h-4v-3.333h4v-6h-4V42h4v-6h-4v-3.334h4v-6h-4v-3.333h4v-6h-4V14h4V8h-4V4.667h4v-6h-1.333ZM22.666 32a9.333 9.333 0 1 1-18.667 0 9.333 9.333 0 0 1 18.667 0Zm1.333 0c0 5.891-4.775 10.667-10.666 10.667S2.666 37.89 2.666 32c0-5.89 4.776-10.666 10.667-10.666 5.89 0 10.666 4.775 10.666 10.666Zm-10.146-4.72c1.56 0 2.546.933 2.546 2.427 0 .933-.4 1.56-1.186 1.866.506.12.906.387 1.213.827.307.44.467.894.467 1.373 0 .76-.254 1.4-.76 1.92-.494.52-1.16.774-2 .774h-3.8V27.28h3.52Zm-.147 1.293h-1.947v2.48h2.04c.707 0 1.134-.56 1.134-1.293 0-.747-.467-1.187-1.227-1.187Zm1.32 4.16a1.24 1.24 0 0 0-1-.466h-2.267v2.906h2.307c.813 0 1.347-.666 1.347-1.413 0-.373-.134-.72-.387-1.026ZM44 22h13.333v18.666H43.999V22Zm-1.334-1.334h16V42h-16V20.666Zm4 14.667h8V34h-8v1.333Zm8-3.333h-8v-1.334h8V32Zm-8-3.334h8v-1.333h-8v1.334Zm8-3.333h-8V24h8v1.333Zm-8 13.334h8v-1.334h-8v1.334Z"
      />
    </g>
    <defs>
      <clipPath id="notAvailableIcon">
        <path d="M0 0h64v64H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default NotAvailableIcon;

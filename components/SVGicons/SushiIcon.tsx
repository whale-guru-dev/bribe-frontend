import {SVGProps} from "react";

const SushiIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={45}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10 2.6 47.2 28 38 41.6.8 16 10 2.6Z" fill="url(#a)" />
    <path
      d="M47.2 28c-3.2 4.6-14 2.8-24.2-4.4-10.4-7-16-16.4-13-21C13.2-2 24-.2 34.2 7c10.4 6.8 16 16.4 13 21Z"
      fill="url(#b)"
    />
    <path
      d="M38 41.4C34.8 46 24 44.2 13.8 37S-2.2 20.6 1 15.8c3.2-4.6 14-2.8 24.2 4.4S41 36.8 38 41.4Z"
      fill="url(#c)"
    />
    <path
      d="M47.2 28 38 41.6c-3.2 4.6-14 2.6-24.2-4.4-2-1.4-3.8-2.8-5.6-4.4 1.4-.2 3.2-1 5-3 3.2-3.4 4.8-4.2 6.2-4 1.4 0 3 1.4 5.6 4.8 2.6 3.4 6.2 4.4 8.4 2.6.2-.2.4-.2.6-.4 1.8-1.4 2.4-2 5.8-8.4.8-1.6 3.6-4.2 7.4-3 1 2.6 1 4.8 0 6.6Z"
      fill="#0E0F23"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M45.8 27.2c-2.8 4-12.6 2-22-4.6-9.6-6.6-15.2-15-12.4-19 2.8-4 12.6-2 22 4.6s15 15 12.4 19Zm-8.8-6c-1.4 2-6.2 1-11-2.2-4.6-3.2-7.4-7.4-6-9.4 1.4-2 6.2-1 11 2.2 4.6 3.2 7.4 7.4 6 9.4Z"
      fill="#fff"
    />
    <path
      d="M9.2 7.2c0-.2-.2-.4-.4-.2s-.4.2-.4.4c.2.6.4 1 .4 1.4 0 .2.2.4.4.2.2 0 .4-.2.2-.4 0-.4 0-.8-.2-1.4ZM10.2 10.4c0-.2-.2-.4-.4-.2s-.2.2-.2.4c2.2 5 6.8 10.4 12.8 14.4.2.2.4 0 .6 0 .2-.2 0-.4 0-.6-6.2-4-10.6-9.2-12.8-14ZM34.4 30c-.2 0-.4 0-.4.2s0 .4.2.4c.6.2 1.4.4 2 .6.2 0 .4 0 .4-.2s0-.4-.2-.4c-.6-.2-1.4-.4-2-.6ZM38 30.8c-.2 0-.4.2-.4.4s.2.4.4.4c1.6.2 3.4.4 4.8.2.2 0 .4-.2.4-.4s-.2-.4-.4-.4c-1.6.2-3.2 0-4.8-.2Z"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="a"
        x1={17.288}
        y1={-1.011}
        x2={24.666}
        y2={24.321}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#03B8FF" />
        <stop offset={1} stopColor="#FA52A0" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={23.364}
        y1={-2.781}
        x2={30.741}
        y2={22.552}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#03B8FF" />
        <stop offset={1} stopColor="#FA52A0" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={11.232}
        y1={0.752}
        x2={18.61}
        y2={26.085}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#03B8FF" />
        <stop offset={1} stopColor="#FA52A0" />
      </linearGradient>
    </defs>
  </svg>
);

export default SushiIcon;

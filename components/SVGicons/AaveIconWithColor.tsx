import {SVGProps} from "react";

const AaveIconWithColor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24 47.28c12.857 0 23.28-10.423 23.28-23.28C47.28 11.143 36.857.72 24 .72 11.143.72.72 11.143.72 24 .72 36.857 11.143 47.28 24 47.28Z"
      fill="url(#aaveBGgradient)"
    />
    <path
      d="m34.188 33.276-7.872-19.032c-.444-.984-1.104-1.464-1.974-1.464h-.696c-.87 0-1.53.48-1.974 1.464l-3.426 8.292h-2.592a1.42 1.42 0 0 0-1.41 1.41v.018a1.424 1.424 0 0 0 1.41 1.41h1.392l-3.27 7.902a1.65 1.65 0 0 0-.096.54c0 .444.138.792.384 1.062s.6.402 1.044.402c.294-.006.576-.096.81-.27.252-.174.426-.426.564-.714l3.6-8.928h2.496a1.42 1.42 0 0 0 1.41-1.41v-.036a1.424 1.424 0 0 0-1.41-1.41h-1.332l2.748-6.846 7.488 18.624c.138.288.312.54.564.714.234.174.522.264.81.27.444 0 .792-.132 1.044-.402s.384-.618.384-1.062a1.259 1.259 0 0 0-.096-.534Z"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="aaveBGgradient"
        x1={41.357}
        y1={9.395}
        x2={6.716}
        y2={38.542}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B6509E" />
        <stop offset={1} stopColor="#2EBAC6" />
      </linearGradient>
    </defs>
  </svg>
);

export default AaveIconWithColor;

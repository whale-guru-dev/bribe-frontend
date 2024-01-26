import * as React from "react";
import {SVGProps} from "react";

const AaveIconWithColorSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 23.64c6.428 0 11.64-5.211 11.64-11.64C23.64 5.572 18.428.36 12 .36 5.57.36.36 5.572.36 12 .36 18.43 5.57 23.64 12 23.64Z"
      fill="url(#smallAaveGradient)"
    />
    <path
      d="m17.094 16.639-3.936-9.516c-.222-.492-.552-.732-.987-.732h-.348c-.435 0-.765.24-.987.732l-1.713 4.146H7.827a.71.71 0 0 0-.705.705v.009a.712.712 0 0 0 .705.705h.696l-1.635 3.95a.825.825 0 0 0-.048.27c0 .223.069.397.192.532s.3.2.522.2a.698.698 0 0 0 .405-.134.877.877 0 0 0 .282-.357l1.8-4.464h1.248a.71.71 0 0 0 .705-.705v-.018a.712.712 0 0 0-.705-.705h-.666l1.374-3.423 3.744 9.312c.069.144.156.27.282.357a.705.705 0 0 0 .405.135c.222 0 .396-.066.522-.201a.744.744 0 0 0 .192-.531.63.63 0 0 0-.048-.267Z"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="smallAaveGradient"
        x1={20.678}
        y1={4.698}
        x2={3.358}
        y2={19.271}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B6509E" />
        <stop offset={1} stopColor="#2EBAC6" />
      </linearGradient>
    </defs>
  </svg>
);

export default AaveIconWithColorSmall;

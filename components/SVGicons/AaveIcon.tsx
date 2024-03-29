import * as React from "react";
import {SVGProps} from "react";

const AaveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m17.094 16.639-3.936-9.516c-.222-.492-.552-.732-.987-.732h-.348c-.435 0-.765.24-.987.732l-1.713 4.146H7.827a.71.71 0 0 0-.705.705v.009a.712.712 0 0 0 .705.705h.696l-1.635 3.95a.825.825 0 0 0-.048.27c0 .223.07.397.192.532.123.135.3.2.522.2a.698.698 0 0 0 .405-.134.877.877 0 0 0 .282-.357l1.8-4.464h1.248a.71.71 0 0 0 .705-.705v-.018a.712.712 0 0 0-.705-.705h-.666l1.374-3.423 3.744 9.312c.07.144.156.27.282.357a.705.705 0 0 0 .405.135c.222 0 .396-.066.522-.201a.744.744 0 0 0 .192-.531.63.63 0 0 0-.048-.267Z" />
  </svg>
);

export default AaveIcon;

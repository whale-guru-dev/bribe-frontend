import * as React from "react";
import {SVGProps} from "react";

const PeopleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M15 6c1.66 0 2.99-1.34 2.99-3S16.66 0 15 0c-1.66 0-3 1.34-3 3s1.34 3 3 3ZM7 6c1.66 0 2.99-1.34 2.99-3S8.66 0 7 0C5.34 0 4 1.34 4 3s1.34 3 3 3Zm0 2c-2.33 0-7 1.17-7 3.5V13c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1.5C14 9.17 9.33 8 7 8Zm8 0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V13c0 .35-.07.69-.18 1H21c.55 0 1-.45 1-1v-1.5C22 9.17 17.33 8 15 8Z" />
  </svg>
);

export default PeopleIcon;

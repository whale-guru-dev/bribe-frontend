import {SVGProps} from "react";

const YearnIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 0c13.253 0 24 10.747 24 24S37.253 48 24 48 0 37.253 0 24 10.747 0 24 0Z"
      fill="#006AE3"
    />
    <path d="M23.011 34.119V14.15h2.175v19.968H23.01Z" fill="#fff" />
    <path
      d="m34.08 20.803-6.715 1.78-1.498-6.97 1.997-.45.787 3.302s1.814-2.976-.605-6.057c-1.425-1.585-2.102-1.652-3.7-1.901-1.407-.202-4.676.273-5.65 4.09-.413 2.457.053 4.276 3.22 6.657l-.177 2.65s-3.537-2.492-4.45-4.239c-.705-1.382-1.915-4.113.27-7.915 1.175-1.9 3.494-3.725 7.579-3.533 2.054.086 7.07 2.597 6.292 8.463-.134 1.099-.705 2.563-.705 2.563l2.755-.615.6 2.175ZM30.245 36.427c-1.229 1.867-3.595 3.628-7.67 3.33-2.055-.138-6.999-2.783-6.068-8.625.163-1.094.773-2.539.773-2.539l-2.77.538-.542-2.184 6.763-1.604 1.315 7.008-2.01.399-.702-3.327s-1.89 2.924.442 6.072c1.382 1.623 2.054 1.704 3.653 1.997 1.397.24 4.68-.153 5.755-3.94.475-2.444.058-4.277-3.043-6.745l.25-2.644s3.47 2.582 4.334 4.353c.662 1.407 1.8 4.171-.48 7.91Z"
      fill="#fff"
    />
  </svg>
);

export default YearnIcon;

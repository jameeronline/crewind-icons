import * as React from "react";
const SvgPhone = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="phone_svg__bi phone_svg__bi-phone"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </svg>
);
export default SvgPhone;
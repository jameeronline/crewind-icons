import * as React from "react";
const SvgDot = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="dot_svg__bi dot_svg__bi-dot"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
  </svg>
);
export default SvgDot;

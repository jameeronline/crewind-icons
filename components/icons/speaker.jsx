import * as React from "react";
const SvgSpeaker = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="speaker_svg__bi speaker_svg__bi-speaker"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
    <path d="M8 4.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5M8 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
  </svg>
);
export default SvgSpeaker;
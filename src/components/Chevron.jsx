import React from "react";

const Chevron = ({
  open = false,
  size = 45,
  color = "#fff",
  strokeWidth = 1.5,
   className = ""
}) => (
  <svg
  className={className}
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{
     
      transform: open ? "rotate(-180deg)" : "rotate(0deg)" ,
      transition: "transform 0.3s",
      marginLeft: "1em",
      verticalAlign: "middle",
      display: "inline-block"
    }}
  >
    <polyline
      points="4,10 8,6 12,10"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Chevron;

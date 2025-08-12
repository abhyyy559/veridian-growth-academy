import React from "react";

interface LumaSpinProps {
  color?: string;
  size?: number;
}

// A simple animated spinner using SVG and Tailwind for color
const LumaSpin: React.FC<LumaSpinProps> = ({ color = "#22c55e", size = 48 }) => (
  <svg
    className="animate-spin"
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "block" }}
  >
    <circle
      cx="25"
      cy="25"
      r="20"
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
      strokeDasharray="31.4 31.4"
      strokeDashoffset="0"
      fill="none"
      opacity="0.3"
    />
    <path
      d="M25 5a20 20 0 1 1-14.14 34.14"
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export { LumaSpin as Component };

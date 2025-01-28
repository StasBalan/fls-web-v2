import { SkillLevelComponentProps } from "./types";

export const SkillLevel0 = ({ className }: SkillLevelComponentProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className={className}
  >
    <circle cx={12} cy={12} r={12} fill="#121212" />
    <path
      fill="#CDCDCD"
      fillOpacity={0.1}
      fillRule="evenodd"
      d="M16.685 17.467a7.2 7.2 0 1 0-9.371 0l-1.563 1.822A9.58 9.58 0 0 1 2.4 12 9.6 9.6 0 0 1 12 2.4a9.6 9.6 0 0 1 9.6 9.6 9.58 9.58 0 0 1-3.352 7.29l-1.563-1.823z"
      clipRule="evenodd"
    />
  </svg>
);

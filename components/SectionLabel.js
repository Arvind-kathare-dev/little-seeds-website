import { C } from "./constants";

export default function SectionLabel({ text, color = C.coral }) {
  return (
    <span
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 13,
        fontWeight: 700,
        color,
        letterSpacing: ".12em",
        textTransform: "uppercase",
      }}
    >
      {text}
    </span>
  );
}

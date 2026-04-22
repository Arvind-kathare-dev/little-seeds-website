import Link from "next/link";
import { C } from "./constants";

export default function BackButton() {
  return (
    <Link
      href="/"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 14,
        fontWeight: 600,
        color: C.teal,
        textDecoration: "none",
        marginBottom: 24,
      }}
    >
      <svg width="18" height="18" viewBox="0 0 18 18">
        <path d="M11 4L6 9l5 5" stroke={C.teal} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Back to Home
    </Link>
  );
}

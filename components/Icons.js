import { C } from "./constants";

export function SeedlingIcon({ size = 48, color = C.sage }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <line x1="24" y1="38" x2="24" y2="18" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 26c-4-6-12-6-12-1s6 7 12 1z" fill={color} opacity=".7" />
      <path d="M24 20c4-6 12-5 11 0s-7 6-11 0z" fill={color} opacity=".85" />
      <ellipse cx="24" cy="40" rx="4" ry="2" fill={color} opacity=".3" />
    </svg>
  );
}

export function HeartIcon({ size = 36, color = C.coral }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <path d="M18 30C8 22 2 16 2 10A7 7 0 0118 8 7 7 0 0134 10c0 6-6 12-16 20z" fill={color} opacity=".5" />
    </svg>
  );
}

export function BookSmallIcon({ size = 36, color = C.teal }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <path d="M18 8Q10 5 4 10V28Q10 23 18 26z" fill={color} opacity=".15" stroke={color} strokeWidth="1.5" />
      <path d="M18 8Q26 5 32 10V28Q26 23 18 26z" fill={color} opacity=".15" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

export function StarIcon({ size = 36, color = C.gold }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <polygon points="18,4 22,14 32,14 24,21 27,31 18,25 9,31 12,21 4,14 14,14" fill={color} opacity=".6" />
    </svg>
  );
}

export function SunIcon({ size = 36, color = C.gold }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="8" fill={color} opacity=".7" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
        <line
          key={i}
          x1={18 + 10 * Math.cos((a * Math.PI) / 180)}
          y1={18 + 10 * Math.sin((a * Math.PI) / 180)}
          x2={18 + 14 * Math.cos((a * Math.PI) / 180)}
          y2={18 + 14 * Math.sin((a * Math.PI) / 180)}
          stroke={color} strokeWidth="2" strokeLinecap="round" opacity=".5"
        />
      ))}
    </svg>
  );
}

export function MoonIcon({ size = 36, color = C.gold }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <path d="M14 4A14 14 0 1014 32 10 10 0 1114 4z" fill={color} opacity=".5" />
    </svg>
  );
}

export function ClockIcon({ size = 36, color = C.teal }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="13" stroke={color} strokeWidth="2" opacity=".6" />
      <line x1="18" y1="18" x2="18" y2="10" stroke={color} strokeWidth="2" strokeLinecap="round" opacity=".7" />
      <line x1="18" y1="18" x2="24" y2="20" stroke={color} strokeWidth="2" strokeLinecap="round" opacity=".5" />
    </svg>
  );
}

export function CalendarIcon({ size = 36, color = C.teal }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <rect x="4" y="8" width="28" height="24" rx="3" stroke={color} strokeWidth="2" opacity=".6" />
      <line x1="4" y1="15" x2="32" y2="15" stroke={color} strokeWidth="1.5" opacity=".4" />
      <line x1="12" y1="4" x2="12" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round" opacity=".5" />
      <line x1="24" y1="4" x2="24" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round" opacity=".5" />
    </svg>
  );
}

export function PaletteIcon({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <ellipse cx="18" cy="18" rx="15" ry="13" fill={C.sage} opacity=".15" stroke={C.sage} strokeWidth="1.5" />
      <circle cx="12" cy="14" r="3" fill={C.coral} opacity=".6" />
      <circle cx="20" cy="11" r="2.5" fill={C.teal} opacity=".5" />
      <circle cx="25" cy="17" r="2.5" fill={C.gold} opacity=".5" />
      <circle cx="14" cy="22" r="2.5" fill={C.sage} opacity=".6" />
      <ellipse cx="26" cy="23" rx="3" ry="4" fill={C.white} />
    </svg>
  );
}

export function RocketIcon({ size = 36, color = C.teal }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <path d="M12 24l-3 6 6-3M18 6c6 0 12 6 12 12s-12 12-12 12S6 24 6 18s6-12 12-12z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity=".6" />
      <path d="M22 14c1.5 1.5 1.5 4 0 5.5s-4 1.5-5.5 0" stroke={color} strokeWidth="2" strokeLinecap="round" opacity=".4" />
    </svg>
  );
}

export function UsersIcon({ size = 36, color = C.teal }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <circle cx="12" cy="14" r="5" stroke={color} strokeWidth="2" opacity=".6" />
      <path d="M4 28c0-4 4-7 8-7s8 3 8 7" stroke={color} strokeWidth="2" strokeLinecap="round" opacity=".5" />
      <circle cx="24" cy="14" r="4" stroke={color} strokeWidth="2" opacity=".4" />
      <path d="M18 28c0-3 3-5 6-5s6 2 6 5" stroke={color} strokeWidth="2" strokeLinecap="round" opacity=".3" />
    </svg>
  );
}

export function MapPinIcon({ size = 36, color = C.coral }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <path d="M18 32s-10-8-10-14a10 10 0 1120 0c0 6-10 14-10 14z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity=".6" />
      <circle cx="18" cy="18" r="3" stroke={color} strokeWidth="2" opacity=".5" />
    </svg>
  );
}

export function PhoneIcon({ size = 36, color = C.teal }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <path d="M10 4h16a2 2 0 012 2v24a2 2 0 01-2 2H10a2 2 0 01-2-2V6a2 2 0 012-2z" stroke={color} strokeWidth="2" opacity=".5" />
      <line x1="14" y1="28" x2="22" y2="28" stroke={color} strokeWidth="2" strokeLinecap="round" opacity=".6" />
    </svg>
  );
}

export function MailIcon({ size = 36, color = C.teal }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <rect x="4" y="8" width="28" height="20" rx="3" stroke={color} strokeWidth="2" opacity=".5" />
      <path d="M4 10l14 10 14-10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity=".6" />
    </svg>
  );
}


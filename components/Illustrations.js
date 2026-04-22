import { C } from "./constants";

export function DaycareIllustration() {
  return (
    <svg viewBox="0 0 400 280" fill="none" style={{ width: "100%", height: "100%" }}>
      <rect width="400" height="280" rx="20" fill={C.coralPale} />
      <circle cx="320" cy="60" r="32" fill={C.gold} opacity=".18" />
      <circle cx="320" cy="60" r="20" fill={C.gold} opacity=".3" />
      <rect x="60" y="110" width="140" height="120" rx="12" fill={C.white} stroke={C.coral} strokeWidth="2" />
      <rect x="90" y="130" width="30" height="30" rx="6" fill={C.coralLight} stroke={C.coral} strokeWidth="1.5" />
      <rect x="140" y="130" width="30" height="30" rx="6" fill={C.coralLight} stroke={C.coral} strokeWidth="1.5" />
      <rect x="110" y="185" width="40" height="45" rx="6" fill={C.coral} opacity=".3" />
      <path d="M50 112l80-45 80 45" stroke={C.coral} strokeWidth="2.5" fill={C.coralLight} />
      <rect x="240" y="160" width="8" height="70" rx="4" fill={C.sageDark} opacity=".5" />
      <circle cx="244" cy="140" r="30" fill={C.sage} opacity=".4" />
      <circle cx="232" cy="155" r="22" fill={C.sage} opacity=".35" />
      <circle cx="290" cy="210" r="10" fill={C.coral} opacity=".6" />
      <rect x="284" y="222" width="12" height="20" rx="6" fill={C.coral} opacity=".4" />
      <circle cx="320" cy="215" r="8" fill={C.teal} opacity=".5" />
      <rect x="315" y="225" width="10" height="16" rx="5" fill={C.teal} opacity=".35" />
      <circle cx="350" cy="212" r="9" fill={C.sage} opacity=".55" />
      <rect x="345" y="223" width="10" height="18" rx="5" fill={C.sage} opacity=".4" />
      <path d="M305 190c-3-5-10-5-10 1 0 4 10 10 10 10s10-6 10-10c0-6-7-6-10-1z" fill={C.coral} opacity=".35" />
      <ellipse cx="200" cy="250" rx="170" ry="12" fill={C.sage} opacity=".1" />
    </svg>
  );
}

export function RootsIllustration() {
  return (
    <svg viewBox="0 0 400 280" fill="none" style={{ width: "100%", height: "100%" }}>
      <rect width="400" height="280" rx="20" fill={C.tealPale} />
      <g transform="translate(300,55)">
        <path d="M0-25A25 25 0 100 25 18 18 0 110-25z" fill={C.gold} opacity=".3" />
        <polygon points="30,-8 32,-2 38,-2 33,2 35,8 30,5 25,8 27,2 22,-2 28,-2" fill={C.gold} opacity=".35" />
      </g>
      <g transform="translate(120,100)">
        <path d="M80 10Q40 0 0 20L0 120Q40 100 80 110z" fill={C.white} stroke={C.teal} strokeWidth="1.5" />
        <path d="M80 10Q120 0 160 20L160 120Q120 100 80 110z" fill={C.white} stroke={C.teal} strokeWidth="1.5" />
        <line x1="80" y1="10" x2="80" y2="110" stroke={C.teal} strokeWidth="1" opacity=".3" />
      </g>
      <g transform="translate(200,60)">
        <line x1="0" y1="42" x2="0" y2="10" stroke={C.sage} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M0 28c-6-10-18-8-16 0s10 10 16 0z" fill={C.sage} opacity=".6" />
        <path d="M0 16c6-10 18-7 15 1s-9 9-15-1z" fill={C.sage} opacity=".7" />
      </g>
      <circle cx="70" cy="200" r="12" fill={C.teal} opacity=".45" />
      <rect x="63" y="214" width="14" height="22" rx="7" fill={C.teal} opacity=".3" />
      <circle cx="340" cy="195" r="11" fill={C.coral} opacity=".45" />
      <rect x="334" y="208" width="12" height="20" rx="6" fill={C.coral} opacity=".3" />
      <path d="M50 260Q50 235 75 235Q100 235 100 260" stroke={C.teal} strokeWidth="1.5" fill="none" opacity=".15" />
      <path d="M300 260Q300 235 325 235Q350 235 350 260" stroke={C.teal} strokeWidth="1.5" fill="none" opacity=".15" />
    </svg>
  );
}

export function EnrichmentIllustration() {
  return (
    <svg viewBox="0 0 400 280" fill="none" style={{ width: "100%", height: "100%" }}>
      <rect width="400" height="280" rx="20" fill={C.sagePale} />
      <circle cx="330" cy="50" r="28" fill={C.gold} opacity=".2" />
      <g transform="translate(55,80)">
        <ellipse cx="40" cy="45" rx="42" ry="38" fill={C.white} stroke={C.sage} strokeWidth="1.5" />
        <circle cx="25" cy="30" r="8" fill={C.coral} opacity=".6" />
        <circle cx="50" cy="25" r="7" fill={C.teal} opacity=".5" />
        <circle cx="55" cy="50" r="7" fill={C.gold} opacity=".5" />
        <circle cx="30" cy="55" r="6" fill={C.sage} opacity=".6" />
      </g>
      <g transform="translate(250,130)">
        <circle cx="30" cy="30" r="26" fill={C.white} stroke={C.sage} strokeWidth="1.5" />
        <path d="M30 4L22 16 38 16z" fill={C.sage} opacity=".25" />
        <path d="M30 56L22 44 38 44z" fill={C.sage} opacity=".25" />
      </g>
      <g transform="translate(170,70)">
        <circle cx="10" cy="40" r="8" fill={C.teal} opacity=".3" />
        <line x1="18" y1="40" x2="18" y2="8" stroke={C.teal} strokeWidth="2.5" opacity=".4" />
        <path d="M18 8Q28 5 28 15" stroke={C.teal} strokeWidth="2.5" fill="none" opacity=".4" />
      </g>
      <circle cx="150" cy="195" r="11" fill={C.coral} opacity=".5" />
      <rect x="143" y="208" width="14" height="25" rx="7" fill={C.coral} opacity=".35" />
      <circle cx="210" cy="190" r="12" fill={C.sage} opacity=".5" />
      <rect x="203" y="204" width="14" height="28" rx="7" fill={C.sage} opacity=".35" />
      <circle cx="270" cy="198" r="10" fill={C.teal} opacity=".45" />
      <rect x="264" y="210" width="12" height="22" rx="6" fill={C.teal} opacity=".3" />
    </svg>
  );
}

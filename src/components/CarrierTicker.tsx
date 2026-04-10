"use client";

import { theme } from "@/lib/theme";

// ─── Carrier logo SVGs ────────────────────────────────────────────────────────
const logos = [
  {
    name: "Aetna",
    svg: (
      <svg height="28" viewBox="0 0 100 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="28" fontFamily="Georgia, serif" fontSize="30" fontWeight="700" fill="#94a3b8">
          Aetna
        </text>
      </svg>
    ),
  },
  {
    name: "Cigna",
    svg: (
      <svg height="28" viewBox="0 0 110 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="27" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="800" fill="#94a3b8" letterSpacing="1">
          CIGNA
        </text>
      </svg>
    ),
  },
  {
    name: "Humana",
    svg: (
      <svg height="28" viewBox="0 0 130 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="27" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="700" fill="#94a3b8">
          Humana
        </text>
      </svg>
    ),
  },
  {
    name: "BCBS",
    svg: (
      <svg height="32" viewBox="0 0 80 36" xmlns="http://www.w3.org/2000/svg">
        {/* Cross mark */}
        <rect x="15" y="2"  width="10" height="32" rx="2" fill="#94a3b8"/>
        <rect x="2"  y="13" width="36" height="10" rx="2" fill="#94a3b8"/>
        {/* Text */}
        <text x="44" y="27" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="800" fill="#94a3b8">
          BCBS
        </text>
      </svg>
    ),
  },
  {
    name: "UnitedHealth",
    svg: (
      <svg height="32" viewBox="0 0 160 36" xmlns="http://www.w3.org/2000/svg">
        {/* Shield mark */}
        <path d="M18 2C10 2 4 8 4 16v4c0 7 6 12 14 14 8-2 14-7 14-14v-4C32 8 26 2 18 2z" fill="#94a3b8"/>
        <path d="M13 12v8c0 3 2 5 5 5s5-2 5-5v-8h-3v8c0 1.5-0.8 2.5-2 2.5s-2-1-2-2.5v-8h-3z" fill="#fff"/>
        {/* Text */}
        <text x="40" y="26" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="700" fill="#94a3b8">
          UnitedHealth
        </text>
      </svg>
    ),
  },
  {
    name: "Ambetter",
    svg: (
      <svg height="28" viewBox="0 0 140 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="27" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="700" fill="#94a3b8">
          Ambetter
        </text>
      </svg>
    ),
  },
  {
    name: "Anthem",
    svg: (
      <svg height="28" viewBox="0 0 130 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="27" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="800" fill="#94a3b8" letterSpacing="0.5">
          ANTHEM
        </text>
      </svg>
    ),
  },
];

// Triple the array — ensures track is always 3x wider than viewport
// Animation moves exactly -33.333% so the loop is perfectly seamless
const tripled = [...logos, ...logos, ...logos];

const CarrierTicker = () => (
  <section
    style={{
      background: theme.colors.surface,
      borderTop: `1px solid ${theme.colors.border}`,
      borderBottom: `1px solid ${theme.colors.border}`,
      padding: "28px 0",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Label */}
    <p
      style={{
        textAlign: "center",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: theme.colors.textSubtle,
        marginBottom: 20,
      }}
    >
      Contract with the nation&apos;s leading carriers
    </p>

    {/* Left fade mask */}
    <div style={{
      position: "absolute", top: 32, left: 0,
      width: 100, height: 48,
      background: `linear-gradient(90deg, ${theme.colors.surface} 40%, transparent 100%)`,
      zIndex: 2, pointerEvents: "none",
    }}/>

    {/* Right fade mask */}
    <div style={{
      position: "absolute", top: 32, right: 0,
      width: 100, height: 48,
      background: `linear-gradient(270deg, ${theme.colors.surface} 40%, transparent 100%)`,
      zIndex: 2, pointerEvents: "none",
    }}/>

    {/* Scrolling track */}
    <div style={{ overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 72,
          // Move exactly 1/3 of the track width → seamless with tripled array
          animation: "ticker-third 28s linear infinite",
          width: "max-content",
        }}
      >
        {tripled.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            style={{
              flexShrink: 0,
              opacity: 0.5,
              transition: "opacity 0.25s ease",
              display: "flex",
              alignItems: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "0.5";
            }}
          >
            {logo.svg}
          </div>
        ))}
      </div>
    </div>

    {/* Keyframe: move exactly 33.333% (one full set of logos) */}
    <style>{`
      @keyframes ticker-third {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-33.333%); }
      }
    `}</style>
  </section>
);

export default CarrierTicker;
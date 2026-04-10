export const theme = {
  colors: {
    primary:      "#0ea5e9", // sky-500
    primaryDark:  "#0284c7", // sky-600
    primaryLight: "#38bdf8", // sky-400
    secondary:    "#e0f2fe", // sky-100
    accent:       "#7dd3fc", // sky-300
    accentGlow:   "rgba(14,165,233,0.18)",
    accentBorder: "rgba(14,165,233,0.22)",
    background:   "#f8fafc", // slate-50
    surface:      "#ffffff",
    surfaceAlt:   "#f1f5f9", // slate-100
    text:         "#0f172a", // slate-900
    textMuted:    "#64748b", // slate-500
    textSubtle:   "#94a3b8", // slate-400
    border:       "#e2e8f0", // slate-200
    borderDark:   "#cbd5e1", // slate-300
    white:        "#ffffff",
  },
  gradients: {
    primary:   "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)",
    primaryBtn: "linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%)",
    mesh:      "radial-gradient(ellipse at top left, rgba(14,165,233,0.12) 0%, transparent 65%)",
    mesh2:     "radial-gradient(ellipse at bottom right, rgba(56,189,248,0.10) 0%, transparent 65%)",
    cardHover: "linear-gradient(135deg, rgba(14,165,233,0.08), rgba(56,189,248,0.04))",
    ctaBg:     "linear-gradient(135deg, rgba(14,165,233,0.08), rgba(56,189,248,0.06))",
  },
  shadows: {
    sm:   "0 1px 3px rgba(15,23,42,0.06), 0 1px 2px rgba(15,23,42,0.04)",
    md:   "0 4px 16px rgba(15,23,42,0.08), 0 2px 4px rgba(15,23,42,0.04)",
    lg:   "0 12px 40px rgba(15,23,42,0.10), 0 4px 8px rgba(15,23,42,0.04)",
    glow: "0 8px 32px rgba(14,165,233,0.25)",
    card: "0 2px 8px rgba(15,23,42,0.06)",
  },
  radius: { sm: 6, md: 10, lg: 16, xl: 20, full: 9999 },
  font: {
    sans: "-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },
  spacing: { xs: 4, sm: 8, md: 16, lg: 24, xl: 40, "2xl": 64, "3xl": 96 },
  transition: { base: "all 0.2s ease", slow: "all 0.35s ease" },
} as const;
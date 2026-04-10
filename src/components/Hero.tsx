import { theme } from "@/lib/theme";
import { STATS } from "@/lib/data";
import Button from "@/components/ui/Button";

type StatPillProps = {
  value: string;
  label: string;
};

// ─── Animated background ──────────────────────────────────────────────────────
const GradientMesh = () => (
  <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
    {/* Top-left glow */}
    <div style={{
      position: "absolute", top: "-20%", left: "-10%",
      width: "60%", height: "60%",
              background: "radial-gradient(ellipse, rgba(45,90,142,0.35) 0%, transparent 70%)",
      animation: "drift1 9s ease-in-out infinite alternate",
    }}/>
    {/* Bottom-right glow */}
    <div style={{
      position: "absolute", bottom: "-10%", right: "-10%",
      width: "55%", height: "55%",
              background: "radial-gradient(ellipse, rgba(74,144,196,0.22) 0%, transparent 70%)",
      animation: "drift2 11s ease-in-out infinite alternate",
    }}/>
    {/* Dot grid */}
    <div style={{
      position: "absolute", inset: 0,
      backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.12) 1px, transparent 1px)",
      backgroundSize: "32px 32px",
    }}/>
  </div>
);

// ─── Stat pill — dark variant ─────────────────────────────────────────────────
const StatPill = ({ value, label }: StatPillProps) => (
  <div style={{
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: theme.radius.lg,
    padding: "14px 22px",
    textAlign: "center",
    minWidth: 115,
    backdropFilter: "blur(8px)",
  }}>
    <div style={{
      fontSize: 22,
      fontWeight: 800,
      color: "#ffffff",
      letterSpacing: "-0.02em",
    }}>
      {value}
    </div>
    <div style={{
      fontSize: 12,
      color: "rgba(255,255,255,0.5)",
      marginTop: 3,
      fontWeight: 500,
    }}>
      {label}
    </div>
  </div>
);

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => (
  <section style={{
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f2137 0%, #1e3a5f 50%, #1a3352 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    padding: "120px 24px 80px",
    textAlign: "center",
  }}>
    <GradientMesh />

    <div style={{ position: "relative", zIndex: 1, maxWidth: 760 }}>

      {/* Badge */}
      <div
        className="animate-fade-up d1"
        style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}
      >
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "rgba(14,165,233,0.12)",
          border: "1px solid rgba(14,165,233,0.28)",
          borderRadius: 9999,
          padding: "6px 16px",
          fontSize: 13,
          fontWeight: 500,
          color: "rgba(255,255,255,0.85)",
        }}>
          <span style={{
            width: 7, height: 7,
            borderRadius: "50%",
            background: theme.colors.primary,
            animation: "pulse-dot 2s ease infinite",
            display: "inline-block",
            flexShrink: 0,
          }}/>
          Trusted by 5,000+ independent agents nationwide
        </div>
      </div>

      {/* Headline */}
      <h1
        className="animate-fade-up d2"
        style={{
          fontSize: "clamp(38px, 5.5vw, 64px)",
          fontWeight: 800,
          lineHeight: 1.08,
          letterSpacing: "-0.03em",
          color: "#ffffff",                   // explicit white
          marginBottom: 22,
        }}
      >
        The Platform Built for
        <br />
        <span style={{
          background: "linear-gradient(135deg, #38bdf8 0%, #0ea5e9 50%, #7dd3fc 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          Insurance Agents
        </span>
        <br />
        Who Mean Business
      </h1>

      {/* Subtext */}
      <p
        className="animate-fade-up d3"
        style={{
          fontSize: "clamp(16px, 2vw, 18px)",
          lineHeight: 1.7,
          color: "rgba(255,255,255,0.58)",    // visible on dark
          maxWidth: 520,
          margin: "0 auto 40px",
        }}
      >
        Contract with 50+ top carriers, quote in seconds, enroll seamlessly —
        through one independent FMO that actually picks up the phone.
      </p>

      {/* CTAs */}
      <div
        className="animate-fade-up d4"
        style={{
          display: "flex", gap: 12,
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: 56,
        }}
      >
        <Button variant="primary" size="lg" icon="arrow">
          Get Contracted Free
        </Button>
        {/* Ghost button manually styled for dark bg */}
        <button
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(255,255,255,0.08)",
            color: "rgba(255,255,255,0.88)",
            border: "1.5px solid rgba(255,255,255,0.16)",
            borderRadius: 12,
            padding: "13px 28px",
            fontSize: 15,
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "rgba(255,255,255,0.14)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.28)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "rgba(255,255,255,0.08)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)";
          }}
        >
          See How It Works
        </button>
      </div>

      {/* Stats */}
      <div style={{
        display: "flex", gap: 14,
        justifyContent: "center",
        flexWrap: "wrap",
      }}>
        {STATS.map(s => <StatPill key={s.label} {...s} />)}
      </div>
    </div>
  </section>
);

export default Hero;
"use client";

import { useState, useEffect } from "react";
import { theme } from "@/lib/theme";
import { MYMFG_FEATURES } from "@/lib/data";
import Container from "@/components/layout/Container";
import Icon from "@/components/ui/III";
import Button from "@/components/ui/Button";

// ─── Step indicator (matches real MyMFG 7-step flow) ─────────────────────────
const STEPS = [
  "Start Quote",
  "Quote Questions",
  "Providers",
  "Provider Addresses",
  "Prescriptions",
  "Pharmacies",
  "Results",
];

const StepBar = ({ active }: { active: number }) => (
  <div style={{
    display: "flex", alignItems: "center", justifyContent: "center",
    gap: 0, padding: "14px 20px",
    borderBottom: `1px solid ${theme.colors.border}`,
    background: "#fff", overflowX: "auto",
  }}>
    {STEPS.map((s, i) => (
      <div key={s} style={{ display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <div style={{
            width: 28, height: 28, borderRadius: "50%",
            background: i === active ? "#1e3a5f" : i < active ? "#4a90c4" : "#e2e8f0",
            color: i <= active ? "#fff" : "#94a3b8",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 11, fontWeight: 800,
            transition: "all 0.4s ease",
            flexShrink: 0,
          }}>{i + 1}</div>
          <span style={{
            fontSize: 9, fontWeight: 600,
            color: i === active ? "#1e3a5f" : "#94a3b8",
            whiteSpace: "nowrap",
          }}>{s}</span>
        </div>
        {i < STEPS.length - 1 && (
          <div style={{
            width: 24, height: 1, marginBottom: 16,
            background: i < active ? "#4a90c4" : "#e2e8f0",
            transition: "background 0.4s ease",
          }}/>
        )}
      </div>
    ))}
  </div>
);

// ─── Screen 1: Dashboard (Sales Report) ──────────────────────────────────────
const DashboardScreen = () => (
  <div style={{ display: "flex", height: "100%" }}>
    {/* Sidebar */}
    <div style={{
      width: 130, background: "#fff",
      borderRight: `1px solid ${theme.colors.border}`,
      padding: "12px 0", flexShrink: 0,
    }}>
      <div style={{ padding: "8px 12px 12px", borderBottom: `1px solid ${theme.colors.border}`, marginBottom: 8 }}>
        <div style={{
          width: 28, height: 28, borderRadius: "50%",
          background: "linear-gradient(135deg, #1e3a5f, #2d5a8e)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 12, fontWeight: 800, color: "#fff", marginBottom: 4,
        }}>T</div>
        <div style={{ fontSize: 9, color: "#94a3b8" }}>Welcome Back,</div>
        <div style={{ fontSize: 10, fontWeight: 800, color: "#0f2137" }}>Sarah Johnson</div>
      </div>
      {["MyMFG Sales", "Commissions", "Lead Distributions", "Client Birthdays"].map((l, i) => (
        <div key={l} style={{
          padding: "6px 12px", fontSize: 10, fontWeight: i === 0 ? 700 : 500,
          color: i === 0 ? "#1e3a5f" : "#64748b",
          borderLeft: i === 0 ? "3px solid #1e3a5f" : "3px solid transparent",
        }}>{l}</div>
      ))}
    </div>

    {/* Main */}
    <div style={{ flex: 1, padding: "12px 14px", overflow: "hidden" }}>
      <div style={{ fontSize: 14, fontWeight: 800, color: "#0f2137", marginBottom: 10 }}>MyMFG Sales</div>

      {/* Stat tabs */}
      <div style={{ display: "flex", gap: 6, marginBottom: 10 }}>
        {[["Total Sales", "291", true], ["MA Sales", "180", false], ["ACA Sales", "111", false]].map(([l, v, a]) => (
          <div key={String(l)} style={{
            flex: 1, padding: "6px 8px",
            border: `1.5px solid ${a ? "#1e3a5f" : "#e2e8f0"}`,
            borderRadius: 6, background: a ? "#e8f0f8" : "#fff",
            display: "flex", alignItems: "center", gap: 6,
          }}>
            <div style={{
              width: 10, height: 10, borderRadius: "50%",
              border: `2px solid ${a ? "#1e3a5f" : "#cbd5e1"}`,
              background: a ? "#1e3a5f" : "transparent", flexShrink: 0,
            }}/>
            <div>
              <div style={{ fontSize: 8, color: "#64748b" }}>{l}</div>
              <div style={{ fontSize: 14, fontWeight: 800, color: "#0f2137" }}>{v}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Chart + Rankings */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        <div style={{ background: "#fff", border: `1px solid ${theme.colors.border}`, borderRadius: 8, padding: 10 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: "#0f2137", marginBottom: 6 }}>Sales Report</div>
          <div style={{ display: "flex", gap: 3, alignItems: "flex-end", height: 60 }}>
            {[
              { ma: 46, aca: 20, label: "Jan" },
              { ma: 78, aca: 26, label: "Feb" },
              { ma: 80, aca: 30, label: "Mar" },
              { ma: 10, aca: 8,  label: "Apr" },
            ].map(({ ma, aca, label }) => (
              <div key={label} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", height: 52, gap: 1 }}>
                  <div style={{ width: "100%", height: `${(aca / 120) * 52}px`, background: "#5cc8a0", borderRadius: "2px 2px 0 0", minHeight: 2 }}/>
                  <div style={{ width: "100%", height: `${(ma / 120) * 52}px`,  background: "#6096e8", borderRadius: "2px 2px 0 0", minHeight: 2 }}/>
                </div>
                <span style={{ fontSize: 7, color: "#94a3b8", marginTop: 2 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: "#fff", border: `1px solid ${theme.colors.border}`, borderRadius: 8, padding: 10, overflow: "hidden" }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: "#0f2137", marginBottom: 6 }}>Sales Rankings</div>
          <div style={{ background: "#1e3a5f", color: "#fff", fontSize: 8, fontWeight: 700, padding: "4px 6px", borderRadius: "4px 4px 0 0", display: "grid", gridTemplateColumns: "1fr 2fr 1fr" }}>
            <span>Rank</span><span>Name</span><span style={{ textAlign: "right" }}>2026</span>
          </div>
          {[["1", "Sarah J", "288"], ["2", "Jak", "2"], ["3", "Charl", "1"]].map(([r, n, v], i) => (
            <div key={r} style={{
              display: "grid", gridTemplateColumns: "1fr 2fr 1fr",
              padding: "4px 6px", fontSize: 8,
              background: i % 2 === 0 ? "#f0f4f8" : "#fff",
              borderBottom: `1px solid ${theme.colors.border}`,
            }}>
              <span style={{ fontWeight: 700 }}>{r}</span>
              <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{n}</span>
              <span style={{ textAlign: "right", fontWeight: 700 }}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// ─── Screen 2: Start a New Quote ──────────────────────────────────────────────
const StartQuoteScreen = () => (
  <div style={{ padding: "20px 24px", background: "#f0f4f8", height: "100%", overflowY: "auto" }}>
    <div style={{ maxWidth: 480, margin: "0 auto" }}>
      <h3 style={{ fontSize: 16, fontWeight: 800, color: "#0f2137", textAlign: "center", marginBottom: 16 }}>
        Start a New Quote
      </h3>
      <div style={{ background: "#fff", borderRadius: 10, padding: 20, boxShadow: "0 2px 8px rgba(15,33,55,0.07)" }}>
        <div style={{ marginBottom: 14 }}>
          <label style={{ fontSize: 11, fontWeight: 600, color: "#4a6080", display: "block", marginBottom: 6 }}>Select Existing Client:</label>
          <div style={{
            border: `1px solid ${theme.colors.border}`, borderRadius: 6,
            padding: "8px 12px", fontSize: 12, color: "#0f2137",
            background: "#fff", display: "flex", justifyContent: "space-between",
          }}>
            <span>Joe j.heroo Smith Sr</span>
            <span style={{ color: "#94a3b8" }}>✕ ▾</span>
          </div>
        </div>

        <div style={{ marginBottom: 14 }}>
          <label style={{ fontSize: 11, fontWeight: 600, color: "#4a6080", display: "block", marginBottom: 8 }}>Choose one or more Products</label>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
            {[
              { l: "MAPD*", checked: true }, { l: "MA (Health Only)*", checked: true },
              { l: "PDP (With Original Medicare)", checked: false },
              { l: "MedSupp", checked: false }, { l: "ACA/Health", checked: false },
              { l: "Hospital Indemnity", checked: false },
            ].map(({ l, checked }) => (
              <div key={l} style={{
                border: `1.5px solid ${checked ? "#1e3a5f" : "#e2e8f0"}`,
                borderRadius: 5, padding: "6px 8px", fontSize: 9, fontWeight: 600,
                color: checked ? "#1e3a5f" : "#64748b",
                background: checked ? "#e8f0f8" : "#fff",
                display: "flex", alignItems: "center", gap: 5,
              }}>
                <div style={{
                  width: 10, height: 10, borderRadius: 2, flexShrink: 0,
                  background: checked ? "#1e3a5f" : "transparent",
                  border: `1.5px solid ${checked ? "#1e3a5f" : "#cbd5e1"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {checked && <span style={{ color: "#fff", fontSize: 7, lineHeight: 1 }}>✓</span>}
                </div>
                {l}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={{ fontSize: 11, fontWeight: 600, color: "#4a6080", display: "block", marginBottom: 6 }}>Effective Date</label>
          <div style={{
            border: `1px solid ${theme.colors.border}`, borderRadius: 6,
            padding: "7px 12px", fontSize: 12, color: "#0f2137",
            display: "inline-flex", alignItems: "center", gap: 8,
          }}>
            05/01/2026 <span style={{ color: "#94a3b8" }}>📅</span>
          </div>
        </div>

        <div style={{
          background: "#1e3a5f", color: "#fff", borderRadius: 6,
          padding: "10px", textAlign: "center", fontSize: 13, fontWeight: 700,
        }}>Start Quote</div>
      </div>
    </div>
  </div>
);

// ─── Screen 3: View Quotes Results ───────────────────────────────────────────
const ViewQuotesScreen = () => (
  <div style={{ padding: "14px 16px", background: "#f0f4f8", height: "100%", overflowY: "auto" }}>
    <div style={{ fontSize: 14, fontWeight: 800, color: "#0f2137", marginBottom: 10 }}>View Quotes</div>
    <div style={{ display: "flex", gap: 6, marginBottom: 10 }}>
      {["MAPD Plans", "MA Plans"].map((t, i) => (
        <div key={t} style={{
          padding: "5px 12px", borderRadius: 5, fontSize: 10, fontWeight: 600,
          background: i === 1 ? "#fff" : "#e8f0f8",
          border: `1px solid ${i === 1 ? theme.colors.border : "#1e3a5f"}`,
          color: i === 1 ? "#64748b" : "#1e3a5f",
        }}>{t}</div>
      ))}
    </div>

    <div style={{ background: "#fff", borderRadius: 8, overflow: "hidden", border: `1px solid ${theme.colors.border}` }}>
      {/* Header */}
      <div style={{
        display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
        background: "#1e3a5f", color: "#fff", padding: "8px 12px", fontSize: 9, fontWeight: 700, gap: 8,
      }}>
        <span>Plan</span><span>Monthly Premium</span><span>Deductibles</span><span>MOOP</span><span>Star Rating</span>
      </div>

      {[
        { carrier: "HealthSpring", plan: "Courage (HMO) H9725-005", premium: "$0.00", ded: "$0.00/$0.00", moop: "$6,750", stars: "4.0" },
        { carrier: "Aetna",        plan: "Medicare Eagle Giveback (PPO) H5521-241", premium: "$0.00", ded: "$0.00/$0.00", moop: "$6,750", stars: "4.5" },
        { carrier: "UnitedHealth", plan: "AARP MA Patriot No Rx NC-MA02", premium: "$0.00", ded: "$0.00/$0.00", moop: "$7,900", stars: "4.0" },
        { carrier: "Humana",       plan: "HumanaChoice R0110-004 (Regional PPO)", premium: "$0.00", ded: "$0.00/$0.00", moop: "$7,000", stars: "3.5" },
      ].map((r, i) => (
        <div key={r.carrier} style={{
          display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
          padding: "8px 12px", gap: 8, alignItems: "center",
          background: i % 2 === 0 ? "#fff" : "#f8fafc",
          borderBottom: `1px solid ${theme.colors.border}`,
        }}>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, color: "#1e3a5f" }}>{r.carrier}</div>
            <div style={{ fontSize: 8, color: "#94a3b8" }}>{r.plan}</div>
          </div>
          <span style={{ fontSize: 10, color: "#0f2137" }}>{r.premium}</span>
          <span style={{ fontSize: 10, color: "#0f2137" }}>{r.ded}</span>
          <span style={{ fontSize: 10, color: "#0f2137" }}>{r.moop}</span>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 10 }}>{r.stars}★</span>
            <div style={{
              background: "#1e3a5f", color: "#fff",
              fontSize: 9, fontWeight: 700, padding: "4px 8px", borderRadius: 4,
            }}>Enroll</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ─── Animated demo wrapper ────────────────────────────────────────────────────
const DEMO_SCREENS = [
  { step: 0, label: "Sales Dashboard",   component: <DashboardScreen /> },
  { step: 0, label: "Start Quote",       component: <StartQuoteScreen /> },
  { step: 1, label: "Quote Questions",   component: <StartQuoteScreen /> },
  { step: 6, label: "View Results",      component: <ViewQuotesScreen /> },
];

const AnimatedDemo = () => {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent(p => (p + 1) % DEMO_SCREENS.length);
        setFading(false);
      }, 400);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const screen = DEMO_SCREENS[current];

  return (
    <div style={{
      border: `1px solid ${theme.colors.border}`,
      borderRadius: theme.radius.xl,
      overflow: "hidden",
      boxShadow: theme.shadows.lg,
      background: "#f0f4f8",
      position: "relative",
    }}>
      {/* Browser chrome */}
      <div style={{
        background: "#1e3a5f", padding: "10px 14px",
        display: "flex", alignItems: "center", gap: 7,
      }}>
        {["#f87171", "#fbbf24", "#34d399"].map(c => (
          <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c, opacity: 0.8 }}/>
        ))}
        <div style={{
          flex: 1, background: "rgba(255,255,255,0.12)", borderRadius: 5,
          padding: "3px 10px", fontSize: 10, color: "rgba(255,255,255,0.6)",
          marginLeft: 6, fontFamily: theme.font.mono,
        }}>
          mymfg.app/dashboard
        </div>
        {/* Screen indicators */}
        <div style={{ display: "flex", gap: 4 }}>
          {DEMO_SCREENS.map((_, i) => (
            <div key={i} onClick={() => setCurrent(i)} style={{
              width: i === current ? 16 : 6, height: 6, borderRadius: 3,
              background: i === current ? "#fff" : "rgba(255,255,255,0.3)",
              transition: "all 0.3s ease", cursor: "pointer",
            }}/>
          ))}
        </div>
      </div>

      {/* Step bar — only show for quote flow screens */}
      {current > 0 && <StepBar active={screen.step} />}

      {/* Screen content */}
      <div style={{
        height: 320, overflow: "hidden",
        opacity: fading ? 0 : 1,
        transform: fading ? "translateY(6px)" : "translateY(0)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
      }}>
        {screen.component}
      </div>

      {/* Label */}
      <div style={{
        position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)",
        background: "rgba(15,33,55,0.75)", backdropFilter: "blur(8px)",
        color: "#fff", fontSize: 11, fontWeight: 600,
        padding: "4px 14px", borderRadius: 100,
      }}>
        {screen.label}
      </div>
    </div>
  );
};

// ─── Check list item ──────────────────────────────────────────────────────────
const CheckItem = ({ text }: { text: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
    <div style={{
      width: 20, height: 20, borderRadius: 6, flexShrink: 0,
      background: theme.colors.secondary,
      border: `1px solid ${theme.colors.accentBorder}`,
      display: "flex", alignItems: "center", justifyContent: "center",
      color: theme.colors.primary,
    }}>
      <Icon name="check" size={11} strokeWidth={2.5} />
    </div>
    <span style={{ fontSize: 14, color: theme.colors.textMuted, fontWeight: 500 }}>{text}</span>
  </div>
);

// ─── Section ──────────────────────────────────────────────────────────────────
const ProductPreview = () => (
  <section className="section" style={{ background: theme.colors.surface }}>
    <Container>
      <div className="grid-2">
        {/* Copy */}
        <div>
          <p className="label" style={{ marginBottom: 12 }}>MyMFG Suite</p>
          <h2 className="heading-lg" style={{ marginBottom: 18 }}>
            One platform.<br />Every enrollment.
          </h2>
          <p className="body-md" style={{ marginBottom: 28 }}>
            MyMFG is your agent command center — quote Medicare, ACA, life, and
            ancillary products from a single login, with real-time commission
            tracking and E&O insurance built in.
          </p>
          {MYMFG_FEATURES.map(f => <CheckItem key={f} text={f} />)}
          <div style={{ marginTop: 28 }}>
            <Button variant="primary" size="lg" icon="arrow">Explore MyMFG</Button>
          </div>
        </div>

        {/* Animated demo */}
        <div style={{ position: "relative" }}>
          <AnimatedDemo />
          <div style={{
            position: "absolute", bottom: -20, left: "50%", transform: "translateX(-50%)",
            width: "60%", height: 36,
            background: "rgba(30,58,95,0.15)",
            filter: "blur(20px)", borderRadius: "50%", pointerEvents: "none",
          }}/>
        </div>
      </div>
    </Container>
  </section>
);

export default ProductPreview;
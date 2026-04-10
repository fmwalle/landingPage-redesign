import { theme } from "@/lib/theme";
import { FOOTER_COLS } from "@/lib/data";
import Container from "@/components/layout/Container";
import Icon from "@/components/ui/III";

const Footer = () => (
  <footer
    style={{
      background: theme.colors.text,
      borderTop: `1px solid rgba(255,255,255,0.06)`,
      padding: "56px 24px 28px",
    }}
  >
    <Container>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: 36,
          marginBottom: 44,
        }}
      >
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 7,
                background: theme.gradients.primaryBtn,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon name="shield" size={14} color="#fff" />
            </div>
            <span style={{ fontWeight: 800, fontSize: 14, color: "#fff" }}>
              Messer Financial Group
            </span>
          </div>

          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: 240 }}>
            Full-service insurance FMO helping independent agents grow their
            business across Medicare, ACA, life, and more.
          </p>

          <div style={{ display: "flex", gap: 8, marginTop: 18 }}>
            {["FB", "LI", "YT", "IG", "TT"].map((s) => (
              <div
                key={s}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 7,
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 10,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.45)",
                  cursor: "pointer",
                  transition: theme.transition.base,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.14)";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.45)";
                }}
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        {FOOTER_COLS.map((col) => (
          <div key={col.title}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              {col.title}
            </p>
            {col.links.map((link) => (
              <div key={link} style={{ marginBottom: 9 }}>
                <a
                  href="#"
                  style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", transition: theme.transition.base }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                >
                  {link}
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>

      <hr style={{ borderColor: "rgba(255,255,255,0.07)", marginBottom: 22 }} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>
          © 2025 Messer Financial Group, Inc. · Charlotte, NC · 866-568-9649
        </span>
        <div style={{ display: "flex", gap: 18 }}>
          {["Terms & Privacy", "Sitemap"].map((l) => (
            <a
              key={l}
              href="#"
              style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
import { theme } from "@/lib/theme";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

const CTABanner = () => (
  <section className="section" style={{ background: theme.colors.background }}>
    <Container>
      <div
        style={{
          background: theme.gradients.ctaBg,
          border: `1px solid ${theme.colors.accentBorder}`,
          borderRadius: theme.radius.xl + 4,
          padding: "64px 40px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          boxShadow: `inset 0 1px 0 rgba(255,255,255,0.8), ${theme.shadows.md}`,
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "-40%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "60%",
            height: "120%",
            background: `radial-gradient(ellipse, ${theme.colors.accentGlow}, transparent 70%)`,
            pointerEvents: "none",
          }}
        />

        <h2 className="heading-lg" style={{ marginBottom: 14 }}>
        Ready to grow your book of business?
        </h2>
        <p className="body-lg" style={{ maxWidth: 460, margin: "0 auto 32px" }}>
          Join thousands of independent agents who have grown their book with
          Messer. Contract for free — no fees, no pressure.
        </p>

        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="primary" size="lg">Get Contracted Today</Button>
          <Button variant="ghost" size="lg">Call 866-568-9649</Button>
        </div>
      </div>
    </Container>
  </section>
);

export default CTABanner;
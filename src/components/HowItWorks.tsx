import { theme } from "@/lib/theme";
import { STEPS } from "@/lib/data";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";

type StepProps = {
  n: string;
  title: string;
  desc: string;
  isLast: boolean;
};

const Step = ({ n, title, desc, isLast }: StepProps) => (
  <div style={{ position: "relative", textAlign: "center", padding: "0 12px" }}>
    {!isLast && (
      <div
        style={{
          position: "absolute",
          top: 27,
          left: "calc(50% + 42px)",
          width: "calc(100% - 60px)",
          height: 1,
          background: `linear-gradient(90deg, ${theme.colors.accentBorder}, transparent)`,
        }}
      />
    )}
    <div
      style={{
        width: 54,
        height: 54,
        borderRadius: 14,
        background: theme.colors.secondary,
        border: `1.5px solid ${theme.colors.accentBorder}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto 20px",
        fontSize: 15,
        fontWeight: 800,
        color: theme.colors.primary,
        fontFamily: theme.font.mono,
      }}
    >
      {n}
    </div>
    <h3 style={{ fontSize: 16, fontWeight: 700, color: theme.colors.text, marginBottom: 10 }}>
      {title}
    </h3>
    <p className="body-sm" style={{ lineHeight: 1.7 }}>
      {desc}
    </p>
  </div>
);

const HowItWorks = () => (
  <section className="section" style={{ background: theme.colors.surfaceAlt }}>
    <Container>
      <SectionHeader label="Getting Started" title="Up and running in three steps" />
      <div className="grid-3">
        {STEPS.map((s, i) => (
          <Step key={s.n} {...s} isLast={i === STEPS.length - 1} />
        ))}
      </div>
    </Container>
  </section>
);

export default HowItWorks;
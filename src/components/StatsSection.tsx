import { theme } from "@/lib/theme";
import { COMPANY_STATS } from "@/lib/data";
import Container from "@/components/layout/Container";

type StatCardProps = {
  value: string;
  label: string;
};

const StatCard = ({ value, label }: StatCardProps) => (
  <div style={{
    textAlign: "center",
    padding: "32px 24px",
    background: theme.colors.surface,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.radius.lg,
    boxShadow: theme.shadows.sm,
  }}>
    <div style={{
      fontSize: 36,
      fontWeight: 800,
      color: theme.colors.primary,
      letterSpacing: "-0.03em",
      marginBottom: 8,
    }}>
      {value}
    </div>
    <div className="body-sm">{label}</div>
  </div>
);

const StatsSection = () => (
  <section className="section" style={{ background: theme.colors.surfaceAlt }}>
    <Container>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <p className="label" style={{ marginBottom: 12 }}>
          By the numbers
        </p>
        <h2 className="heading-lg">
          Trusted by agents across America
        </h2>
      </div>

      {/* Stats grid */}
      <div className="grid-auto">
        {COMPANY_STATS.map((s) => (
          <StatCard key={s.label} value={s.value} label={s.label} />
        ))}
      </div>
    </Container>
  </section>
);

export default StatsSection;
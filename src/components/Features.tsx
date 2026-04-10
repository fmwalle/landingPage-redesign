import { theme } from "@/lib/theme";
import { FEATURES } from "@/lib/data";
import Card from "@/components/ui/Card";
import Icon, { IconName } from "@/components/ui/III";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";

type FeatureCardProps = {
  icon: IconName;
  title: string;
  desc: string;
};

const FeatureCard = ({ icon, title, desc }: FeatureCardProps) => (
  <Card>
    <div
      style={{
        width: 42,
        height: 42,
        borderRadius: 10,
        background: theme.colors.secondary,
        border: `1px solid ${theme.colors.accentBorder}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 18,
        color: theme.colors.primary,
      }}
    >
      <Icon name={icon} size={19} />
    </div>
    <h3
      style={{
        fontSize: 15,
        fontWeight: 700,
        color: theme.colors.text,
        marginBottom: 8,
        letterSpacing: "-0.01em",
      }}
    >
      {title}
    </h3>
    <p className="body-sm" style={{ lineHeight: 1.7, color: theme.colors.textMuted }}>
      {desc}
    </p>
  </Card>
);

const Features = () => (
  <section className="section" style={{ background: theme.colors.surfaceAlt }}>
    <Container>
      <SectionHeader
        label="Platform Features"
        title="Everything you need to grow<br/>your book of business"
        subtitle="One FMO with the infrastructure, tools, and support that independent agents actually need."
      />
      <div className="grid-auto">
        {FEATURES.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </Container>
  </section>
);

export default Features;
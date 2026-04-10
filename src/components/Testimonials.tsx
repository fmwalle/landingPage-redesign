import { theme } from "@/lib/theme";
import { TESTIMONIALS } from "@/lib/data";
import Card from "@/components/ui/Card";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";

type TestimonialCardProps = {
  name: string;
  quote: string;
};

const TestimonialCard = ({ name, quote }: TestimonialCardProps) => (
  <Card>
    {/* Stars */}
    <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>
      {[...Array(5)].map((_, i) => (
        <span key={i} style={{ color: "#f59e0b", fontSize: 14 }}>
          ★
        </span>
      ))}
    </div>

    <p
      className="body-sm"
      style={{
        lineHeight: 1.75,
        color: theme.colors.textMuted,
        marginBottom: 20,
        fontStyle: "italic",
      }}
    >
      &ldquo;{quote}&rdquo;
    </p>

    {/* Author */}
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          flexShrink: 0,
          background: theme.gradients.primaryBtn,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
          fontWeight: 800,
          color: "#fff",
        }}
      >
        {name[0]}
      </div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, color: theme.colors.text }}>
          {name}
        </div>
        <div className="body-sm">Independent Agent</div>
      </div>
    </div>
  </Card>
);

const Testimonials = () => (
  <section className="section" style={{ background: theme.colors.surfaceAlt }}>
    <Container>
      <SectionHeader
        label="Agent Testimonials"
        title="Agents don't leave Messer."
      />
      <div className="grid-auto">
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </Container>
  </section>
);

export default Testimonials;
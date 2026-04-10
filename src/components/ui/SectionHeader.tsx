type SectionHeaderProps = {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left" | "right";
};

const SectionHeader = ({
  label,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) => (
  <div style={{ textAlign: align, marginBottom: 56 }}>
    {label && (
      <p className="label" style={{ marginBottom: 12 }}>
        {label}
      </p>
    )}
    <h2
      className="heading-lg"
      style={{ marginBottom: subtitle ? 14 : 0 }}
      dangerouslySetInnerHTML={{ __html: title }}
    />
    {subtitle && (
      <p className="body-lg" style={{ maxWidth: 500, margin: "0 auto" }}>
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeader;
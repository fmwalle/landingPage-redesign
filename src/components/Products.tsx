"use client";

import { useState } from "react";
import { theme } from "@/lib/theme";
import { PRODUCTS } from "@/lib/data";
import Icon from "@/components/ui/III";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";

type ProductCardProps = {
  label: string;
  accent: string;
  desc: string;
};

const ProductCard = ({ label, accent, desc }: ProductCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: theme.colors.surface,
        border: `1px solid ${hovered ? accent + "44" : theme.colors.border}`,
        borderRadius: theme.radius.lg,
        padding: 24,
        cursor: "pointer",
        transition: theme.transition.base,
        position: "relative",
        overflow: "hidden",
        boxShadow: hovered ? theme.shadows.md : theme.shadows.sm,
        transform: hovered ? "translateY(-3px)" : "none",
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, ${accent}, transparent)`,
        }}
      />

      {/* Label badge */}
      <div
        style={{
          display: "inline-flex",
          padding: "5px 11px",
          borderRadius: 7,
          background: `${accent}14`,
          border: `1px solid ${accent}28`,
          fontSize: 12,
          fontWeight: 700,
          color: accent,
          marginBottom: 14,
        }}
      >
        {label}
      </div>

      <p className="body-sm" style={{ lineHeight: 1.7, marginBottom: 16 }}>
        {desc}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          fontSize: 13,
          fontWeight: 600,
          color: accent,
        }}
      >
        Learn more <Icon name="arrow" size={13} color={accent} />
      </div>
    </div>
  );
};

const Products = () => (
  <section className="section" style={{ background: theme.colors.background }}>
    <Container>
      <SectionHeader
        label="Product Lines"
        title="Every market. Every client."
        subtitle="Whether you specialize or generalize, Messer gives you the carrier access and support to serve anyone."
      />
      <div className="grid-auto">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.label} {...p} />
        ))}
      </div>
    </Container>
  </section>
);

export default Products;
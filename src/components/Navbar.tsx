"use client";

import { useState } from "react";
import { theme } from "@/lib/theme";
import { NAV_LINKS } from "@/lib/data";
import Icon from "./ui/III";
import Button from "@/components/ui/Button";

type NavbarProps = {
  scrolled: boolean;
};

const Navbar = ({ scrolled }: NavbarProps) => {
  const [, setMobileOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 64,
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(9,9,11,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: theme.transition.slow,
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: theme.gradients.primaryBtn,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: theme.shadows.glow,
            flexShrink: 0,
          }}
        >
          <Icon name="shield" size={16} color="#fff" />
        </div>
        <span
          style={{
            fontWeight: 800,
            fontSize: 15,
            color: "#fff",
            letterSpacing: "-0.025em",
          }}
        >
          Messer{" "}
          <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>
            Financial
          </span>
        </span>
      </div>

      {/* Desktop nav links */}
      <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href="#"
            style={{
              padding: "7px 14px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              color: "rgba(255,255,255,0.55)",
              textDecoration: "none",
              transition: theme.transition.base,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.background = "rgba(255,255,255,0.07)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.55)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            {link}
          </a>
        ))}
      </div>

      {/* Actions */}
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <a
          href="#"
          style={{
            padding: "7px 14px",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 500,
            color: "rgba(255,255,255,0.6)",
            textDecoration: "none",
            transition: theme.transition.base,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "rgba(255,255,255,0.6)")
          }
        >
          Agent Login
        </a>
        <Button variant="primary" icon="arrow">
          Get Contracted
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
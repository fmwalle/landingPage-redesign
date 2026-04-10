import React from "react";
import Icon, { IconName } from "@/components/ui/III";

type ButtonVariant = "primary" | "ghost" | "outline";
type ButtonSize = "md" | "lg";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: IconName;
  onClick?: () => void;
  style?: React.CSSProperties;
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  onClick,
  style = {},
}: ButtonProps) => {
  const cls = `btn btn-${variant}${size === "lg" ? " btn-lg" : ""}`;

  return (
    <button className={cls} onClick={onClick} style={style}>
      {children}
      {icon && <Icon name={icon} size={15} />}
    </button>
  );
};

export default Button;
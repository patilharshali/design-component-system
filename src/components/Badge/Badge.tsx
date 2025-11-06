import React from "react";

export type BadgeProps = {
  label: string;
  color?: "primary" | "secondary" | "success" | "danger";
};

export const Badge: React.FC<BadgeProps> = ({ label, color = "primary" }) => {
  const colors: Record<string, string> = {
    primary: "#007bff",
    secondary: "#6c757d",
    success: "#28a745",
    danger: "#dc3545",
  };
  return (
    <span
      style={{
        backgroundColor: colors[color],
        color: "#fff",
        padding: "2px 8px",
        borderRadius: 12,
        fontSize: 12,
      }}
    >
      {label}
    </span>
  );
};

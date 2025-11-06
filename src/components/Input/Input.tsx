import React from "react";

export type InputProps = {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
};

export const Input: React.FC<InputProps> = ({ value, placeholder, onChange, disabled }) => (
  <input
    value={value}
    placeholder={placeholder}
    disabled={disabled}
    onChange={(e) => onChange?.(e.target.value)}
    style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc", width: 200 }}
  />
);

import React from "react";

export type Option = {
  /** Value of the option */
  value: string | number;
  /** Label displayed in the dropdown */
  label: string;
};

export type SelectProps = {
  /** Options to show in the dropdown */
  options: Option[];
  /** Selected value */
  value?: string | number;
  /** Change handler */
  onChange?: (value: string | number) => void;
  /** Optional placeholder */
  placeholder?: string;
  /** Disable the select */
  disabled?: boolean;
};

/**
 * Select component
 *
 * Example usage:
 * ```tsx
 * <Select
 *   options={[
 *     { value: 'apple', label: 'Apple' },
 *     { value: 'orange', label: 'Orange' }
 *   ]}
 *   value="apple"
 *   onChange={v => console.log(v)}
 * />
 * ```
 */
export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select...",
  disabled = false,
}) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      disabled={disabled}
      style={{
        padding: "8px 12px",
        borderRadius: 4,
        border: "1px solid #ccc",
        minWidth: 160,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

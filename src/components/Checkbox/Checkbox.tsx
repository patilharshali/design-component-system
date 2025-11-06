import React from 'react';

export type CheckboxProps = {
  checked?: boolean;
  label: string;
  onChange?: (checked: boolean) => void;
};

export const Checkbox: React.FC<CheckboxProps> = ({ checked, label, onChange }) => (
  <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <input type="checkbox" checked={checked} onChange={(e) => onChange?.(e.target.checked)} />
    {label}
  </label>
);

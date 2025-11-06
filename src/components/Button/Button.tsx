import React from 'react';
import { Icon } from '../Icon/Icon';
import type { IconProps } from '../Icon/Icon'

export type ButtonProps = {
  label?: string;
  icon?: IconProps; // optional icon
  iconSize?: IconProps;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ label, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        padding: 8,
        borderRadius: 4,
        border: '1px solid #ccc',
      }}
    >
      {icon && <Icon {...icon} />}
      {label && <span>{label}</span>}
    </button>
  );
};

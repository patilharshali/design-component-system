import React from 'react';
import { FaPlus, FaMinus, FaCodeBranch } from 'react-icons/fa';

export type IconName = 'plus' | 'minus' | 'diff';

export type IconProps = {
  name: IconName;
  size?: number; // allow different sizes
  color?: string;
};

export const iconsMap = {
  plus: FaPlus,
  minus: FaMinus,
  diff: FaCodeBranch,
};

export const Icon: React.FC<IconProps> = ({ name, size = 16, color = 'black' }) => {
  const Component = iconsMap[name];
  return <Component size={size} color={color} />;
};

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import type { InputProps } from './Input';

const meta: Meta<InputProps> = {
  title: 'Components/Input',
  component: Input,
  tags: ["autodocs"], // enables automatic ArgsTable & docs
};

export default meta;

type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: { placeholder: 'Enter text' },
};

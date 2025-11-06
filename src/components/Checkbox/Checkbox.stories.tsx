import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import type { CheckboxProps } from './Checkbox'

const meta: Meta<CheckboxProps> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ["autodocs"], // enables automatic ArgsTable & docs
};

export default meta;

type Story = StoryObj<CheckboxProps>;

export const Default: Story = {
  args: { label: 'Accept Terms', checked: false },
};

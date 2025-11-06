import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import type { IconName } from './Icon';


const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const AllIcons: Story = {
  render: () => {
    const icons: IconName[] = ['plus', 'minus', 'diff'];
    const sizes = [12, 16, 24, 32];
    return (
      <div style={{ display: 'flex', gap: 20 }}>
        {icons.map((name) =>
          sizes.map((size) => (
            <div key={`${name}-${size}`} style={{ textAlign: 'center' }}>
              <Icon name={name} size={size} />
              <div>{name}</div>
              <div>{size}px</div>
            </div>
          ))
        )}
      </div>
    );
  },
};

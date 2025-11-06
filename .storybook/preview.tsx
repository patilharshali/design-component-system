import type { Preview } from '@storybook/react';
import React from 'react';
import { DESIGN_SYSTEM_VERSION } from '../src/version';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { expanded: true },
    docs: {
      description: {
        component: `Design System v${DESIGN_SYSTEM_VERSION}`,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
        <div style={{ fontSize: 12, color: '#888', marginBottom: 8 }}>
          Design System Version: {DESIGN_SYSTEM_VERSION}
        </div>
        <Story />
      </div>
    ),
  ],
};

export default preview; // ✅ must export the object, not a boolean


import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Button } from "./Button";
import type { ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  tags: ["autodocs"], // enables automatic ArgsTable & docs
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const IconOnly = {
  args: {
    icon: { name: 'plus', size: 20 },
  },
};

export const LabelAndIcon = {
  args: {
    label: 'Add Item',
    icon: { name: 'plus', size: 16 },
  },
};

// Live editor story using react-live
export const LivePlayground = () => {
  const codeExample = `<Button label="Edit me live!" variant="primary" />`;

  return (
    <LiveProvider code={codeExample} scope={{ Button }}>
      <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 8, width: 350, background: "#f9f9f9" }}>
        <h4 style={{ marginBottom: 8 }}>🧑‍💻 Live JSX Editor</h4>
        <LiveEditor style={{ background: "#272822", color: "#fff", fontSize: 14 }} />
        <LiveError style={{ color: "red", marginTop: 4 }} />
        <div style={{ marginTop: 12 }}>
          <LivePreview />
        </div>
      </div>
    </LiveProvider>
  );
};

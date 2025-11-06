import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

// Basic story with controls
export const Default: Story = {
  args: {
    options: [
      { value: "apple", label: "Apple" },
      { value: "orange", label: "Orange" },
      { value: "banana", label: "Banana" },
    ],
    value: "apple",
  },
  argTypes: {
    onChange: { action: "changed" },
  },
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
};

// Live editable story
export const LivePlayground = () => {
  const codeExample = `
<Select
  options={[
    { value: 'apple', label: 'Apple' },
    { value: 'orange', label: 'Orange' },
    { value: 'banana', label: 'Banana' }
  ]}
  value="apple"
  onChange={v => console.log(v)}
/>
`;

  return (
    <LiveProvider code={codeExample} scope={{ Select }}>
      <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 8, width: 350 }}>
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

import React from "react";
import type { Meta } from "@storybook/react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Button } from "./Button";

export default {
  title: "Components/Button/LiveEditor",
  parameters: {
    layout: "centered",
  },
} as Meta;

const codeExample = `<Button label="Edit me live!" variant="primary" />`;

export const LivePlayground = () => (
  <LiveProvider code={codeExample} scope={{ Button }}>
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "8px",
        width: "320px",
        background: "#f9f9f9",
      }}
    >
      <h4 style={{ marginBottom: "8px" }}>🧑‍💻 Live JSX Editor</h4>
      <LiveEditor style={{ background: "#272822", color: "#fff", fontSize: 14 }} />
      <LiveError style={{ color: "red", marginTop: "4px" }} />
      <div style={{ marginTop: "12px" }}>
        <LivePreview />
      </div>
    </div>
  </LiveProvider>
);

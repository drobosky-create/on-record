import React from "react";

/** Flat surface card. Paper (raised on bone) or ink (dark). 1px hairline, no shadow, no rounding. */
export function Card({ variant = "paper", children, style, ...rest }) {
  const variants = {
    paper: {
      background: "var(--or-paper-2)",
      color: "var(--or-ink)",
      border: "1px solid var(--or-hairline)",
    },
    ink: {
      background: "var(--or-ink)",
      color: "var(--or-bone)",
      border: "1px solid var(--or-hairline-d)",
    },
  };
  return (
    <div style={{ padding: 24, borderRadius: 0, ...variants[variant], ...style }} {...rest}>
      {children}
    </div>
  );
}

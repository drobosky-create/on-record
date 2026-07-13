import React from "react";

/** Uppercase mono label / counter — the administrative voice.
    Use for eyebrows, field labels, and ledger counters ("Day 001 / 090"). */
export function Label({ dark = false, children, style, ...rest }) {
  return (
    <span
      style={{
        fontFamily: "var(--or-font-mono)",
        fontSize: 12,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        color: dark ? "var(--or-silver)" : "var(--or-muted)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}

import React from "react";

/** Ruled write-in field — a single hairline underline, like the book's lines.
    Mono uppercase label above; focus turns the rule oxblood. No boxes, no fills. */
export function Field({ label, multiline = false, dark = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const labelStyle = {
    display: "block",
    fontFamily: "var(--or-font-mono)",
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    color: dark ? "var(--or-silver)" : "var(--or-muted)",
    marginBottom: 8,
  };
  const inputStyle = {
    width: "100%",
    border: 0,
    borderBottom: `1px solid ${focus ? "var(--or-oxblood)" : dark ? "var(--or-bone)" : "var(--or-ink)"}`,
    background: "transparent",
    borderRadius: 0,
    padding: "8px 0",
    fontFamily: "var(--or-font-sans)",
    fontSize: 16,
    color: dark ? "var(--or-bone)" : "var(--or-ink)",
    outline: "none",
    boxSizing: "border-box",
    resize: "none",
  };
  const shared = {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: inputStyle,
    ...rest,
  };
  return (
    <div style={{ marginBottom: 24, maxWidth: 420, ...style }}>
      {label ? <label style={labelStyle}>{label}</label> : null}
      {multiline ? <textarea rows={3} {...shared}></textarea> : <input {...shared} />}
    </div>
  );
}

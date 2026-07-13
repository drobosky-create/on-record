import React from "react";

/** On Record button. Sharp corners, uppercase, tracked. No shadows, no transitions. */
export function Button({ variant = "primary", children, style, ...rest }) {
  const base = {
    display: "inline-block",
    fontFamily: "var(--or-font-sans)",
    fontWeight: 600,
    fontSize: 13,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    padding: "14px 24px",
    borderRadius: 0,
    cursor: "pointer",
    textDecoration: "none",
    transition: "none",
    border: "1px solid",
    lineHeight: 1.2,
  };
  const variants = {
    primary: {
      background: "var(--or-oxblood)",
      color: "var(--or-bone)",
      borderColor: "var(--or-oxblood)",
    },
    ghost: {
      background: "transparent",
      color: "var(--or-ink)",
      borderColor: "var(--or-ink)",
    },
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyles = {
    primary: { background: "var(--or-maroon)", borderColor: "var(--or-maroon)" },
    ghost: { background: "var(--or-ink)", color: "var(--or-bone)" },
  };
  return (
    <button
      type="button"
      style={{ ...base, ...variants[variant], ...(hover ? hoverStyles[variant] : null), ...style }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {children}
    </button>
  );
}

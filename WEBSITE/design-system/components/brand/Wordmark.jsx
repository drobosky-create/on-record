import React from "react";

/** The On Record wordmark — set in type, never drawn.
    On dark: silver-foil gradient (the only permitted gradient). On light: solid ink. */
export function Wordmark({ edition = "On Record", foil = false, size = 34, style, ...rest }) {
  const base = {
    fontFamily: "var(--or-font-sans)",
    fontWeight: 600,
    fontSize: size,
    letterSpacing: "0.02em",
    lineHeight: 1.1,
    display: "inline-block",
  };
  const foilStyle = foil
    ? {
        background: "var(--or-foil)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }
    : { color: "var(--or-ink)" };
  return (
    <span style={{ ...base, ...foilStyle, ...style }} {...rest}>
      {edition}
    </span>
  );
}

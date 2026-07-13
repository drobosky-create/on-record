/* @ds-bundle: {"format":4,"namespace":"OnRecordDesignSystem_df89d1","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Label","sourcePath":"components/brand/Label.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"b6afdce15e1f","components/brand/Label.jsx":"e69687e42371","components/brand/Wordmark.jsx":"d8344dc67ab7","components/forms/Field.jsx":"d7d8e881fec5","components/surfaces/Card.jsx":"3aef32b332a7","ui_kits/book-interior/Interior.jsx":"0b580e4233ab","ui_kits/website/Landing.jsx":"aaa0e76812da"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OnRecordDesignSystem_df89d1 = window.OnRecordDesignSystem_df89d1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** On Record button. Sharp corners, uppercase, tracked. No shadows, no transitions. */
function Button({
  variant = "primary",
  children,
  style,
  ...rest
}) {
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
    lineHeight: 1.2
  };
  const variants = {
    primary: {
      background: "var(--or-oxblood)",
      color: "var(--or-bone)",
      borderColor: "var(--or-oxblood)"
    },
    ghost: {
      background: "transparent",
      color: "var(--or-ink)",
      borderColor: "var(--or-ink)"
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyles = {
    primary: {
      background: "var(--or-maroon)",
      borderColor: "var(--or-maroon)"
    },
    ghost: {
      background: "var(--or-ink)",
      color: "var(--or-bone)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    style: {
      ...base,
      ...variants[variant],
      ...(hover ? hoverStyles[variant] : null),
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/brand/Label.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Uppercase mono label / counter — the administrative voice.
    Use for eyebrows, field labels, and ledger counters ("Day 001 / 090"). */
function Label({
  dark = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: "var(--or-font-mono)",
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      color: dark ? "var(--or-silver)" : "var(--or-muted)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Label.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The On Record wordmark — set in type, never drawn.
    On dark: silver-foil gradient (the only permitted gradient). On light: solid ink. */
function Wordmark({
  edition = "On Record",
  foil = false,
  size = 34,
  style,
  ...rest
}) {
  const base = {
    fontFamily: "var(--or-font-sans)",
    fontWeight: 600,
    fontSize: size,
    letterSpacing: "0.02em",
    lineHeight: 1.1,
    display: "inline-block"
  };
  const foilStyle = foil ? {
    background: "var(--or-foil)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent"
  } : {
    color: "var(--or-ink)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...foilStyle,
      ...style
    }
  }, rest), edition);
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Ruled write-in field — a single hairline underline, like the book's lines.
    Mono uppercase label above; focus turns the rule oxblood. No boxes, no fills. */
function Field({
  label,
  multiline = false,
  dark = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const labelStyle = {
    display: "block",
    fontFamily: "var(--or-font-mono)",
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    color: dark ? "var(--or-silver)" : "var(--or-muted)",
    marginBottom: 8
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
    resize: "none"
  };
  const shared = {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: inputStyle,
    ...rest
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24,
      maxWidth: 420,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, label) : null, multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: 3
  }, shared)) : /*#__PURE__*/React.createElement("input", shared));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Flat surface card. Paper (raised on bone) or ink (dark). 1px hairline, no shadow, no rounding. */
function Card({
  variant = "paper",
  children,
  style,
  ...rest
}) {
  const variants = {
    paper: {
      background: "var(--or-paper-2)",
      color: "var(--or-ink)",
      border: "1px solid var(--or-hairline)"
    },
    ink: {
      background: "var(--or-ink)",
      color: "var(--or-bone)",
      border: "1px solid var(--or-hairline-d)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: 24,
      borderRadius: 0,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// ui_kits/book-interior/Interior.jsx
try { (() => {
const {
  Label
} = window.OnRecordDesignSystem_df89d1;

/* Shared page primitives — the book's own vocabulary: ruled lines, ALL-CAPS
   headers, ballot boxes. Copy is set exactly as written in CONTENT/. */

function Rule({
  label = null,
  height = 30
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 6
    }
  }, label ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      marginBottom: 2
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--or-ink)",
      height
    }
  }));
}
function PageTitle({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: "0.06em",
      marginBottom: 22
    }
  }, children);
}
function Body({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      lineHeight: 1.65,
      margin: "0 0 14px",
      ...style
    }
  }, children);
}
function Boxes({
  left,
  right
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      display: "inline-flex",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", null, left, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, "\u25A2")), /*#__PURE__*/React.createElement("span", null, right, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, "\u25A2")));
}
function SignRow({
  labels = ["Signed"],
  date = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      alignItems: "flex-end",
      marginTop: 18
    }
  }, labels.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--or-ink)",
      height: 26
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      marginTop: 4
    }
  }, l))), date ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 110
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--or-ink)",
      height: 26
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      marginTop: 4
    }
  }, "____ / ____ / ______")) : null);
}

/* — Pages, copy set exactly — */

function IdentityStandard() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageTitle, null, "IDENTITY STANDARD"), /*#__PURE__*/React.createElement(Body, null, "This book is a record. It is not a planner, a journal, or a companion. It does not remind you. It does not encourage you. It does not forgive you. It records what you did."), /*#__PURE__*/React.createElement(Body, null, "You are the only author. What is written here is permanent. It cannot be erased, refilled, or restarted. Each day is counted. Each day is signed."), /*#__PURE__*/React.createElement(Body, null, "I, ______________________________, open this record on ____ / ____ / ______."), /*#__PURE__*/React.createElement(Body, null, "I hold myself to the standard recorded on the following pages. I understand that this record keeps no account but the true one."), /*#__PURE__*/React.createElement(SignRow, {
    labels: ["Signed"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontSize: 12.5
    }
  }, "Edition No. ________"));
}
function Standards() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageTitle, null, "NON-NEGOTIABLE STANDARDS"), /*#__PURE__*/React.createElement(Body, null, "These are the standards you will not negotiate. Write them once, in permanent ink. They do not change without consequence, and any change is recorded \u2014 never erased."), /*#__PURE__*/React.createElement(Body, null, "You will answer to these every day. The Daily Page asks only whether they held. ", /*#__PURE__*/React.createElement("strong", null, "If any one broke, the day is recorded as broken.")), [1, 2, 3, 4, 5].map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-end",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5
    }
  }, n, "."), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      borderBottom: "1px solid var(--or-ink)",
      height: 22
    }
  }))), /*#__PURE__*/React.createElement(Body, {
    style: {
      marginTop: 6
    }
  }, "Fewer is stronger. Do not fill every line to fill it."));
}
function Initiation() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageTitle, null, "INITIATION \u2014 DAY 1 \xB7 DECLARE"), /*#__PURE__*/React.createElement(Body, null, "Write, in one sentence, the person you are choosing to become. Not a goal. A person."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    height: 34
  })));
}
function Daily() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: "0.06em"
    }
  }, "DAY ________ / 90"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5
    }
  }, "____ / ____ / ______")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 4,
      fontSize: 13,
      fontWeight: 600
    }
  }, "Yesterday, the standards held: \xA0 ", /*#__PURE__*/React.createElement(Boxes, {
    left: "KEPT",
    right: "BROKEN"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontStyle: "italic",
      color: "var(--or-muted)",
      marginBottom: 6
    }
  }, "(any one broken = BROKEN. If broken, one line \u2014 which, and why. No more.)"), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    label: "Today's single obligation:"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      marginBottom: 2
    }
  }, "The record ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      fontStyle: "italic",
      color: "var(--or-muted)"
    }
  }, "(what was actually done):")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--or-ink)",
      height: 30
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--or-ink)",
      height: 30
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--or-ink)",
      height: 30
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--or-ink)",
      height: 30
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 14,
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 180
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--or-ink)",
      height: 24
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      marginTop: 4
    }
  }, "Signed")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontStyle: "italic",
      color: "var(--or-muted)"
    }
  }, "(close the day \u2014 no day is left unsigned)")));
}
function Weekly() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: "0.06em"
    }
  }, "WEEK ________"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5
    }
  }, "Days ______ to ______")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      marginBottom: 22
    }
  }, "Days kept: ______ / 7"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 4,
      fontSize: 13,
      fontWeight: 600
    }
  }, "The pattern ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      fontStyle: "italic",
      color: "var(--or-muted)"
    }
  }, "(one line \u2014 where you held, where you broke):")), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "18px 0 4px",
      fontSize: 13,
      fontWeight: 600
    }
  }, "The escalation ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      fontStyle: "italic",
      color: "var(--or-muted)"
    }
  }, "(what you raise next week \u2014 a standard made harder, or a new one added):")), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 180,
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--or-ink)",
      height: 24
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      marginTop: 4
    }
  }, "Signed")));
}
function CloseOut() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageTitle, null, "CLOSE-OUT \u2014 DAY 90"), /*#__PURE__*/React.createElement(Body, null, "Ninety days are counted. This is the accounting. Answer plainly; this record keeps no account but the true one."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      margin: "18px 0"
    }
  }, "Days kept: ______ / 90"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 4,
      fontSize: 13,
      fontWeight: 600
    }
  }, "The standard held: \xA0 ", /*#__PURE__*/React.createElement(Boxes, {
    left: "YES",
    right: "NO"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontStyle: "italic",
      color: "var(--or-muted)",
      marginBottom: 6
    }
  }, "(one line \u2014 the truth of it)"), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    label: "What changed in you:"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    label: "What you carry into the next record:"
  })), /*#__PURE__*/React.createElement(Body, {
    style: {
      marginTop: 18
    }
  }, "This record is now closed. It cannot be reopened, erased, or restarted."), /*#__PURE__*/React.createElement(SignRow, {
    labels: ["Signed"],
    date: true
  }));
}
function CommonDaily() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: "0.06em"
    }
  }, "DAY ________ / 45"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5
    }
  }, "____ / ____ / ______")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 4,
      fontSize: 13,
      fontWeight: 600
    }
  }, "Yesterday, we held: \xA0 ", /*#__PURE__*/React.createElement(Boxes, {
    left: "KEPT",
    right: "BROKEN"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontStyle: "italic",
      color: "var(--or-muted)",
      marginBottom: 6
    }
  }, "(either one broken = BROKEN. If broken, one line \u2014 what, and why.)"), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    label: "Today's obligation to each other (one):"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      marginBottom: 2
    }
  }, "The record ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      fontStyle: "italic",
      color: "var(--or-muted)"
    }
  }, "(what we did):")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--or-ink)",
      height: 30
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--or-ink)",
      height: 30
    }
  })), /*#__PURE__*/React.createElement(SignRow, {
    labels: ["Signed", "Signed"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontStyle: "italic",
      color: "var(--or-muted)",
      marginTop: 6
    }
  }, "(neither day closes with one signature)"));
}
const PAGES = [{
  key: "identity",
  label: "Identity Standard",
  el: /*#__PURE__*/React.createElement(IdentityStandard, null)
}, {
  key: "standards",
  label: "Non-Negotiables",
  el: /*#__PURE__*/React.createElement(Standards, null)
}, {
  key: "initiation",
  label: "Initiation · Day 1",
  el: /*#__PURE__*/React.createElement(Initiation, null)
}, {
  key: "daily",
  label: "Daily Page",
  el: /*#__PURE__*/React.createElement(Daily, null)
}, {
  key: "weekly",
  label: "Weekly Escalation",
  el: /*#__PURE__*/React.createElement(Weekly, null)
}, {
  key: "closeout",
  label: "Close-Out",
  el: /*#__PURE__*/React.createElement(CloseOut, null)
}, {
  key: "common",
  label: "Common · Daily",
  el: /*#__PURE__*/React.createElement(CommonDaily, null)
}];
function Interior() {
  const [i, setI] = React.useState(0);
  const page = PAGES[i];
  const navBtn = disabled => ({
    fontFamily: "var(--or-font-mono)",
    fontSize: 12,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    background: "transparent",
    border: "1px solid var(--or-ink)",
    borderRadius: 0,
    padding: "10px 18px",
    cursor: disabled ? "default" : "pointer",
    opacity: disabled ? 0.3 : 1,
    color: "var(--or-ink)"
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "32px 24px 48px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      flexWrap: "wrap",
      justifyContent: "center",
      marginBottom: 28
    }
  }, PAGES.map((p, n) => /*#__PURE__*/React.createElement("button", {
    key: p.key,
    onClick: () => setI(n),
    style: {
      fontFamily: "var(--or-font-mono)",
      fontSize: 11,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      padding: "8px 12px",
      border: "1px solid " + (n === i ? "var(--or-ink)" : "var(--or-hairline)"),
      background: n === i ? "var(--or-ink)" : "transparent",
      color: n === i ? "var(--or-bone)" : "var(--or-muted)",
      borderRadius: 0,
      cursor: "pointer"
    }
  }, p.label))), /*#__PURE__*/React.createElement("div", {
    "data-screen-label": page.label,
    style: {
      width: 420,
      minHeight: 630,
      background: "var(--or-bone)",
      border: "1px solid var(--or-hairline)",
      padding: "52px 44px",
      boxSizing: "border-box",
      fontFamily: "var(--or-font-sans)"
    }
  }, page.el), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 28,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: navBtn(i === 0),
    onClick: () => setI(Math.max(0, i - 1))
  }, "\u2190 Prev"), /*#__PURE__*/React.createElement(Label, null, String(i + 1).padStart(2, "0"), " / ", String(PAGES.length).padStart(2, "0")), /*#__PURE__*/React.createElement("button", {
    style: navBtn(i === PAGES.length - 1),
    onClick: () => setI(Math.min(PAGES.length - 1, i + 1))
  }, "Next \u2192")));
}
Object.assign(window, {
  Interior
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/book-interior/Interior.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Landing.jsx
try { (() => {
const {
  Button,
  Field,
  Card,
  Label,
  Wordmark
} = window.OnRecordDesignSystem_df89d1;
const foilText = {
  background: "var(--or-foil)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent"
};
function Header() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      borderBottom: "1px solid var(--or-hairline)",
      background: "var(--or-bone)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 960,
      margin: "0 auto",
      padding: "20px 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 20
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 32,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#editions",
    style: {
      color: "var(--or-ink)",
      textDecoration: "none",
      fontSize: 14,
      fontWeight: 500
    }
  }, "The Editions"), /*#__PURE__*/React.createElement("a", {
    href: "#arc",
    style: {
      color: "var(--or-ink)",
      textDecoration: "none",
      fontSize: 14,
      fontWeight: 500
    }
  }, "The Arc"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    style: {
      padding: "10px 18px"
    }
  }, "Begin the record"))));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--or-ink)",
      color: "var(--or-bone)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 960,
      margin: "0 auto",
      padding: "96px 32px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Label, {
    dark: true
  }, "An operating system for accountability"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 44,
      lineHeight: 1.05,
      letterSpacing: "-0.01em",
      fontWeight: 600,
      margin: "20px auto 24px",
      maxWidth: 640,
      ...foilText
    }
  }, "Permanence changes behavior."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 560,
      margin: "0 auto 40px",
      color: "var(--or-silver)",
      fontSize: 16,
      lineHeight: 1.6
    }
  }, "The Record is a permanent, finite, non-refillable accountability book. It does not remind you. It does not encourage you. It records what you did."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Begin the record")));
}
function EditionCover({
  cloth,
  name
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: cloth,
      aspectRatio: "140 / 210",
      borderRadius: "2px 5px 5px 2px",
      boxShadow: "0 10px 24px rgba(20,20,19,0.35), 0 1px 4px rgba(20,20,19,0.25)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: 6,
      borderRadius: "2px 0 0 2px",
      background: "linear-gradient(90deg, rgba(255,255,255,0.07), rgba(0,0,0,0.28) 60%, rgba(255,255,255,0.04))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "2px 5px 5px 2px",
      background: "linear-gradient(120deg, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0) 34%, rgba(0,0,0,0.10) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: "10%",
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 9,
      letterSpacing: "0.5em",
      textIndent: "0.5em",
      lineHeight: 1,
      whiteSpace: "nowrap",
      textTransform: "uppercase",
      ...foilText
    }
  }, name)));
}
function Editions() {
  const editions = [{
    cloth: "var(--or-cloth-black)",
    name: "Man on Record",
    meta: "90 days · individual",
    body: "The 90-day individual edition. Black cloth, silver foil."
  }, {
    cloth: "var(--or-cloth-oxblood)",
    name: "Woman on Record",
    meta: "90 days · individual",
    body: "Mechanically identical. Same interior, same severity. Oxblood cloth."
  }, {
    cloth: "var(--or-cloth-maroon)",
    name: "The Common Record",
    meta: "45 days · co-authored",
    body: "Unlocked only after both partners complete their runs. Two signatures, never one."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "editions",
    style: {
      maxWidth: 960,
      margin: "0 auto",
      padding: "80px 32px"
    }
  }, /*#__PURE__*/React.createElement(Label, null, "01 \xB7 The Editions"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 32,
      lineHeight: 1.1,
      fontWeight: 600,
      margin: "16px 0 40px"
    }
  }, "One instrument. Three editions."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, editions.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.name
  }, /*#__PURE__*/React.createElement(EditionCover, {
    cloth: e.cloth,
    name: e.name
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--or-hairline)",
      padding: "16px 0 6px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: 600
    }
  }, e.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 0 0"
    }
  }, /*#__PURE__*/React.createElement(Label, null, e.meta), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: 14,
      color: "var(--or-muted)",
      lineHeight: 1.6
    }
  }, e.body))))));
}
function Arc() {
  const steps = [{
    n: "Open",
    body: "The Identity Standard binds you to the terms of the record. You are the only author. Each day is counted. Each day is signed."
  }, {
    n: "Keep",
    body: "Ninety daily pages. One obligation a day. KEPT or BROKEN — binary, no scale, no partial credit. Every day is signed."
  }, {
    n: "Close",
    body: "The Close-Out formally shuts the record. It cannot be reopened, erased, or restarted."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "arc",
    style: {
      background: "var(--or-paper-2)",
      borderTop: "1px solid var(--or-hairline)",
      borderBottom: "1px solid var(--or-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 960,
      margin: "0 auto",
      padding: "80px 32px"
    }
  }, /*#__PURE__*/React.createElement(Label, null, "02 \xB7 The Arc"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 32,
      lineHeight: 1.1,
      fontWeight: 600,
      margin: "16px 0 40px"
    }
  }, "Open. Keep. Close."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(Card, {
    key: s.n,
    variant: "ink"
  }, /*#__PURE__*/React.createElement(Label, {
    dark: true
  }, `0${i + 1}`), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "10px 0 8px",
      fontSize: 17,
      fontWeight: 600
    }
  }, s.n), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: "var(--or-silver)",
      lineHeight: 1.6
    }
  }, s.body))))));
}
function Waitlist() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 960,
      margin: "0 auto",
      padding: "80px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement(Label, null, "03 \xB7 The Seed Run"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 32,
      lineHeight: 1.1,
      fontWeight: 600,
      margin: "16px 0 12px"
    }
  }, "Fifty units. Sewn, lay-flat, permanent."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 32px",
      color: "var(--or-muted)",
      fontSize: 16,
      lineHeight: 1.6
    }
  }, "Leave your name. When the seed run is bound, you will be notified once."), sent ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16
    }
  }, "Recorded.") : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Field, {
    label: "Name"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Email"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setSent(true)
  }, "Put me on record"))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--or-ink)",
      color: "var(--or-silver)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 960,
      margin: "0 auto",
      padding: "48px 32px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 20,
      letterSpacing: "0.02em",
      ...foilText
    }
  }, "On Record"), /*#__PURE__*/React.createElement(Label, {
    dark: true
  }, "Permanence changes behavior")));
}
function Landing() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Editions, null), /*#__PURE__*/React.createElement(Arc, null), /*#__PURE__*/React.createElement(Waitlist, null), /*#__PURE__*/React.createElement(Footer, null));
}
Object.assign(window, {
  Landing
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Landing.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Card = __ds_scope.Card;

})();

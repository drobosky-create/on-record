const { Label } = window.OnRecordDesignSystem_df89d1;

/* Shared page primitives — the book's own vocabulary: ruled lines, ALL-CAPS
   headers, ballot boxes. Copy is set exactly as written in CONTENT/. */

function Rule({ label = null, height = 30 }) {
  return (
    <div style={{ marginBottom: 6 }}>
      {label ? <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 2 }}>{label}</div> : null}
      <div style={{ borderBottom: "1px solid var(--or-ink)", height }}></div>
    </div>
  );
}

function PageTitle({ children }) {
  return <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: "0.06em", marginBottom: 22 }}>{children}</div>;
}

function Body({ children, style }) {
  return <p style={{ fontSize: 12.5, lineHeight: 1.65, margin: "0 0 14px", ...style }}>{children}</p>;
}

function Boxes({ left, right }) {
  return (
    <span style={{ fontSize: 12.5, display: "inline-flex", gap: 20 }}>
      <span>{left} <span style={{ fontSize: 14 }}>▢</span></span>
      <span>{right} <span style={{ fontSize: 14 }}>▢</span></span>
    </span>
  );
}

function SignRow({ labels = ["Signed"], date = false }) {
  return (
    <div style={{ display: "flex", gap: 24, alignItems: "flex-end", marginTop: 18 }}>
      {labels.map((l, i) => (
        <div key={i} style={{ flex: 1 }}>
          <div style={{ borderBottom: "1px solid var(--or-ink)", height: 26 }}></div>
          <div style={{ fontSize: 11, fontWeight: 600, marginTop: 4 }}>{l}</div>
        </div>
      ))}
      {date ? (
        <div style={{ width: 110 }}>
          <div style={{ borderBottom: "1px solid var(--or-ink)", height: 26 }}></div>
          <div style={{ fontSize: 11, marginTop: 4 }}>____ / ____ / ______</div>
        </div>
      ) : null}
    </div>
  );
}

/* — Pages, copy set exactly — */

function IdentityStandard() {
  return (
    <div>
      <PageTitle>IDENTITY STANDARD</PageTitle>
      <Body>This book is a record. It is not a planner, a journal, or a companion. It does not remind you. It does not encourage you. It does not forgive you. It records what you did.</Body>
      <Body>You are the only author. What is written here is permanent. It cannot be erased, refilled, or restarted. Each day is counted. Each day is signed.</Body>
      <Body>I, ______________________________, open this record on ____ / ____ / ______.</Body>
      <Body>I hold myself to the standard recorded on the following pages. I understand that this record keeps no account but the true one.</Body>
      <SignRow labels={["Signed"]} />
      <div style={{ marginTop: 14, fontSize: 12.5 }}>Edition No. ________</div>
    </div>
  );
}

function Standards() {
  return (
    <div>
      <PageTitle>NON-NEGOTIABLE STANDARDS</PageTitle>
      <Body>These are the standards you will not negotiate. Write them once, in permanent ink. They do not change without consequence, and any change is recorded — never erased.</Body>
      <Body>You will answer to these every day. The Daily Page asks only whether they held. <strong>If any one broke, the day is recorded as broken.</strong></Body>
      {[1, 2, 3, 4, 5].map((n) => (
        <div key={n} style={{ display: "flex", gap: 10, alignItems: "flex-end", marginBottom: 18 }}>
          <span style={{ fontSize: 12.5 }}>{n}.</span>
          <div style={{ flex: 1, borderBottom: "1px solid var(--or-ink)", height: 22 }}></div>
        </div>
      ))}
      <Body style={{ marginTop: 6 }}>Fewer is stronger. Do not fill every line to fill it.</Body>
    </div>
  );
}

function Initiation() {
  return (
    <div>
      <PageTitle>INITIATION — DAY 1 · DECLARE</PageTitle>
      <Body>Write, in one sentence, the person you are choosing to become. Not a goal. A person.</Body>
      <div style={{ marginTop: 40 }}><Rule height={34} /></div>
    </div>
  );
}

function Daily() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 22 }}>
        <span style={{ fontSize: 15, fontWeight: 600, letterSpacing: "0.06em" }}>DAY ________ / 90</span>
        <span style={{ fontSize: 12.5 }}>____ / ____ / ______</span>
      </div>
      <div style={{ marginBottom: 4, fontSize: 13, fontWeight: 600 }}>Yesterday, the standards held: &nbsp; <Boxes left="KEPT" right="BROKEN" /></div>
      <div style={{ fontSize: 11, fontStyle: "italic", color: "var(--or-muted)", marginBottom: 6 }}>(any one broken = BROKEN. If broken, one line — which, and why. No more.)</div>
      <Rule />
      <div style={{ marginTop: 18 }}><Rule label="Today's single obligation:" /></div>
      <div style={{ marginTop: 18 }}>
        <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 2 }}>The record <span style={{ fontWeight: 400, fontStyle: "italic", color: "var(--or-muted)" }}>(what was actually done):</span></div>
        <div style={{ borderBottom: "1px solid var(--or-ink)", height: 30 }}></div>
        <div style={{ borderBottom: "1px solid var(--or-ink)", height: 30 }}></div>
        <div style={{ borderBottom: "1px solid var(--or-ink)", height: 30 }}></div>
        <div style={{ borderBottom: "1px solid var(--or-ink)", height: 30 }}></div>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 14, marginTop: 26 }}>
        <div style={{ width: 180 }}><div style={{ borderBottom: "1px solid var(--or-ink)", height: 24 }}></div><div style={{ fontSize: 11, fontWeight: 600, marginTop: 4 }}>Signed</div></div>
        <span style={{ fontSize: 11, fontStyle: "italic", color: "var(--or-muted)" }}>(close the day — no day is left unsigned)</span>
      </div>
    </div>
  );
}

function Weekly() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 22 }}>
        <span style={{ fontSize: 15, fontWeight: 600, letterSpacing: "0.06em" }}>WEEK ________</span>
        <span style={{ fontSize: 12.5 }}>Days ______ to ______</span>
      </div>
      <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 22 }}>Days kept: ______ / 7</div>
      <div style={{ marginBottom: 4, fontSize: 13, fontWeight: 600 }}>The pattern <span style={{ fontWeight: 400, fontStyle: "italic", color: "var(--or-muted)" }}>(one line — where you held, where you broke):</span></div>
      <Rule />
      <div style={{ margin: "18px 0 4px", fontSize: 13, fontWeight: 600 }}>The escalation <span style={{ fontWeight: 400, fontStyle: "italic", color: "var(--or-muted)" }}>(what you raise next week — a standard made harder, or a new one added):</span></div>
      <Rule />
      <div style={{ width: 180, marginTop: 26 }}><div style={{ borderBottom: "1px solid var(--or-ink)", height: 24 }}></div><div style={{ fontSize: 11, fontWeight: 600, marginTop: 4 }}>Signed</div></div>
    </div>
  );
}

function CloseOut() {
  return (
    <div>
      <PageTitle>CLOSE-OUT — DAY 90</PageTitle>
      <Body>Ninety days are counted. This is the accounting. Answer plainly; this record keeps no account but the true one.</Body>
      <div style={{ fontSize: 13, fontWeight: 600, margin: "18px 0" }}>Days kept: ______ / 90</div>
      <div style={{ marginBottom: 4, fontSize: 13, fontWeight: 600 }}>The standard held: &nbsp; <Boxes left="YES" right="NO" /></div>
      <div style={{ fontSize: 11, fontStyle: "italic", color: "var(--or-muted)", marginBottom: 6 }}>(one line — the truth of it)</div>
      <Rule />
      <div style={{ marginTop: 16 }}><Rule label="What changed in you:" /></div>
      <div style={{ marginTop: 16 }}><Rule label="What you carry into the next record:" /></div>
      <Body style={{ marginTop: 18 }}>This record is now closed. It cannot be reopened, erased, or restarted.</Body>
      <SignRow labels={["Signed"]} date />
    </div>
  );
}

function CommonDaily() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 22 }}>
        <span style={{ fontSize: 15, fontWeight: 600, letterSpacing: "0.06em" }}>DAY ________ / 45</span>
        <span style={{ fontSize: 12.5 }}>____ / ____ / ______</span>
      </div>
      <div style={{ marginBottom: 4, fontSize: 13, fontWeight: 600 }}>Yesterday, we held: &nbsp; <Boxes left="KEPT" right="BROKEN" /></div>
      <div style={{ fontSize: 11, fontStyle: "italic", color: "var(--or-muted)", marginBottom: 6 }}>(either one broken = BROKEN. If broken, one line — what, and why.)</div>
      <Rule />
      <div style={{ marginTop: 18 }}><Rule label="Today's obligation to each other (one):" /></div>
      <div style={{ marginTop: 18 }}>
        <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 2 }}>The record <span style={{ fontWeight: 400, fontStyle: "italic", color: "var(--or-muted)" }}>(what we did):</span></div>
        <div style={{ borderBottom: "1px solid var(--or-ink)", height: 30 }}></div>
        <div style={{ borderBottom: "1px solid var(--or-ink)", height: 30 }}></div>
      </div>
      <SignRow labels={["Signed", "Signed"]} />
      <div style={{ fontSize: 11, fontStyle: "italic", color: "var(--or-muted)", marginTop: 6 }}>(neither day closes with one signature)</div>
    </div>
  );
}

const PAGES = [
  { key: "identity", label: "Identity Standard", el: <IdentityStandard /> },
  { key: "standards", label: "Non-Negotiables", el: <Standards /> },
  { key: "initiation", label: "Initiation · Day 1", el: <Initiation /> },
  { key: "daily", label: "Daily Page", el: <Daily /> },
  { key: "weekly", label: "Weekly Escalation", el: <Weekly /> },
  { key: "closeout", label: "Close-Out", el: <CloseOut /> },
  { key: "common", label: "Common · Daily", el: <CommonDaily /> },
];

function Interior() {
  const [i, setI] = React.useState(0);
  const page = PAGES[i];
  const navBtn = (disabled) => ({
    fontFamily: "var(--or-font-mono)", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase",
    background: "transparent", border: "1px solid var(--or-ink)", borderRadius: 0, padding: "10px 18px",
    cursor: disabled ? "default" : "pointer", opacity: disabled ? 0.3 : 1, color: "var(--or-ink)",
  });
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", padding: "32px 24px 48px", boxSizing: "border-box" }}>
      <div style={{ display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "center", marginBottom: 28 }}>
        {PAGES.map((p, n) => (
          <button key={p.key} onClick={() => setI(n)}
            style={{ fontFamily: "var(--or-font-mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase",
              padding: "8px 12px", border: "1px solid " + (n === i ? "var(--or-ink)" : "var(--or-hairline)"),
              background: n === i ? "var(--or-ink)" : "transparent", color: n === i ? "var(--or-bone)" : "var(--or-muted)",
              borderRadius: 0, cursor: "pointer" }}>
            {p.label}
          </button>
        ))}
      </div>
      <div data-screen-label={page.label} style={{ width: 420, minHeight: 630, background: "var(--or-bone)", border: "1px solid var(--or-hairline)", padding: "52px 44px", boxSizing: "border-box", fontFamily: "var(--or-font-sans)" }}>
        {page.el}
      </div>
      <div style={{ display: "flex", gap: 12, marginTop: 28, alignItems: "center" }}>
        <button style={navBtn(i === 0)} onClick={() => setI(Math.max(0, i - 1))}>← Prev</button>
        <Label>{String(i + 1).padStart(2, "0")} / {String(PAGES.length).padStart(2, "0")}</Label>
        <button style={navBtn(i === PAGES.length - 1)} onClick={() => setI(Math.min(PAGES.length - 1, i + 1))}>Next →</button>
      </div>
    </div>
  );
}

Object.assign(window, { Interior });

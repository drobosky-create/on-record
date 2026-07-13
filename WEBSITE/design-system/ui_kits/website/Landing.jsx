const { Button, Field, Card, Label, Wordmark } = window.OnRecordDesignSystem_df89d1;

const foilText = {
  background: "var(--or-foil)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};

function Header() {
  return (
    <header style={{ borderBottom: "1px solid var(--or-hairline)", background: "var(--or-bone)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "20px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Wordmark size={20} />
        <nav style={{ display: "flex", gap: 32, alignItems: "center" }}>
          <a href="#editions" style={{ color: "var(--or-ink)", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>The Editions</a>
          <a href="#arc" style={{ color: "var(--or-ink)", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>The Arc</a>
          <Button variant="ghost" style={{ padding: "10px 18px" }}>Begin the record</Button>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section style={{ background: "var(--or-ink)", color: "var(--or-bone)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "96px 32px", textAlign: "center" }}>
        <Label dark>An operating system for accountability</Label>
        <h1 style={{ fontSize: 44, lineHeight: 1.05, letterSpacing: "-0.01em", fontWeight: 600, margin: "20px auto 24px", maxWidth: 640, ...foilText }}>
          Permanence changes behavior.
        </h1>
        <p style={{ maxWidth: 560, margin: "0 auto 40px", color: "var(--or-silver)", fontSize: 16, lineHeight: 1.6 }}>
          The Record is a permanent, finite, non-refillable accountability book. It does not remind you. It does not encourage you. It records what you did.
        </p>
        <Button variant="primary">Begin the record</Button>
      </div>
    </section>
  );
}

function EditionCover({ cloth, name }) {
  return (
    <div style={{ position: "relative", background: cloth, aspectRatio: "140 / 210", borderRadius: "2px 5px 5px 2px", boxShadow: "0 10px 24px rgba(20,20,19,0.35), 0 1px 4px rgba(20,20,19,0.25)" }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 6, borderRadius: "2px 0 0 2px", background: "linear-gradient(90deg, rgba(255,255,255,0.07), rgba(0,0,0,0.28) 60%, rgba(255,255,255,0.04))" }}></div>
      <div style={{ position: "absolute", inset: 0, borderRadius: "2px 5px 5px 2px", background: "linear-gradient(120deg, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0) 34%, rgba(0,0,0,0.10) 100%)" }}></div>
      <div style={{ position: "absolute", left: 0, right: 0, bottom: "10%", display: "flex", justifyContent: "center" }}>
        <span style={{ fontWeight: 500, fontSize: 9, letterSpacing: "0.5em", textIndent: "0.5em", lineHeight: 1, whiteSpace: "nowrap", textTransform: "uppercase", ...foilText }}>{name}</span>
      </div>
    </div>
  );
}

function Editions() {
  const editions = [
    { cloth: "var(--or-cloth-black)", name: "Man on Record", meta: "90 days · individual", body: "The 90-day individual edition. Black cloth, silver foil." },
    { cloth: "var(--or-cloth-oxblood)", name: "Woman on Record", meta: "90 days · individual", body: "Mechanically identical. Same interior, same severity. Oxblood cloth." },
    { cloth: "var(--or-cloth-maroon)", name: "The Common Record", meta: "45 days · co-authored", body: "Unlocked only after both partners complete their runs. Two signatures, never one." },
  ];
  return (
    <section id="editions" style={{ maxWidth: 960, margin: "0 auto", padding: "80px 32px" }}>
      <Label>01 · The Editions</Label>
      <h2 style={{ fontSize: 32, lineHeight: 1.1, fontWeight: 600, margin: "16px 0 40px" }}>One instrument. Three editions.</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        {editions.map((e) => (
          <div key={e.name}>
            <EditionCover cloth={e.cloth} name={e.name} />
            <div style={{ borderBottom: "1px solid var(--or-hairline)", padding: "16px 0 6px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontSize: 17, fontWeight: 600 }}>{e.name}</span>
            </div>
            <div style={{ padding: "10px 0 0" }}>
              <Label>{e.meta}</Label>
              <p style={{ margin: "8px 0 0", fontSize: 14, color: "var(--or-muted)", lineHeight: 1.6 }}>{e.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Arc() {
  const steps = [
    { n: "Open", body: "The Identity Standard binds you to the terms of the record. You are the only author. Each day is counted. Each day is signed." },
    { n: "Keep", body: "Ninety daily pages. One obligation a day. KEPT or BROKEN — binary, no scale, no partial credit. Every day is signed." },
    { n: "Close", body: "The Close-Out formally shuts the record. It cannot be reopened, erased, or restarted." },
  ];
  return (
    <section id="arc" style={{ background: "var(--or-paper-2)", borderTop: "1px solid var(--or-hairline)", borderBottom: "1px solid var(--or-hairline)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "80px 32px" }}>
        <Label>02 · The Arc</Label>
        <h2 style={{ fontSize: 32, lineHeight: 1.1, fontWeight: 600, margin: "16px 0 40px" }}>Open. Keep. Close.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {steps.map((s, i) => (
            <Card key={s.n} variant="ink">
              <Label dark>{`0${i + 1}`}</Label>
              <h3 style={{ margin: "10px 0 8px", fontSize: 17, fontWeight: 600 }}>{s.n}</h3>
              <p style={{ margin: 0, fontSize: 14, color: "var(--or-silver)", lineHeight: 1.6 }}>{s.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Waitlist() {
  const [sent, setSent] = React.useState(false);
  return (
    <section style={{ maxWidth: 960, margin: "0 auto", padding: "80px 32px" }}>
      <div style={{ maxWidth: 560 }}>
        <Label>03 · The Seed Run</Label>
        <h2 style={{ fontSize: 32, lineHeight: 1.1, fontWeight: 600, margin: "16px 0 12px" }}>Fifty units. Sewn, lay-flat, permanent.</h2>
        <p style={{ margin: "0 0 32px", color: "var(--or-muted)", fontSize: 16, lineHeight: 1.6 }}>
          Leave your name. When the seed run is bound, you will be notified once.
        </p>
        {sent ? (
          <p style={{ margin: 0, fontSize: 16 }}>Recorded.</p>
        ) : (
          <div>
            <Field label="Name" />
            <Field label="Email" />
            <Button variant="primary" onClick={() => setSent(true)}>Put me on record</Button>
          </div>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "var(--or-ink)", color: "var(--or-silver)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontWeight: 600, fontSize: 20, letterSpacing: "0.02em", ...foilText }}>On Record</span>
        <Label dark>Permanence changes behavior</Label>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div>
      <Header />
      <Hero />
      <Editions />
      <Arc />
      <Waitlist />
      <Footer />
    </div>
  );
}

Object.assign(window, { Landing });

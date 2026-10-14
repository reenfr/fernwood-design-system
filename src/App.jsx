import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Toggle from "./components/Toggle";
import Card from "./components/Card";
import Alert from "./components/Alert";
import Tabs from "./components/Tabs";
import Modal from "./components/Modal";
import { FOCUS } from "./focus";
import { Logo, Wrap, Eyebrow, SectionHead, Panel, StateGrid } from "./docs";

const FIGMA_URL = "#"; // TODO: paste your Figma file link

// [name, hex, text color on swatch, caption]; ratios verified with a contrast script
const COLORS = [
  ["paper", "#FAF6EE", "#1F2A24", "Ink on paper · 13.8:1"],
  ["ink", "#1F2A24", "#FFFFFF", "Primary text · 13.8:1"],
  ["muted", "#4A5750", "#FFFFFF", "On paper · 7.0:1"],
  ["forest-700", "#1F5A3D", "#FFFFFF", "With white · 8.1:1"],
  ["forest-800", "#17452E", "#FFFFFF", "With white · 10.9:1"],
  ["forest-100", "#DDEBE2", "#17452E", "Forest-800 text · 8.9:1"],
  ["terracotta-700", "#A63D1E", "#FFFFFF", "With white · 6.4:1"],
  ["error", "#B3261E", "#FFFFFF", "On paper · 6.1:1"],
  ["success", "#14683A", "#FFFFFF", "On paper · 6.3:1"],
  ["focus", "#0B57D0", "#FFFFFF", "Keyboard focus · 5.9:1"],
];

const HOVER_BTN = { background: "#17452E", borderColor: "#17452E" };
const HELP = "We’ll only send the monthly shelf list.";
const BLURB = "A thoughtful read for long afternoons and second cups.";

export default function App() {
  const [open, setOpen] = useState(false);
  const [reminders, setReminders] = useState(false);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-surface focus:px-4 focus:py-2">Skip to content</a>

      <header className="on-dark bg-forest-700 text-white">
        <Wrap>
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/25 py-6">
            <a href="#top" aria-label="Fernwood, top of page"><Logo /></a>
            <nav aria-label="Main">
              <ul className="flex gap-8 font-bold">
                <li><a className="underline-offset-4 hover:underline" href="#foundations">Foundations</a></li>
                <li><a className="underline-offset-4 hover:underline" href="#components">Components</a></li>
                <li><a className="underline-offset-4 hover:underline" href="#guidelines">Guidelines</a></li>
              </ul>
            </nav>
          </div>
          <div id="top" className="grid items-end gap-12 py-20 lg:grid-cols-[1fr_auto]">
            <div>
              <Eyebrow light>Bookstore café · Design system</Eyebrow>
              <h1 className="mt-6 max-w-3xl text-[clamp(3rem,8vw,5.5rem)] font-semibold leading-[1.05] tracking-[-0.02em]">Stories, thoughtfully served.</h1>
              <p className="mt-8 max-w-xl">An accessibility-first library for a neighborhood bookstore café — warm, legible, and made for lingering.</p>
              <a href="#components" className="mt-10 inline-flex min-h-11 items-center gap-2 font-bold">Explore components <span aria-hidden="true">↓</span></a>
            </div>
            <aside aria-label="Edition" className="border border-white/70 p-8 lg:w-80">
              <Eyebrow light>Edition</Eyebrow>
              <p className="mt-2 border-b border-white/30 pb-5 font-display text-7xl font-bold leading-none">01</p>
              <p className="mt-5">React + Tailwind<br />WCAG AA</p>
            </aside>
          </div>
        </Wrap>
      </header>

      <main id="main">
        {/* ---------- Foundations ---------- */}
        <section id="foundations" aria-label="Foundations" className="bg-paper">
          <Wrap className="py-24">
            <SectionHead eyebrow="01 · Foundations" title="Color with purpose">
              Every pairing meets WCAG AA for normal text. Forest grounds the system, while paper keeps reading surfaces warm and comfortable.
            </SectionHead>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {COLORS.map(([name, hex, text, note]) => (
                <li key={name} className="overflow-hidden border border-rule bg-surface">
                  <div className="flex h-36 flex-col justify-end p-5" style={{ background: hex, color: text }}>
                    <span className="font-bold">{name}</span>
                    <span>{hex}</span>
                  </div>
                  <p className="p-4 text-sm text-muted">{note}</p>
                </li>
              ))}
            </ul>

            <div className="mt-24 grid gap-10 lg:grid-cols-[1fr_1.7fr]">
              <div>
                <Eyebrow>Typography</Eyebrow>
                <h2 className="mt-3 text-5xl font-bold leading-[1.05]">Literary character. Everyday clarity.</h2>
                <p className="mt-6 max-w-sm text-muted">Fraunces adds an expressive, bookish voice to display type. Atkinson Hyperlegible supports long-form reading and clear controls.</p>
              </div>
              <div className="grid gap-5">
                <div className="border border-rule bg-surface p-6 sm:p-8">
                  <div className="flex justify-between border-b border-rule pb-4 text-xs font-bold text-muted"><span>Fraunces</span><span>Display · 64/64</span></div>
                  <p className="my-10 font-display text-[clamp(2.5rem,5vw,4rem)] font-bold leading-none tracking-[-0.01em]">A quiet place<br />for curious minds.</p>
                  <p className="text-sm text-muted">ABCDEFGHIJKLMNOPQRSTUVWXYZ · abcdefghijklmnopqrstuvwxyz</p>
                </div>
                <div className="border border-rule bg-surface p-6 sm:p-8">
                  <div className="flex justify-between border-b border-rule pb-4 text-xs font-bold text-muted"><span>Atkinson Hyperlegible</span><span>Body · 18/28</span></div>
                  <p className="my-10 max-w-xl text-xl leading-9">Good books invite us to notice more. Our body face is designed for distinction, rhythm, and ease at every size.</p>
                  <p className="text-sm text-muted">0123456789 · Il1 · O0 · Reading without friction</p>
                </div>
              </div>
            </div>
          </Wrap>
        </section>

        {/* ---------- Components ---------- */}
        <section id="components" aria-label="Components" className="border-y border-rule bg-paper-2">
          <Wrap className="py-24">
            <SectionHead eyebrow="02 · Components" title="Designed for every state">
              Each control has a clear default, hover, keyboard focus, disabled, and error treatment. Interactive examples are fully keyboard accessible.
            </SectionHead>

            <div className="grid gap-9">
              <Panel n="01" title="Button" desc="Clear actions with a minimum 44px target.">
                <StateGrid cells={[
                  ["Default", <Button>Browse books</Button>],
                  ["Hover", <Button style={HOVER_BTN}>Browse books</Button>],
                  ["Focus", <Button style={FOCUS}>Browse books</Button>],
                  ["Disabled", <Button disabled>Browse books</Button>],
                  ["Error", <Button variant="destructive">Browse books</Button>],
                ]} />
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Button size="l">Primary action</Button>
                  <Button size="l" variant="secondary">Secondary action</Button>
                  <Button size="l" variant="quiet">Quiet action</Button>
                </div>
              </Panel>

              <Panel n="02" title="Input" desc="Persistent labels, useful guidance, and direct error language.">
                <StateGrid cols="md:grid-cols-2" cells={[
                  ["Default", <Input label="Email address" placeholder="reader@example.com" help={HELP} type="email" />],
                  ["Hover", <Input label="Email address" defaultValue="hello@fernwood.co" help={HELP} type="email" style={{ borderColor: "var(--color-forest-700)" }} />],
                  ["Focus", <Input label="Email address" placeholder="reader@example.com" help={HELP} type="email" style={FOCUS} />],
                  ["Disabled", <Input label="Email address" placeholder="reader@example.com" help="Newsletter registration is paused." disabled />],
                  ["Error", <Input label="Email address" defaultValue="reader@" error="Enter a complete email address." type="email" />],
                ]} />
              </Panel>

              <Panel n="03" title="Toggle" desc="A visible label and state that never relies on color alone.">
                <StateGrid cells={[
                  ["Default", <Toggle label="Event reminders" checked={reminders} onChange={setReminders} />],
                  ["Hover", <Toggle label="Event reminders" checked forceHover />],
                  ["Focus", <Toggle label="Event reminders" checked forceFocus />],
                  ["Disabled", <Toggle label="Event reminders" disabled />],
                  ["Error", <Toggle label="Event reminders" error="Selection required" />],
                ]} />
              </Panel>

              <Panel n="04" title="Card" desc="Flexible containers for books, events, and café offerings.">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                  <Card stateLabel="Default" tag="Fiction" eyebrow="Staff selection" title="The Overstory">{BLURB}</Card>
                  <Card stateLabel="Hover" tone="terracotta" tag="Essay" eyebrow="Staff selection" title="Braiding Sweetgrass" style={{ transform: "translateY(-6px)", boxShadow: "0 12px 24px rgb(31 42 36 / 15%)" }}>{BLURB}</Card>
                  <Card stateLabel="Focus" tag="Fiction" eyebrow="Staff selection" title="The Overstory" style={FOCUS}>{BLURB}</Card>
                  <Card stateLabel="Disabled" disabled tone="terracotta" tag="Essay" eyebrow="Staff selection" title="Braiding Sweetgrass">{BLURB}</Card>
                  <Card stateLabel="Error" tag="Fiction" eyebrow="Staff selection" title="The Overstory" notice="Currently unavailable">{BLURB}</Card>
                </div>
              </Panel>

              <Panel n="05" title="Alert" desc="Timely feedback with plain language and a text-based status.">
                <div className="grid gap-4">
                  <Alert type="info" title="Your table is being held">Complete your booking within ten minutes.</Alert>
                  <Alert type="success" title="Reservation confirmed">We’ll see you Thursday at 7:00 PM.</Alert>
                  <Alert type="warning" title="Only a few seats left">Reserve soon to keep your spot.</Alert>
                  <Alert type="error" title="Reservation not completed">Review your details and try again.</Alert>
                </div>
              </Panel>

              <Panel n="06" title="Tabs" desc="Arrow keys, Home and End move between tabs.">
                <div className="border border-rule bg-surface p-6">
                  <Tabs tabs={[
                    { label: "Books", content: "Browse fiction, poetry, and graphic novels." },
                    { label: "Café", content: "Seasonal drinks and fresh pastries." },
                    { label: "Events", content: "Book club every Thursday at 18:30." },
                  ]} />
                </div>
              </Panel>

              <Panel n="07" title="Modal" desc="Focused decisions with a clear title, escape route, and safe defaults.">
                <div className="on-dark flex flex-wrap items-center justify-between gap-6 bg-forest-800 p-8 text-white">
                  <div>
                    <Eyebrow light>Interactive example</Eyebrow>
                    <h4 className="mt-3 text-3xl font-semibold">Reserve a seat for tonight’s reading.</h4>
                    <p className="mt-3">The dialog closes with Escape, the close action, or the backdrop.</p>
                  </div>
                  <Button variant="light" size="l" onClick={() => setOpen(true)}>Open modal</Button>
                </div>
                <Modal open={open} onClose={() => setOpen(false)} eyebrow="Fernwood evenings" title="Save your seat">
                  <p className="mb-8 text-muted">Join us Thursday at 7:00 PM for a reading and conversation with local writers.</p>
                  <div className="flex flex-wrap gap-3">
                    <Button onClick={() => setOpen(false)}>Reserve a seat</Button>
                    <Button variant="secondary" onClick={() => setOpen(false)}>Not now</Button>
                  </div>
                </Modal>
              </Panel>
            </div>
          </Wrap>
        </section>

        {/* ---------- Guidelines ---------- */}
        <section id="guidelines" aria-label="Guidelines" className="bg-paper">
          <Wrap className="py-24">
            <SectionHead eyebrow="03 · Guidelines" title="A system made for readers">
              Fernwood favors calm, direct patterns that help people find a story, reserve a seat, or order another coffee without friction.
            </SectionHead>
            <ol className="grid divide-y divide-line border-y border-line md:grid-cols-3 md:divide-x md:divide-y-0">
              {[
                ["01", "Be generous", "Use breathing room, large targets, and comfortable reading measures."],
                ["02", "Be unmistakable", "Pair color with labels, borders, and language that explains what happened."],
                ["03", "Be human", "Write with the warmth and precision of a trusted neighborhood bookseller."],
              ].map(([n, t, d]) => (
                <li key={n} className="p-8 first:pl-0 md:first:pl-0">
                  <p className="font-bold text-terracotta-700">{n}</p>
                  <h3 className="mt-6 text-3xl font-bold">{t}</h3>
                  <p className="mt-4 max-w-xs text-muted">{d}</p>
                </li>
              ))}
            </ol>
          </Wrap>
        </section>
      </main>

      <footer className="on-dark bg-ink text-forest-100">
        <Wrap className="py-16">
          <div className="text-white"><Logo /></div>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
            <p>Books, coffee, and good company.</p>
            <p className="text-right">
              Design system · Edition 01 ·{" "}
              <a className="font-bold underline underline-offset-4" href="https://www.figma.com/make/GDaWTChOodlLSgAmcoE1qH/Design-system-for-Fernwood?code-node-id=0-6&t=cAY3DcYjDWUfGPCP-0&fullscreen=1">Figma file</a> · Coded by{" "}
              <a className="font-bold underline underline-offset-4" href="https://www.linkedin.com/in/afreen-iqbal-61908526b/">Afreen Iqbal</a>
            </p>
          </div>
        </Wrap>
      </footer>
    </>
  );
}

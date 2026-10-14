// Small layout helpers used only by the documentation page
export function Logo() {
  return (
    <span className="inline-flex items-center gap-3">
      <span aria-hidden="true" className="grid size-11 place-items-center rounded-full border border-current font-display text-lg font-bold">F</span>
      <span className="font-display text-2xl font-bold">Fernwood</span>
    </span>
  );
}

export function Wrap({ children, className = "" }) {
  return <div className={`mx-auto max-w-[1200px] px-6 sm:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, light, className = "" }) {
  return <p className={`text-xs font-bold uppercase tracking-[0.14em] ${light ? "text-white" : "text-forest-700"} ${className}`}>{children}</p>;
}

export function SectionHead({ eyebrow, title, children }) {
  return (
    <div className="mb-12">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-4xl font-bold tracking-[-0.01em] sm:text-5xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-muted">{children}</p>
    </div>
  );
}

export function Panel({ n, title, desc, children }) {
  return (
    <section aria-labelledby={`panel-${n}`} className="border border-rule bg-paper p-6 md:p-10">
      <div className="mb-8 flex items-start gap-5">
        <span aria-hidden="true" className="grid size-14 shrink-0 place-items-center rounded-full bg-forest-700 font-bold text-white">{n}</span>
        <div>
          <h3 id={`panel-${n}`} className="text-4xl font-bold">{title}</h3>
          <p className="mt-1 text-muted">{desc}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

export function StateGrid({ cells, cols = "sm:grid-cols-2 lg:grid-cols-5" }) {
  return (
    <div className={`grid gap-px border border-rule bg-rule ${cols}`}>
      {cells.map(([label, node]) => (
        <div key={label} className="bg-surface p-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-muted">{label}</p>
          {node}
        </div>
      ))}
    </div>
  );
}

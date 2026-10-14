const TONES = { forest: "bg-forest-700", terracotta: "bg-terracotta-700" };

// The whole card is clickable through the title link (stretched with ::after), so there is one tab stop per card
export default function Card({ tag, tone = "forest", eyebrow, title, href = "#", children, notice, disabled, stateLabel, className = "", ...props }) {
  const look = disabled
    ? "border border-line/40 bg-disabled-bg text-disabled-text"
    : notice
      ? "border-2 border-error bg-surface"
      : "border border-rule bg-surface transition hover:-translate-y-1 hover:shadow-lg has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-focus";
  return (
    <article className={`relative flex flex-col gap-3 p-6 ${look} ${className}`} {...props}>
      {stateLabel && <p className="text-xs font-bold uppercase tracking-[0.14em]">{stateLabel}</p>}
      <div className={`flex h-32 items-center justify-center font-display text-xl font-bold text-white ${TONES[tone]}`}>{tag}</div>
      {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.14em] text-forest-700">{eyebrow}</p>}
      <h3 className="font-display text-xl font-bold">
        {disabled ? title : <a href={href} className="after:absolute after:inset-0 focus-visible:outline-none">{title}</a>}
      </h3>
      <p className={disabled ? "" : "text-muted"}>{children}</p>
      {notice && <p className="text-sm font-bold text-error">{notice}</p>}
    </article>
  );
}

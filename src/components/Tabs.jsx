import { useId, useRef, useState } from "react";

// tabs = [{ label, content }]. Arrow keys / Home / End move between tabs (roving tabindex)
export default function Tabs({ tabs }) {
  const [active, setActive] = useState(0);
  const id = useId();
  const refs = useRef([]);

  const onKeyDown = (e) => {
    const last = tabs.length - 1;
    let next = active;
    if (e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    else if (e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  };

  return (
    <div>
      <div role="tablist" onKeyDown={onKeyDown} className="flex flex-wrap gap-1 border-b border-line">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            ref={(el) => (refs.current[i] = el)}
            role="tab"
            id={`${id}-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`${id}-panel-${i}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            className={`-mb-px min-h-11 border-b-4 px-5 font-bold ${active === i ? "border-forest-700 text-forest-800" : "border-transparent text-muted hover:text-ink"}`}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t, i) => (
        <div key={t.label} role="tabpanel" id={`${id}-panel-${i}`} aria-labelledby={`${id}-tab-${i}`} hidden={active !== i} tabIndex={0} className="py-6">
          {t.content}
        </div>
      ))}
    </div>
  );
}

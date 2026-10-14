import { useEffect, useId, useRef } from "react";

// Native <dialog>: built-in focus trap, Esc to close, focus restored to the trigger
export default function Modal({ open, onClose, eyebrow, title, children }) {
  const ref = useRef(null);
  const titleId = useId();

  useEffect(() => {
    const d = ref.current;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => { if (e.target === ref.current) onClose(); }} /* backdrop click */
      aria-labelledby={titleId}
      className="m-auto w-[min(34rem,92vw)] border border-rule bg-paper p-0 text-ink shadow-2xl backdrop:bg-forest-800/70"
    >
      <div className="relative p-8 sm:p-10">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 grid size-11 place-items-center border border-line text-xl font-bold hover:bg-forest-100"
        >
          <span aria-hidden="true">✕</span>
        </button>
        {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-forest-700">{eyebrow}</p>}
        <h2 id={titleId} className="mb-4 pr-12 font-display text-4xl font-bold">{title}</h2>
        {children}
      </div>
    </dialog>
  );
}

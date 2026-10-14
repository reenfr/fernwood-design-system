import { FOCUS } from "../focus";

// forceHover / forceFocus exist only so the docs page can show those states statically
export default function Toggle({ label, checked = false, onChange, disabled, error, forceHover, forceFocus, className = "", ...props }) {
  const track = checked ? "border-forest-700 bg-forest-700" : error ? "border-error bg-surface" : "border-line bg-surface";
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-invalid={error ? "true" : undefined}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={`group inline-flex min-h-11 items-center gap-3 text-left font-bold focus-visible:outline-none disabled:cursor-not-allowed disabled:text-disabled-text ${className}`}
      {...props}
    >
      <span
        style={forceFocus ? FOCUS : undefined}
        className={`relative h-8 w-14 shrink-0 rounded-full border-2 transition-colors group-hover:ring-4 group-hover:ring-forest-100 group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-focus group-disabled:border-line/40 group-disabled:bg-disabled-bg group-disabled:ring-0 ${track} ${forceHover ? "ring-4 ring-forest-100" : ""}`}
      >
        <span className={`absolute top-1/2 size-5 -translate-y-1/2 rounded-full transition-all group-disabled:bg-line/60 ${checked ? "left-7 bg-white" : "left-1 bg-line"}`} />
      </span>
      <span className={error ? "text-error" : ""}>
        {label}
        {error && <span className="block text-sm">{error}</span>}
      </span>
    </button>
  );
}

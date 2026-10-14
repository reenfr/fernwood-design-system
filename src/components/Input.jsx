import { useId } from "react";

export default function Input({ label, help, error, className = "", ...props }) {
  const id = useId();
  const helpId = `${id}-help`;
  const errId = `${id}-err`;
  const describedBy = error ? errId : help ? helpId : undefined;
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block font-bold">{label}</label>
      <input
        id={id}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={describedBy}
        className={`min-h-12 w-full rounded-sm border-2 bg-surface px-4 text-ink placeholder:text-muted disabled:cursor-not-allowed disabled:border-[#9AA39D] disabled:bg-disabled-bg disabled:text-disabled-text ${error ? "border-error" : "border-line enabled:hover:border-forest-700"}`}
        {...props}
      />
      {error ? (
        <p id={errId} role="alert" className="mt-2 text-sm font-bold text-error">{error}</p>
      ) : (
        help && <p id={helpId} className="mt-2 text-sm text-muted">{help}</p>
      )}
    </div>
  );
}

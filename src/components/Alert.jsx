// Never color alone: each type has an icon, a visible text label and a different border/tint
const TYPES = {
  info: ["i", "Info", "border-forest-700 bg-forest-100", "bg-forest-700"],
  success: ["✓", "Success", "border-success bg-success-tint", "bg-success"],
  warning: ["!", "Warning", "border-warn-text bg-warn-bg", "bg-warn-text"],
  error: ["!", "Error", "border-error bg-error-tint", "bg-error"],
};

export default function Alert({ type = "info", title, children }) {
  const [icon, label, box, dot] = TYPES[type];
  return (
    <div role={type === "error" ? "alert" : "status"} className={`flex gap-4 border p-5 ${box}`}>
      <span aria-hidden="true" className={`mt-1 grid size-7 shrink-0 place-items-center rounded-full text-sm font-bold text-white ${dot}`}>{icon}</span>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">{label}</p>
        <p className="mt-1 font-bold">{title}</p>
        <p className="text-muted">{children}</p>
      </div>
    </div>
  );
}

const VARIANTS = {
  primary: "border-forest-700 bg-forest-700 text-white enabled:hover:border-forest-800 enabled:hover:bg-forest-800",
  secondary: "border-forest-700 bg-transparent text-forest-800 enabled:hover:bg-forest-100",
  quiet: "border-transparent bg-transparent text-forest-800 underline decoration-2 underline-offset-4 enabled:hover:bg-forest-100",
  light: "border-white bg-white text-forest-800 enabled:hover:border-forest-100 enabled:hover:bg-forest-100",
  destructive: "border-error bg-error text-white enabled:hover:border-error-dark enabled:hover:bg-error-dark",
};
const SIZES = { m: "min-h-11 px-5 text-base", l: "min-h-12 px-7 text-lg" }; // min-h-11 = 44px target

export default function Button({ variant = "primary", size = "m", className = "", type = "button", ...props }) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-sm border-2 font-bold transition-colors duration-150 disabled:cursor-not-allowed disabled:border-disabled-bg disabled:bg-disabled-bg disabled:text-disabled-text disabled:no-underline ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...props}
    />
  );
}

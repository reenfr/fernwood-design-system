import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// BASE is set by the GitHub Actions workflow (e.g. "/fernwood-design-system/")
export default defineConfig({
  base: process.env.BASE || "/",
  plugins: [react(), tailwindcss()],
});

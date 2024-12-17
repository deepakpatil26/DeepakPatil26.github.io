import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? "/" : "", // Use '/' in production, no base in development
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
}));

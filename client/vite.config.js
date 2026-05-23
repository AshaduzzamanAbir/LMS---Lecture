import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    open: true, // Opens the browser automatically on startup
    watch: {
      usePolling: true, // Forces Vite to watch for file saves constantly
    },
  },
});

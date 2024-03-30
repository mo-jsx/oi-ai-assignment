/// <reference types="vitest" />
/// <reference types="vite/client" />

import { ProxyOptions, defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/test/setup.ts",
    },
    server:
      mode === "development"
        ? {
            proxy: {
              "/api": {
                target: "https://api.stlouisfed.org/fred/",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
              },
            } as Record<string, string | ProxyOptions>,
          }
        : {},
  };
});

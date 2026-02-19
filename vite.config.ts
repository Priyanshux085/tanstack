import { defineConfig } from "vite";
import { config } from "./src/lib/config";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    port: config.server.port,
  },
  plugins: [
    tailwindcss(),
    tsConfigPaths(),
    tanstackStart({
      srcDirectory: "src",
      // The directory where your route files are located. This should match the directory you use for your routes (e.g., "src/routes" or "src/app").
      router: {
        // This should match the directory you use for your routes (e.g., "src/routes" or "src/app").
        routesDirectory: "app",
      },
    }),
    viteReact(),
  ],
});

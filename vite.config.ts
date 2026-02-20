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
  envDir: "./env",
  customLogger: {
    // Override the default logger methods to prevent clearing the screen and to log messages in a custom format.

    clearScreen: () => {
      // No need to clear the screen in development mode
    },
    // You can customize the log format as needed. Here, we're prefixing messages with their log level.
    warnOnce: (message) => {
      console.warn(`[WARN] ${message}`);
    },
    // The `hasWarned` and `hasErrorLogged` properties are used by Vite to determine if it should log warnings or errors. By setting them to true, we can prevent duplicate logs.
    hasWarned: true,
    hasErrorLogged: () => true,

    // Custom log methods to format messages as desired
    info: (message) => {
      console.log(`[INFO] ${message}`);
    },

    // The `warn` and `error` methods are used to log warnings and errors, respectively. You can customize the format of these messages as needed.
    warn: (message) => {
      console.warn(`[WARN] ${message}`);
    },
    error: (message) => {
      console.error(`[ERROR] ${message}`);
    },
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

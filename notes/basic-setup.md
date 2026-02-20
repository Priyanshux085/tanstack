## Basic setup for the tasnstack projectz

- It runs on vite,
- neccessary file - `vite.config.ts`, `__root.tsx`, `index.tsx`
- `__root.tsx` is the entry point of the application, it renders the main component to the DOM.
- `index.tsx` is the main component of the application, it contains the main logic
- `vite.config.ts` is the configuration file for vite, it contains the configuration for the project, such as the plugins, the server, etc.

### vite.config.ts

```ts
import { defineConfig } from "vite";
import { config } from "./src/lib/config";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Vite server configuration
  server: {

    port: // port number from the config file
  },

  appType: "mpa" | "spa" | "custom", // specify the application type (e.g., "mpa" for multi-page application, "spa" for single-page application, or "custom" for custom setups)

  envDir: "./env", // specify the directory where your environment variables are located (e.g., "./env" or "./config/env")

  environment: {
    baseUrl: {
      // Define how to create the base URL for the application
      dev: {
        // In development mode, you can use a local URL or a mock server
        createEnvironment: async () => {
          // For example, you can return a local URL or fetch it from a mock server
          const data = await fetch("http://localhost:5173/env/baseUrl").then(
            (res) => res.json(),
          );
          return data.baseUrl;
        },
      },
    },
    // Define any environment variables you want to use in your application
    // For example:
    // API_URL: "https://api.example.com",
  },

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

```

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      react({
        babel: {
          plugins: ["babel-plugin-react-compiler"],
        }
      }),
    ],
    resolve: {
      alias: {
        app: "/src/app",
        entities: "/src/entities",
        features: "/src/features",
        pages: "/src/pages",
        shared: "/src/shared",
        widgets: "/src/widgets",
      },
    },
  };
});

import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.tsx"),
      name: "progress-spider",
      fileName: (format) => `progress-spider.${format}.js`,
    },
  },
});

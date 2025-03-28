import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src/**/*.{ts,tsx}"],
      exclude: ["src/**/*.test.ts", "src/**/*.test.tsx"],
      outDir: "dist/types",
      rollupTypes: true,
      insertTypesEntry: true,
      copyDtsFiles: true,
    }),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    lib: {
      entry: fileURLToPath(new URL("src/components/index.ts", import.meta.url)),
      name: "AtInput",
      fileName: (format) => `at-input.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") {
            return "style.css";
          }
          return assetInfo.name || "unknown.asset";
        },
      },
    },
    sourcemap: true,
    minify: "terser",
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  server: {
    port: 3000,
  },
});

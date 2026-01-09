import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    target: "es2020",
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split common vendor chunks
          "vendor-vue": ["vue", "vue-router"],
          "vendor-swiper": ["swiper"],
        },
        // Optimize chunk naming
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`,
      },
    },
    // Minify with terser for better compression
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs
        drop_debugger: true, // Remove debugger statements
        pure_funcs: ["console.log"], // Remove specific function calls
      },
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
      format: {
        comments: false, // Remove comments
      },
    },
  },
  server: {
    port: 5173,
    host: true,
  },
});

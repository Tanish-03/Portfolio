import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginInjectDataLocator from "./plugins/vite-plugin-inject-data-locator";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginInjectDataLocator()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-slot', 'class-variance-authority', 'clsx', 'tailwind-merge'],
          animation: ['framer-motion'],
          icons: ['@iconify/react', 'lucide-react']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@radix-ui/react-slot', 'class-variance-authority', 'clsx', 'tailwind-merge', 'framer-motion', '@iconify/react', 'lucide-react']
  }
});
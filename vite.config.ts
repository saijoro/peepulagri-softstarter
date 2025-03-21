// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";

// export default defineConfig({
//   plugins: [react(), tailwindcss()],

// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Define configuration

export default defineConfig({
  define: {
    "process.env.NODE_ENV": '"development"',
  },

  plugins: [
    react({
      jsxRuntime: "automatic", // Ensure JSX transformation works seamlessly
    }),

  ],
  ssr: {
    noExternal: [
      "highcharts",
      "highcharts-react-official",
      "highcharts/highcharts-more",
      "highcharts/modules/exporting",
      "highcharts/modules/export-data",
      "highcharts/modules/accessibility",
    ],
  },
  resolve: {
    alias: {
      $fonts: path.resolve("/fonts"),
    },
  },
  server: {
    port: 3000, // Specify the development server port
    open: true, // Automatically open the browser
    strictPort: true, // Fail if port 3000 is not available
  },
  build: {
    sourcemap: true, // Generate sourcemaps for debugging
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "@tanstack/react-query", "js-cookie"], // Split vendor libraries into a separate chunk
        },
      },
    },
  },
  optimizeDeps: {
    include: [
      "@tanstack/react-query",
      "@tanstack/react-router",
      "lucide-react",
      "js-cookie",
      "sonner",
    ], // Ensure these libraries are pre-bundled for better performance
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "~/styles/variables.scss";`, // Example of global SCSS variables
      },
    },
  },
});
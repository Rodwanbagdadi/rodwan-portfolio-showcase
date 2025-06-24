import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: 'named',
        ref: true,
      },
    }), // Enhanced SVGR configuration
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    assetsInlineLimit: 0, // Ensure SVGs are processed as files
    rollupOptions: {
      output: {
        manualChunks: {
          // Group SVG assets into a single chunk
          svgIcons: [
            './src/assets/icons/python.svg',
            './src/assets/icons/pandas.svg',
            './src/assets/icons/scikit-learn.svg',
            './src/assets/icons/numpy.svg',
            './src/assets/icons/pytorch.svg',
            './src/assets/icons/tensorflow.svg',
            './src/assets/icons/matplotlib.svg',
            './src/assets/icons/seaborn.svg',
            './src/assets/icons/sql.svg',
            './src/assets/icons/flask.svg',
            './src/assets/icons/vscode.svg',
            './src/assets/icons/jupyter.svg',
            './src/assets/icons/git.svg',
          ]
        },        // Ensure assets have a predictable URL structure in production
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || '';
          let extType = name.split('.').at(1) || '';
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
      },
    },
  },
}));

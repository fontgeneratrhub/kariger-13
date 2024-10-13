import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'public', // Set the root directory to public
  build: {
    outDir: '../dist', // Build files will be output to dist folder
    emptyOutDir: true, // Clear the output directory before each build
  },
});

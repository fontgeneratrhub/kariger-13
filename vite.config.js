import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'public', // Set the root directory to public
  build: {
    outDir: '../dist', // Build output directory
    emptyOutDir: true, // Clear out the output directory before build
  },
});

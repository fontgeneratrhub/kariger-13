import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'public',  // Set the root to the public directory
  build: {
    outDir: '../dist',  // Output build files to a directory outside public
    emptyOutDir: true,  // Clean the output directory before each build
  },
});

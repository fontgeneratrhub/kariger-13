import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'public', // This should be set to the public folder
  build: {
    outDir: '../dist', // Specify where to output the build files
    emptyOutDir: true, // Clear out the output directory before build
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'public',  // Setting the root to public directory
  build: {
    outDir: '../dist', // Output directory outside public folder
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/vexa-landing/',
  plugins: [react()],
  server: { port: 5173 },
});

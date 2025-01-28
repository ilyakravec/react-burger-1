import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "",
  css: {
    modules: {
      localsConvention: "camelCase",
      scopeBehaviour: "local", 
      generateScopedName: "[name]__[local]___[hash:base64:5]", 
    },
  },
});

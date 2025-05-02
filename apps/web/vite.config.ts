import { defineConfig } from 'vite';
import fullReload from 'vite-plugin-full-reload'

export default defineConfig({
  assetsInclude: ['**/*.wasm'],
  server: {
    watch: {
      usePolling: true,
    },
  }, 
  plugins: [
    fullReload(['public/glimmer.tmLanguage.json'])
  ],
});
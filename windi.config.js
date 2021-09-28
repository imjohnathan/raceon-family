import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  preflight: false,
  prefix: 'w-',
  attributify: {
    attributify: true,
    prefix: 'w:',
  },
  plugins: [
    require('windicss/plugin/aspect-ratio'),
  ],  
})
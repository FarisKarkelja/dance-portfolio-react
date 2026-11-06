import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// "./" keeps asset paths relative, so the build works on GitHub Pages
// under any repository name.
export default defineConfig({
  plugins: [react()],
  base: './',
})

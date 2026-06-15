import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'persian-ui-kit/styles': path.resolve(__dirname, '../src/styles/index.css'),
      'persian-ui-kit': path.resolve(__dirname, '../src/index.ts'),
    },
  },
  server: {
    port: 3333,
    open: true,
  },
})

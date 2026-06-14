import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  injectStyle: false,
  loader: {
    '.css': 'copy',
    '.woff2': 'copy',
    '.woff': 'copy',
    '.svg': 'copy',
  },
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    }
  },
})

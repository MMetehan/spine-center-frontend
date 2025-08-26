import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import autoprefixer from 'autoprefixer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    postcss: {
      plugins: [
        autoprefixer
      ]
    }
  },
  optimizeDeps: {
    include: [
      'ckeditor5',
      '@ckeditor/ckeditor5-react',
      'ckeditor5/translations/tr.js'
    ],
    exclude: ['ckeditor5-premium-features']
  },
  build: {
    rollupOptions: {
      external: [],
      output: {
        manualChunks: (id) => {
          if (id.includes('ckeditor5')) {
            return 'ckeditor5';
          }
        }
      }
    },
    commonjsOptions: {
      exclude: ['ckeditor5', '@ckeditor/ckeditor5-react']
    }
  },
  define: {
    'process.env': {}
  }
})

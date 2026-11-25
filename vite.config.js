import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// Two pages, one project:
//   /               -> AiC (India's Invitation Only AI Creator Collective)   src/aic
//   /Debojit_work/  -> Debojit Saha portfolio (BC[f]W)                        src/work
// Each page keeps its own stylesheet, so their global CSS never clashes.
const trailingSlash = () => {
  const fix = (req, res, next) => {
    if (req.url && /^\/Debojit_work(\?.*)?$/i.test(req.url)) {
      res.statusCode = 301
      res.setHeader('Location', '/Debojit_work/')
      return res.end()
    }
    next()
  }
  return {
    name: 'debojit-work-trailing-slash',
    configureServer: s => { s.middlewares.use(fix) },
    configurePreviewServer: s => { s.middlewares.use(fix) },
  }
}

export default defineConfig({
  plugins: [react(), trailingSlash()],
  appType: 'mpa',
  server: { port: 5173 },
  build: {
    rollupOptions: {
      input: {
        aic: resolve(import.meta.dirname, 'index.html'),
        work: resolve(import.meta.dirname, 'Debojit_work/index.html'),
      },
    },
  },
})

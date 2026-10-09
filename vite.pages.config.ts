import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  root: 'pages-src',
  base: './',
  plugins: [react(), {
    name: 'pages-game-server',
    enforce: 'pre',
    transform(code, id) {
      if (id.endsWith('/app/page.tsx')) return code.replaceAll("'/api/game", "'https://reaction-multiplayer.ampleflame1.chatgpt.site/api/game").replace('href="/"', 'href="./"');
    }
  }],
  build: { outDir: '../docs', emptyOutDir: true },
});

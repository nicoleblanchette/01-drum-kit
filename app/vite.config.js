import { defineConfig } from 'vite'

export default defineConfig({
  // GitHub Pages expects an index.html in the root directory
  // so just run npm build before pushing to GitHub and this will rebuild our assets to the root
  build: { outDir: 'docs' },
  // needed for github pages just put the repo name here
  base: '/01-drum-kit/', 
});
import { defineConfig } from 'vite'
import { resolve } from 'path'
import devServer from '@hono/vite-dev-server'
import pages from '@hono/vite-cloudflare-pages'
//import preact from "@preact/preset-vite";
//
export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      /*
      plugins: [ preact() ],
      esbuild: {
        jsxFactory: "h",
        jsxFragment: "Fragment",
        jsxInject: `import { h, Fragment } from 'preact'`
      },      
      */
      build: {
        lib: {
          entry: [
            './src/client.ts',
            './src/client/Page2.ts',
            './src/client/Page3.ts',
            './src/client/Page4.ts',
            './src/client/Page5.ts',
            './src/client/TaskShow.ts',
            './src/client/TaskIndex.ts',
            './src/client/TaskEdit.ts',
            './src/client/Test11.ts',
            './src/client/Test12.ts',
          ],
          formats: ['es'],
          fileName: '[name]',
        },
        rollupOptions: {
          output: {
            dir: './dist/static'
          }
        },
        emptyOutDir: false,
        copyPublicDir: false
      }
    }
  } else {
    return {
      plugins: [
        pages(),
        devServer({
          entry: 'src/index.tsx',
          cf: {
            d1Databases: ['DB'],
            d1Persist: true
          }
        })
      ]
    }
  }
})

import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
let title = "Welcome";
//
export const Layout: FC = (props) => {
//console.log(props);
  if(props.title){title = props.title;}
  return (
    <html>
      <head>
        <title>{title}</title>
        {/* CSS */}
        {html`
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="/styles/main.css" rel="stylesheet">
        <link href="/styles/globals.css" rel="stylesheet">
        `}        
      </head>
      <div class="text-center py-2">
        <a href="/">[ home ]</a>
        {/*
        <a href="/test/test_index"><span class="ps-2">[test]</span></a>
        */}
        <a href="/test3"><span class="ps-2">[ Test3 ]</span></a>
        <a href="/test4"><span class="ps-2">[ Test4 ]</span></a>
        <a href="/tasks"><span class="ps-2">[ Tasks ]</span></a>
      </div>
      <hr />
      <body>
        <div class="container mx-auto my-2 px-8 bg-white">{props.children}</div>
      </body>
    </html>
  )
}

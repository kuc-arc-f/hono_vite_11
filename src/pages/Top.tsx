import {Layout} from './layout';
import { Hono } from 'hono';
import type { FC } from 'hono/jsx'
import { html } from 'hono/html'

const Top: FC<{ messages: string[] }> = (props: { messages: string[] }) => {
  return (
    <Layout title="Welcome Top">
      <h1 class="text-4xl font-bold">Hello Hono !!!</h1>
      <hr />
      <ul>
        {props.messages.map((message) => {
          return (<li class="my-2" >{message}!!</li>)
        })}
      </ul>
    </Layout>
  )
}
export default Top;


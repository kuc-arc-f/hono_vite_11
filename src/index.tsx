import { Hono } from 'hono'
import type { Database } from '@cloudflare/d1'

interface Env {
  DB: Database
}
const app = new Hono()

//routes
import testRouter from './routes/test';
//
import {Layout} from './pages/layout';
import Test1 from './pages/test/App';
import Test3 from './pages/test3/App';
import Test4 from './pages/test4/App';
//
const Top: FC<{ messages: string[] }> = (props: { messages: string[] }) => {
  return (
    <Layout title="Welcome Top">
      <h1 class="text-4xl font-bold">Hello Hono!</h1>
      <hr />
      <ul>
        {props.messages.map((message) => {
          return (<li class="my-2" >{message}!!</li>)
        })}
      </ul>
    </Layout>
  )
}
//
app.get('/', (c) => {
  const messages = ['Good Morning', 'Good Evening', 'Good Night']
  return c.html(<Top messages={messages} />)
})
/* test */
app.get('/test1', async (c) => { 
  return c.html(<Test1 items={[]} />);
});
app.get('/test3', async (c) => { 
  return c.html(<Test3 items={[]} />);
});
app.get('/test4', async (c) => { 
  const items = await testRouter.get_list(c, c.env.DB);
console.log(items);
  return c.html(<Test4 items={items} />);
});
/* tasks */
app.get('/tasks', async (c) => { 
  const items = await testRouter.get_list(c, c.env.DB);
//  return c.html(<TaskIndex items={items} />);
  return Response.json({ret: "OK", data: items});
});

/******
API
******/
app.post('/api/test/create', async (c) => { 
  const body = await c.req.json();
  const resulte = await testRouter.create(body, c.env.DB);
  return c.json(resulte);
});
app.get('/api/test1', async (c) => {
  const result = await  c.env.DB.prepare(`SELECT * FROM Task ORDER BY id DESC`).all();
  console.log(result.results); 
  return Response.json({ret: "OK", data: result.results});
});


export default app

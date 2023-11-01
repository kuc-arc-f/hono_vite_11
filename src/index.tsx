import { Hono } from 'hono'
import type { Database } from '@cloudflare/d1'

interface Env {
  DB: Database
}
const app = new Hono()

import Test1 from './pages/test/App';
import Test3 from './pages/test3/App';

//
app.get('/', (c) => {
  return c.render(<h1>Hello, hono-vite11</h1>)
})
/* test */
app.get('/test1', async (c) => { 
  return c.html(<Test1 items={[]} />);
});
app.get('/test3', async (c) => { 
  return c.html(<Test3 items={[]} />);
});

/******
API
******/
app.get('/api/test1', async (c) => {
  const result = await  c.env.DB.prepare(`SELECT * FROM Task ORDER BY id DESC`).all();
  console.log(result.results); 
  return Response.json({ret: "OK", data: result.results});
});


export default app

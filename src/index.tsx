import { Hono } from 'hono'
import type { Database } from '@cloudflare/d1'
//import { renderer } from './renderer';
interface Env {
  DB: Database
}
const app = new Hono()
//routes
import testRouter from './routes/test';
//pages
import {Layout} from './pages/layout';
import Top from './pages/Top';
import Test1 from './pages/test/App';
import Test3 from './pages/test3/App';
import Test4 from './pages/test4/App';
import Test5 from './pages/test5/App';

//
app.get('/', (c) => {
  const messages = ['Good Morning', 'Good Evening', 'Good Night']
  return c.html(<Top messages={messages} />)
})
/* test */
app.get('/test1', async (c) => { 
  return c.render(<Test1 items={[]} />);
});
app.get('/test3', async (c) => { 
  return c.html(<Test3 items={[]} />);
});
app.get('/test4', async (c) => { 
  const items = await testRouter.get_list(c, c.env.DB);
console.log(items);
  return c.html(<Test4 items={items} />);
});
app.get('/test5', async (c) => { 
  return c.html(<Test5 />);
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

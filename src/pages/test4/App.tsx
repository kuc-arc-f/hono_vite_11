import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
import {Layout} from '../layout';
//
const Test4: FC = (props) => {
console.log(props);
    //
    return (
    <Layout>
        <h1>Test4</h1>
        <p>SSR-List</p>
        <hr class="my-2" />
        <label>Title:</label>
        <input type="text" id="title" 
        class="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"/>
        <br /><button id="save" class="btn-purple ms-2 my-2">Save</button>
        <hr class="my-2" />
        <div id="root"></div>
        <ul>
          {props.items.map((item) => {
            return (
            <li key={item.id}>
              <a href={`/test/${item.id}`}><h3>{item.title}</h3></a>
              <p>id={item.id}</p>
              <hr />
            </li>
            );
          })}
        </ul>        
        <hr />
        {/* JS */}
        {import.meta.env.PROD ? (
            <script  type="module" src="/static/Page4.js"></script>
        ) : (
            <script type="module" src="/src/client/Page4.ts"></script>
        )}        
    </Layout>
    )
}
export default Test4;

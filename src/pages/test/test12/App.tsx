import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
import {Layout} from '../../layout';
import ShowModal from './ShowModal';
//
const Test1: FC = (props) => {
    return (
    <Layout title="Show">
        <div>
            <h1 class="text-4xl font-bold">Test12</h1>
            <button id="show_modal_btn" >[ Test ]</button>
            <hr />
            <ShowModal />

            <hr />
            {/* JS */}
            {import.meta.env.PROD ? (
                <script type="module" src="/static/Test12.js"></script>
            ) : (
                <script type="module" src="/src/client/Test12.ts"></script>
            )}        
        </div>
    </Layout>
    )
}
export default Test1;
/*
{html`
<link href="/static/micromodal.css" rel="stylesheet" />
`}
*/
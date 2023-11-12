
import { marked } from 'marked';
import MicroModal from 'micromodal';
console.log("#Test11.client.ts");

const Test12 = {  
    /**/
    initProc: function() {
        MicroModal.init();
        //console.log("init");
        //btn
        const button = document.querySelector('#show_modal_btn');
        button?.addEventListener('click', async () => {
console.log("show_modal_btn=");
            MicroModal.show('modal-1');
        }); 
    },
}
Test12.initProc();


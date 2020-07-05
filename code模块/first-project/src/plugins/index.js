import tipOptions from './TipBox';
import msgOptions from './MessageBox';


// export default  {
//     install:function(Vue){

//     }
// }

export default {
    install(Vue) {
        const TipBox = Vue.extend(tipOptions);
        window.showTip = Vue.prototype.$showTip = function(msg="默认值",time=3){
            let tip = new TipBox();
            tip.msg = msg;
            tip.time = time;
            tip.$mount();
            document.body.appendChild(tip.$el);
            setTimeout(() => {
                document.body.removeChild(tip.$el);
                tip.$destroy()
            }, time*1000);
        }

        const MsgBox = Vue.extend(msgOptions);
        window.showMsg = Vue.prototype.$showMsg = function(msg="默认值"){
            let message = new MsgBox();
            message.msg = msg;
            message.$mount();
            document.body.appendChild(message.$el);
        }
    }
}
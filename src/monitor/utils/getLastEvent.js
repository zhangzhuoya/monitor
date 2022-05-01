let lastEvent = ""
let arr = ['click','touchstart','mousedown','keydown','mouseover']
arr.forEach((e)=>{
    window.addEventListener(e,(event)=>{
        lastEvent  = event
    },{
        capture: true,//默认为事件捕获阶段
        passive: true,// 不阻止事件冒泡
    })
})
export default function getLastEvent() {
    return lastEvent;
}
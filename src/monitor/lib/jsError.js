import getSelector from "../utils/getSelector";
import getLastEvent from "../utils/getLastEvent"
export function injectJsError() {
    window.addEventListener("error",(event)=>{
        let lastEvent = getLastEvent(event) // 获取最后一个交互事件
        console.log(lastEvent,'lastEventlastEvent');
        let log = {
            kind: "",// 监控指标的大类，
            type: "error",// 报错的小类，
            errorType: "errorType",// js执行错误
            url:"",// 访问哪个路径报错了
            message: event.message,//
            filename:event.filename,//
            position:`${event.lineno}:${event.colno}`,//
            stack: getStack(event.error.stack),//
            selector:lastEvent? getSelector(lastEvent.path):"",// 最后一个操作的元素
        }
        // console.log(event,'eee');
        console.log(log,'log');
        function getStack(event) {
            // event.split("\n")
            // console.log(event.split("\n").slice(1).map(item=>
            //     item.replace(/^\s+at\s+/g,"")
            // ),'event.split(" ")');
           return event.split("\n").slice(1).map(item=>
                item.replace(/^\s+at\s+/g,"")
            ).join("^")
        }
    })
}
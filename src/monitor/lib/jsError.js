import getSelector from "../utils/getSelector";
import getLastEvent from "../utils/getLastEvent"
import SendLog from "../utils/sendMessage"
export function injectJsError() {
    window.addEventListener("error",(event)=>{
        let lastEvent = getLastEvent(event) // 获取最后一个交互事件
        let errorLog = {
            kind: "allError",// 监控指标的大类，
            type: "error",// 报错的小类，
            errorType: "errorType",// js执行错误
            url:"",// 访问哪个路径报错了
            message: event.message,// 错误的信息
            filename:event.filename,// 报错的文件名
            position:`${event.lineno}:${event.colno}`,//
            stack: getStack(event.error.stack),//
            selector:lastEvent? getSelector(lastEvent.path):"",// 最后一个操作的元素
        }
        let sendL = new SendLog(errorLog);
        sendL.send();
        function getStack(event) {
           return event.split("\n").slice(1).map(item=>
                item.replace(/^\s+at\s+/g,"")
            ).join("^")
        }
    })
}
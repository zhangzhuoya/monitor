
const projectName = "zhangzhuo-monitor";
const logstoreName = "zhangzhuo-monitor-store";
const endPort = "cn-beijing.log.aliyuncs.com";
function getUser() {
    return {
        userId: '', 
        title: document.title,
        url: location.url,
        userAgent: navigator.userAgent
    }
}
class SendLog {
    constructor(errorLog) {
        this.errorLog = errorLog;
    }
    send() {
        
        let data = {...getUser(),...this.errorLog};
        let _log_ = {__logs__:[
            data
        ]}
        let body = JSON.stringify(_log_)
        let xhr = new XMLHttpRequest();
        xhr.open('POST', `http://${projectName}.${endPort}/logstores/${logstoreName}/track`,
         true);
        xhr.setRequestHeader('content-type', 'application/json')
        xhr.setRequestHeader('x-log-apiversion', '0.6.0')
        xhr.setRequestHeader('x-log-bodyrawsize', 1234);
        xhr.send(body);
    }
}
export default SendLog;
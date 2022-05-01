export default function getSelector(path) {
    return path.reverse().filter(element=>{
        return element !== window && element !== document
    }).map(i=>{
        let selector = ""
        if(i.id) {
            return i.tagName.toLowerCase() +" #"+ i.id;
        }else if(i.className) {
            console.log('k');
            return i.tagName.toLowerCase() + ' .'+i.className;
        } else {
            selector = i.tagName.toLowerCase();
        }
        return selector
    }).join("");
}
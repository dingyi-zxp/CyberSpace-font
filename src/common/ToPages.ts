import router from "../router/router.ts";

const URLS = {
    HOME:"/",
    SIGNIN:"/signin",
    SIGNUP:"/signup"
}
function toPage(url:string){
    router.push(url)
}


export {
    toPage,
    URLS
}
import router from "../router/router.ts";

const URLS = {
    HOME:"/",
    SIGN_IN:"/signin",
    SIGNUP:"/signup",
    REPOSITORIES:"/repositories",
    EDIT_PROFILE:"/editProfile",
    REPO_PROJECT: "/repopoject"
}
function toPage(url:string){
    router.push(url)
}


export {
    toPage,
    URLS
}
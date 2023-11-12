import {createRouter, createWebHistory} from "vue-router";
import SignIn from "../views/SignIn/SignIn.vue"
import Home from "../views/Home/Home.vue";
import SignUp from "../views/SignUp/SignUp.vue";
import Repositories from "../views/Repositories/Repositories.vue";
import Setting from "../views/EditProfile/Setting.vue";
import RepoProject from "../views/RepoProject/RepoProject.vue";
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/signin',
        component: SignIn
    },
    {
        path:"/signup",
        component: SignUp
    },
    {
        path:"/repositories",
        component: Repositories
    },
    {
        path:"/setting",
        component: Setting
    },
    {
        path:"/repopoject",
        component: RepoProject
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
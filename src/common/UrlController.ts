import axios from "axios";

const baseUrl: string = "http://localhost:7090/api"

const apiPrefix = {
    user: '/user_info',
}

const userApi = {

    LOGIN: apiPrefix.user + "/login_check",
    SIGNUP: apiPrefix.user + "/signup"
}

function apiUrl(method: string): string {
    return baseUrl + method
}

function Post(reqFuncUrl: string, data: any) {
    axios({
        method: 'post',
        url: reqFuncUrl,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
    })
        .then((val: any) => {
            console.log(val)
        })
}

export const UrlController = {
    Post,
}

export const serverApiUrl = {
    userApi,
    apiUrl,
}
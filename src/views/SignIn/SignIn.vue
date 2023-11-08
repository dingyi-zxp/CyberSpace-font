<link rel="stylesheet" href="../../components/Header/index.css">
<script setup lang="ts">

import imgsUrl from "../../common/ImgsUrl.ts";
import {ref} from "vue";
import "./signIn.css"
import {serverApiUrl, UrlController} from "../../common/UrlController.ts"
import router from "../../router/router.ts";
const data = ref({
  logo: imgsUrl.Logo
})

const userSignUpInfo = ref({
  account: '',
  password: ''
})

function SignInCheck() {

  UrlController.Post(
      serverApiUrl.apiUrl(serverApiUrl.userApi.LOGIN),
    userSignUpInfo.value
  )
}

function toHome (){
  router.push("/")
}
</script>

<template>
  <div class="frame font-white">
    <div class="flex-logo" @click="toHome">
      <img :src="data.logo">
    </div>

    <div class="form-frame">
      <div class="form-title flex-center">
        <div class="title-font-size">Sign Up Cyber Space</div>
      </div>

      <div class="form-box flex-center">
        <div class="form-flex-info">
          <div class="form-font">Username or email address</div>
          <input v-model="userSignUpInfo.account" class="form-input-margin form-input input-box"/>
        </div>

        <div class="blue-font-small position-right">
          <a href="/">Forgot password?</a>
        </div>


        <div class="form-flex-info">
          <div class="form-font">Password</div>
          <input type="password" v-model="userSignUpInfo.password" class="form-input-margin form-input input-box"/>
        </div>

        <button @click="SignInCheck" class="button-signIn button-signIn-text">Sign In</button>
      </div>
    </div>
    <div>
    </div>
  </div>
</template>

<style scoped>
</style>
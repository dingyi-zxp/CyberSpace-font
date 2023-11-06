<link rel="stylesheet" href="../../components/Header/index.css">
<script setup lang="ts">

import imgsUrl from "../../common/ImgsUrl.ts";
import {ref} from "vue";
import "./signIn.css"
import axios from "axios";

const data = ref({
  logo: imgsUrl.Logo
})

const userSignUpInfo = ref({
  account: '',
  password: ''
})

function SignInCheck() {
  alert(userSignUpInfo.value.account)
  console.log("SignInCheck")
  axios({
    method: 'post',
    url: 'http://localhost:7090/api/user_info/login_check',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: {
      account: userSignUpInfo.value.account,
      password: userSignUpInfo.value.password
    }
  })
      .then((val) => {
        console.log(val)
      })
}
</script>

<template>
  <div class="frame font-white">
    <div class="flex-logo">
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
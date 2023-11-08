<script setup lang="ts">
import "./SignUp.css"
import Imgs from "../../common/ImgsUrl.ts"
import {ref} from "vue";
import {emailVerify, nameVerify, passwordVerify} from "../../common/Verify.ts";
import router from "../../router/router.ts";

function toHome (){
  router.push("/")
}

const email = ref("")
const emailVerifyVal = ref(true)

const nickName = ref("")
const nickNameVerifyVal = ref(true)

const password = ref("")
const passwordVerifyVal = ref(true)

</script>

<template>
  <div class="frame">
    <div class="flex-right-left padding-suqen background-grey ">
      <div class="flex-size-logo" style="cursor: pointer" @click="toHome">
        <img src="https://ssl-pubpic.51yund.com/1365545192.jpeg"/>
      </div>

      <div class="font-letter-spacing-2 font-green-3 font-signin-right">
        Already have an account? :)
        <a href="/signin">Sign in -></a>
      </div>

    </div>
    <div class="flex-center" style="margin-top: 14vh;">
      <div class="border-dark">
        <div class="signup-hint font-letter-spacing-2">
          <div class="font-grey-1">
            Welcome to Cyber Space! <br/>
            Let's begin the adventure
          </div>
        </div>

        <div class="border-input font-letter-spacing-2">
          <!--          email-->
          <div class="font-green-3 font-slightly-larger">
            Enter your email*
          </div>
          <div class="margin5"></div>
          <div class="flex-input03">
            <img :src="Imgs.leftArrow"/>
            <input class="input03" type="text" @blur="emailVerifyVal = emailVerify(email)" v-model="email"/>
          </div>
          <div v-if="!emailVerifyVal" class="error01 margin5">
            PLEASE ENTER ACCORDING TO THE PLAN
          </div>

          <!--          nick name-->
          <div class="margin-next13"></div>
          <div class="font-green-3 font-slightly-larger">
            Enter your nick name*
          </div>
          <div class="margin5"></div>
          <div class="flex-input03">
            <img :src="Imgs.leftArrow"/>
            <input class="input03" type="text" @blur="nickNameVerifyVal = nameVerify(nickName)" v-model="nickName"/>
          </div>
          <div v-if="!nickNameVerifyVal" class="error01 margin5">
            PLEASE ENTER Name
          </div>

          <!--          password-->
          <div class="margin-next13"></div>
          <div class="font-green-3 font-slightly-larger">
            Enter your password* :> length > 6
          </div>
          <div class="margin5"></div>
          <div class="flex-input03">
            <img :src="Imgs.leftArrow"/>
            <input class="input03" type="password" @blur="passwordVerifyVal = passwordVerify(password)"
                   v-model="password"/>
          </div>
          <div v-if="!passwordVerifyVal" class="error01 margin5">
            PASSWORD ERROR!
          </div>

          <!--          Sign UP button-->
          <div class="margin-next26 ">
            <div class="flex-center">
              <button class="button03 font-letter-spacing-2"> Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.frame {

  top: 0;
  padding: 0;
  margin: 0;
  z-index: -1;
  border: none;
  background-size: cover;
  object-fit: cover;
  height: 100vh;
  background-image: url(https://ssl-pubpic.51yund.com/1366101292.jpeg);
  background-repeat: no-repeat;
}
</style>
<script setup lang="ts">
import "./Repositories.css"
import {ref} from "vue";

const nickName = ref("Neko")

const followers = ref(0)
const following = ref(0)

</script>

<template>
<div class="flex-center margin20p">
<!--  show user info -->
  <div class="flex-grow1">
<!--    avtar-->
    <div class="flex-box">
      <img alt="" class="img-radius" src="https://ssl-pubpic.51yund.com/1366198803.png">
    </div>

<!--    User Info-->
    <div class="margin-next13"></div>
    <div class="font-color-white" style="font-size: 34px;letter-spacing: 1px;font-weight: 400">
      {{nickName}}
    </div>

<!--    Edit profile-->
    <div class="margin-next13"></div>
    <div class="flex-center" >
      <button @click="() => {console.log('hhh')}" class="button-pink padding1260">Edit Profile</button>
    </div>

<!--    followers and following -->
    <div class="margin-next13"></div>
    <div class="font-grey-1 flex-left">
      <a href="" class="flex-left a-pink">
        <img src="https://ssl-pubpic.51yund.com/1366221371.png" alt="" style="margin-right: 3px" />
        <div class="margin03" style="font-size: 14px; font-weight: 600">
          {{followers}} followers
        </div>
      </a>
      ·
      <a class="margin03 a-pink" style="font-size: 14px; font-weight: 600" href="">
        {{following}} following
      </a>
    </div>
  </div>
  <div class="flex-grow2">
    22
  </div>
</div>
</template>

<style scoped>

</style>
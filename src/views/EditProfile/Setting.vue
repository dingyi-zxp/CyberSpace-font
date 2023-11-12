<script setup lang="ts">
import "./Setting.css"
import {ref} from "vue";
import {toPage, URLS} from "../../common/ToPages.ts";

const nickName = ref("Neko Micro")
</script>

<template>

<!--  header-->
  <div class="flex-center font-grey-1 margin2030" >
    <div class="flex-right-left  " style="width: 100%">
<!--      user info-->
      <div class="font-grey-1 flex-row">
        <img alt="" class="img-radius"  src="https://ssl-pubpic.51yund.com/1366198803.png">

        <div class="margin-left20 flex-direction-column">
          <div class="font-grey-2 font-size-big1 font-letter-spacing-2">
            {{nickName}}
          </div>
          <div class="font-letter-spacing-2">
            Your personal account
          </div>
        </div>
      </div>

<!--      To Repo-->
      <div class="flex-align-item-cent" >
        <button
            @click="() => {
              toPage(URLS.REPOSITORIES)
            }"
            style="cursor: pointer"
            class="button-grey padding1220">Go to your repositories</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-radius{
  border-radius: 50%;
  width: 3.7vw !important;
  height: 3.7vw;
  object-fit: cover;
}



</style>
<script setup lang="ts">
import "./RepositoriesItem.css"
import {ref, watch} from "vue";
import {toPage, URLS} from "../../common/ToPages.ts";

const repoName = ref("Movie");
const label = ref("m4")
const updated = ref("3 day")
const status = ref("public")
const starIcon = ref("https://ssl-pubpic.51yund.com/1366562788.png");
const star = ref(false)

watch(
    star,
    () => {
      if (star.value){
        starIcon.value = "https://ssl-pubpic.51yund.com/1366556338.png"
      }else {
        starIcon.value = "https://ssl-pubpic.51yund.com/1366562788.png"
      }

    }
)

const toRepoProject = () => {
  toPage(URLS.REPO_PROJECT)
}
</script>

<template>
  <div class="repoItem ">
    <!--  depair two pair-->
    <div class="">
      <!--
          1. repoName
          2. label
          3. updated
          4. status
       -->
      <div class="cent">
        <div class="flex-right-left">
          <div class="flex-align-item-cent">
            <!--        repoName-->
            <a class="repoName font-blue-01" @click="toRepoProject">{{ repoName }}</a>

            <!--        status-->
            <div class="margin-left10"></div>
            <div class="status1 font-grey-3">
              {{ status }}
            </div>
          </div>

          <!--
              1. star
          -->
          <div class="font-grey-3 flex-align-item-cent"
               style="cursor: pointer"
               @click="() => { star = !star }">
            <div class="star1 flex-align-item-cent">
            <span  style="position: relative; display: inline-block;top: 2px">
              <img :src="starIcon" alt="">
            </span>
              <div style="margin-left: 3px"></div>
              <div style="font-size: 18px; font-weight: 500">star</div>
            </div>
          </div>
        </div>

        <!--
              1. label
              2. updated
        -->
        <div class="flex-align-item-cent  font-grey-3">
          <!--        label-->
          <div class="flex-align-item-cent">
            <span class="label-shape"></span>
            <div class="margin-left5"></div>
            {{ label }}
          </div>

          <div class="margin-left15"></div>
          <!--        update-->
          <div>
            updated {{ updated }} ago
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>
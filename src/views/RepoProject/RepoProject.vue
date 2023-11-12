<script setup lang="ts">
import RepoContent from "../../components/RepoContent/RepoContent.vue";
import "./RepoProject.css"
import {reactive, ref, watch, onMounted} from "vue";

const repoName = ref("TestName")
const repoStatus = ref("public")
const star = ref(false)
const starIcon = ref("https://ssl-pubpic.51yund.com/1366562788.png");

const contentSize = reactive({
  height: 0,
  width: 0
})
watch(
    star,
    () => {
      if (star.value) {
        starIcon.value = "https://ssl-pubpic.51yund.com/1366556338.png"
      } else {
        starIcon.value = "https://ssl-pubpic.51yund.com/1366562788.png"
      }

    }
)

// get screen
onMounted(() => {
  let repoContent = document.getElementById("repoProject")

  // console.log(repoContent.offsetWidth)
  let screenHight = window.screen.height
  let h = repoContent.clientHeight
  // console.log(h,screenHight)
  contentSize.width = repoContent.offsetWidth
  contentSize.height = screenHight - h
  console.log(contentSize)
})
</script>

<template>
  <div class="font-white margin7p"
       style="background-color: #00CFC8; height: 100%"
  >
    <!--
    left:
      avat
      repoName
      repoStatus

    right:
      star
    -->
    <div id="repoProject" class="flex-right-left flex-align-item-cent">
      <!--    left-->
      <div class="flex-align-item-cent ">

      <span>
        <img class="img-small" src="https://ssl-pubpic.51yund.com/1366198803.png" alt=""/>
      </span>

        <div class="margin-left10"></div>
        <span class="font-project-userName">
        {{ repoName }}
      </span>
        <div class="margin-left10"></div>
        <span class="status1">
        {{ repoStatus }}
      </span>
      </div>

      <!--    right-->
      <div class="font-grey-3 flex-align-item-cent"
           style="cursor: pointer"
           @click="() => { star = !star }">
        <div class="star1 flex-align-item-cent">
            <span style="position: relative; display: inline-block;top: 2px">
              <img :src="starIcon" alt="">
            </span>
          <div style="margin-left: 3px"></div>
          <div style="font-size: 18px; font-weight: 500">star</div>
        </div>
      </div>
    </div>

    <div v-if="contentSize.width != 0">
      <RepoContent :contentParameter="contentSize"></RepoContent>
    </div>
  </div>
</template>

<style scoped>

</style>
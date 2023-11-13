<script setup lang="ts">
import "./Lattice.css"
import {ref} from "vue";

const latticeSize = defineProps(["latticeSize"])

// get screen size

const latticeWidth = latticeSize.latticeSize.width * 0.7
console.log(latticeWidth)

const fileName = ref("Name")
const updatedTime = ref("2002/03/04 22:00")

const no_select = ref("https://ssl-pubpic.51yund.com/1366711168.png")
const select = ref("https://ssl-pubpic.51yund.com/1366711942.png")

const mouseOn = ref(false)
</script>

<template>
  <div :style="{width:latticeWidth + 'px'}">
    <!--    file or folder-->
    <div @mouseover="() => { mouseOn = true}" @mouseleave="() => mouseOn = false"
         style="width: 100% !important; overflow: hidden">

      <div class="cursor-point paddingtb5 " style="z-index: 1; position: relative">
        <div v-if="mouseOn" style="z-index: 1;">
          <div  class="absolute-left margin-left10" >
            <img style="width: 30px; height: 30px; background-color: #0C162D" :src=" no_select" alt="">

          </div>
        </div>
        <div class="LatticeObject" style="z-index: 1">

        </div>
        <!--      icon-->
        <div class="flex-justify-center margintop2">
          <img class="img-basic"
               src="https://img.alicdn.com/imgextra/i1/O1CN01rGJZac1Zn37NL70IT_!!6000000003238-2-tps-230-180.png"
               alt="">
        </div>

        <!--      file name-->
        <div class=" margintop10 flex-justify-center file-name-font ">
          {{ fileName }}
        </div>
        <!--      updated time-->
        <div class="flex-justify-center font-grey-3 file-updated-font">
          {{ updatedTime }}
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>
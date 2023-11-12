<script setup lang="ts">
import "./Lattice.css"
import {ref} from "vue";

const latticeSize = defineProps(["latticeSize"])

// get screen size

const latticeWidth = latticeSize.latticeSize.width
console.log(latticeWidth)

const fileName  = ref( "Name")
const updatedTime = ref("2002/03/04 22:00")
</script>

<template>
  <div  :style="{width:latticeWidth + 'px'}">
    <!--    file or folder-->
    <div style="width: 90% !important; overflow: hidden" >
      <!--      icon-->
      <div class="flex-justify-center margintop2">
        <img class="img-basic" src="https://img.alicdn.com/imgextra/i1/O1CN01rGJZac1Zn37NL70IT_!!6000000003238-2-tps-230-180.png" alt="">
      </div>

      <!--      file name-->
      <div class=" margintop10 flex-justify-center file-name-font ">
        {{fileName}}
      </div>
      <!--      updated time-->
      <div class="flex-justify-center font-grey-3 file-updated-font">
        {{updatedTime}}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
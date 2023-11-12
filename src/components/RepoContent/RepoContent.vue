<script setup lang="ts">
import Lattice from "../Lattice/Lattice.vue";
import {reactive} from "vue";

const contentParameter = defineProps(['contentParameter'])
console.log(contentParameter.contentParameter)
const contentSize = contentParameter.contentParameter
console.log(contentSize.height)

let latticeWidth = contentSize.width / 6
const latticeSize = reactive({
  width: latticeWidth
})
</script>

<template>
  <div style="">
    <div class="">

      <Lattice :lattice-size="latticeSize"></Lattice>

    </div>
  </div>
</template>

<style scoped>

</style>
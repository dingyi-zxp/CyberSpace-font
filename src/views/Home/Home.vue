
<script setup lang="ts">
import Header from "../../components/Header/index.vue"
</script>

<template>
  <div class='homeWall'>
    <Header></Header>
  </div>
</template>

<style scoped>
.homeWall {
  top: 0;
  padding: 0;
  margin: 0;
  z-index: -1;
  border: none;
  background-size: cover;
  object-fit: cover;
  height: 100vh;
  background-image: url(https://ssl-pubpic.51yund.com/1365545168.jpg);
  background-repeat: no-repeat;
}

</style>
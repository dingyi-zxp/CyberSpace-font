<script lang="ts">
import './index.css'

export default {
  methods: {
    toSignIn(){
      this.$router.push('/signin')
    },
    toSignUp(){
      this.$router.push('/signup')
    }
  }
}
</script>

<template>
  <div class="container_header font-nav">
    <div class=" flex-size-logo">
      <img class="logo-size" src='https://ssl-pubpic.51yund.com/1365545192.jpeg' />

    </div>
    <div class='flex-space'>
      <div class='flex-nav-item'>
        <div class='nav-item cursor-point'>Product</div>
        <div class='nav-item cursor-point'>Solutions</div>
        <div class='nav-item cursor-point'>Open Source</div>
        <div class='nav-item cursor-point'>Pricing</div>
      </div>

      <div class ='flex-nav-item'>
        <div class='nav-item cursor-point' @click="toSignIn">Sign in</div>
        <div class='nav-item cursor-point' @click="toSignUp" style="border: solid white; border-width: 1px; padding: 3px 5px; border-radius:6px;" >Sign up</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
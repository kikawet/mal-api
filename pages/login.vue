<template>
  <div>
    <h1>login page</h1>

    <h1 @click="$auth.loginWith('mal')">MyAnimeList</h1>
    <h1 @click="$auth.loginWith('discord')">Discord</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  mounted() {
    // const { code } = this.$route.query
    console.log(`loggeind: ${this.$auth.loggedIn}`)
    // if (!this.$auth.loggedIn)
    //   this.$auth.loginWith('mal').then(() => {
    //     console.log(`Logged In! : ${this.$auth.loggedIn}`)
    //   })
  },
})
</script>

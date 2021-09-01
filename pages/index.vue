<template>
  <h1>main page</h1>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  middleware: 'auth',
})
</script>

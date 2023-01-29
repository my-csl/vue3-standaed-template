<template>
  <img
    v-for="i in 10"
    :key="i"
    src="https://sagfdsgkhdjhgldjglwejglwejljegwljweljewljew"
    width="125"
    height="125"
  />
  <RouterView></RouterView>
</template>

<script setup lang="ts">
console.log(import.meta.env.VITE_APP_BASE_URL)
console.log(import.meta.env.VITE_APP_TITLE)
console.log(import.meta.env.MODE)
</script>

<style scoped></style>

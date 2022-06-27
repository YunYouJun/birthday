<script lang="ts" setup>
withDefaults(defineProps<{
  name: string
  msg: string
}>(), {
  name: 'You',
  msg: 'Happy Birthday!',
})
</script>

<template>
  <div class="wish transition animate-slow animate-fadeIn" text="center">
    <h1 text="3xl" font="light" m="2">
      {{ name }}
    </h1>
    <h2 text="3xl" font="normal">
      {{ msg }}
    </h2>
  </div>
</template>

<style lang="scss">
.wish{
  color: #8b6a60;
  font-family: "Lato", "Roboto" sans-serif;
}
</style>

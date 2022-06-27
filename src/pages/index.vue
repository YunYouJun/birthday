<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useSound } from '@vueuse/sound'
import bubble from '~/utils/bubble'

const birthdayMusic = useSound('/audio/happy-birthday.mp3')

const route = useRoute()
const name = route.query.name as string
const msg = route.query.msg as string

const toggleBgMusic = () => {
  birthdayMusic.isPlaying.value ? birthdayMusic.pause() : birthdayMusic.play()
}

onMounted(() => {
  bubble()
})
</script>

<template>
  <button class="music-btn absolute right-6 top-6 rounded-full" bg="transparent" p="1" text="lg" @click="toggleBgMusic">
    <div v-if="birthdayMusic.isPlaying.value" i-mdi-music-note-outline class="animate-spin animate-slow" />
    <div v-else i-mdi-music-note-off-outline />
  </button>
  <div class="card" h="screen" @click="toggleBgMusic">
    <div id="bg">
      <canvas ref="bg" />
      <canvas ref="fg1" />
      <canvas ref="fg2" />
    </div>
    <BirthdayCake />
    <BestWish :name="name" :msg="msg" />
  </div>
</template>

<style lang="scss" scoped>
/* BACKGROUND */
#bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

#bg canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

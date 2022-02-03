<template>
  <button class="music-btn absolute right-6 top-6 rounded-full" p="1" text="lg" @click="toggleBgMusic">
    <i-mdi-music-note-outline v-if="birthdayMusic.isPlaying.value" class="animate-spin animate-slow" />
    <i-mdi-music-note-off-outline v-else />
  </button>
  <div class="card" h="screen" @click="toggleBgMusic">
    <div id="bg">
      <canvas ref="bg" />
      <canvas ref="fg1" />
      <canvas ref="fg2" />
    </div>
    <BirthdayCake />
    <BestWish :name="name" :msg="msg" />
    <audio
      ref="music"
      :src="audioUrl"
      autoplay
      loop
    >
      您的浏览器不支持 audio 标签。
    </audio>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useSound } from '@vueuse/sound'
import bubble from '~/utils/bubble'

const birthdayMusic = useSound('/audio/happy-birthday.mp3')

const audioUrl = ref('/audio/happy-birthday.mp3')

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

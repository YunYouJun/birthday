<template>
  <div class="card" @click="playMusic">
    <div id="bg">
      <canvas ref="bg"></canvas>
      <canvas ref="fg1"></canvas>
      <canvas ref="fg2"></canvas>
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
import bubble from '~/utils/bubble'

const audioUrl = ref('/audio/happy-birthday.mp3')

const route = useRoute()
const name = route.query.name as string
const msg = route.query.msg as string

const music = ref<HTMLAudioElement>()

/**
 * 播放音乐
 */
function playMusic() {
  music.value?.play()
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

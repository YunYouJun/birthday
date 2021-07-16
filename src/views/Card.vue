<template>
  <div class="card" @click="playMusic">
    <div id="bg">
      <canvas></canvas>
      <canvas></canvas>
      <canvas></canvas>
    </div>
    <BirthdayCake />
    <BestWish :name="name" :msg="msg" />
    <audio
      ref="music"
      :src="`${publicPath}audio/happy-birthday.mp3`"
      autoplay
      loop
    >
      您的浏览器不支持 audio 标签。
    </audio>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

import BirthdayCake from "@/components/BirthdayCake.vue";
import BestWish from "@/components/BestWish.vue";
import bubble from "@/assets/utils/bubble";

import { useRoute } from "vue-router";

export default defineComponent({
  name: "card",
  components: {
    BirthdayCake,
    BestWish,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  setup() {
    const route = useRoute();
    const name = route.query.name as string;
    const msg = route.query.msg as string;

    const music = ref<HTMLAudioElement | null>(null);

    function playMusic() {
      music.value?.play();
    }

    onMounted(() => {
      bubble();
    });

    return {
      name,
      msg,

      music,

      playMusic,
    };
  },
});
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

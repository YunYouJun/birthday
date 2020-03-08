<template>
  <div class="card" @click="playMusic">
    <div id="bg">
      <canvas></canvas>
      <canvas></canvas>
      <canvas></canvas>
    </div>
    <BirthdayCake />
    <BestWish :name="name" :msg="msg" />
    <audio ref="music" src="../assets/audio/happy-birthday.mp3" autoplay loop>
      您的浏览器不支持 audio 标签。
    </audio>
  </div>
</template>

<script>
// @ is an alias to /src
import BirthdayCake from "@/components/BirthdayCake.vue";
import BestWish from "@/components/BestWish.vue";
import bubble from "@/assets/js/bubble.js";

export default {
  name: "card",
  components: {
    BirthdayCake,
    BestWish
  },
  data() {
    return {
      name: this.$route.query.name,
      msg: this.$route.query.msg
    };
  },
  mounted() {
    bubble();
  },
  methods: {
    playMusic() {
      this.$refs.music.play();
    }
  }
};
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

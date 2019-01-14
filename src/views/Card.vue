<template>
  <div class="card">
    <div id="bg">
      <canvas></canvas>
      <canvas></canvas>
      <canvas></canvas>
    </div>
    <BirthdayCake :name="name" :msg="msg"/>
  </div>
</template>

<script>
// @ is an alias to /src
import BirthdayCake from '@/components/BirthdayCake.vue'
import bubble from '@/assets/js/bubble.js'

export default {
  name: 'card',
  components: {
    BirthdayCake
  },
  data () {
    return {
      name: this.$route.query.name,
      msg: this.$route.query.msg
    }
  },
  mounted () {
    bubble()
  }
}
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

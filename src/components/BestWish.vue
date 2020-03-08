<template>
  <div class="text">
    <h1>{{ name }}</h1>
    <h1>{{ msg }}</h1>
  </div>
</template>

<style lang="scss">
.text {
  color: #8b6a60;
  font-family: "Lato", sans-serif;
  text-align: center;
  h1 {
    font-weight: lighter;
  }
  animation-name: fadeIn;
  animation-duration: 2s;
  animation-timing-function: ease-in;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

<script>
export default {
  name: "BestWish",
  props: {
    name: {
      default: "You",
      type: String
    },
    msg: {
      default: "Happy Birthday!",
      type: String
    }
  }
};
</script>

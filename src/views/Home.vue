<template>
  <div class="home">
    <BirthdayCake :name="name"/>
  </div>
</template>

<script>
// @ is an alias to /src
import BirthdayCake from '@/components/BirthdayCake.vue'

export default {
  name: 'home',
  components: {
    BirthdayCake
  },
  data () {
    return {
      name: ''
    }
  }
}
</script>

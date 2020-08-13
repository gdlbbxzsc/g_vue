<template>
  <div class="hello">
     vue的世界欢迎您
  </div>
</template>

<script>
export default {
  mounted () {
    // eslint-disable-next-line no-unused-vars
    let router = this.$router
    setTimeout(() => { this.$router.push({name: 'login'}) }, 1 * 1000)
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    goMain () {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

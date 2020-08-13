<template>
<div>
  <router-view />

  <van-tabbar route  v-model="active" active-color="#f00" inactive-color="#000">
    <van-tabbar-item replace to='/main/home' icon="home-o">
      首页1
    </van-tabbar-item>
    <van-tabbar-item replace to='/main/mine' icon="search">
      我的2
    </van-tabbar-item>
  </van-tabbar></div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'

export default {
  name: 'Main',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div  class="root">
    <input type="text" class="account" v-model="account" :placeholder="accountHint"/>
    <input type="password" class="password" v-model="password"/>

    <div  class="btn-group">
    <input type="button" value="登录" @click="loginClick"/>
    <input type="button" value="注册"/>
    </div>

    <label>sdfsdfsdfsdf</label>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      account: 'gdl12',
      accountHint: '请输入名称',
      password: '1234565',
      aa: true
    }
  },
  methods: {
    loginClick () {
      this.$router.push({name: 'home'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .root {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction:column  ;
  }
  .root .account,
  .root .password{
 border: 0;
    outline: 0;
    padding: 10px;
    border-bottom: solid 1px red;
  }
  .root .account{
    padding-left: 24px;
    background-repeat: no-repeat;
    background-position: left;
    background-size: 18px 18px;
    background-image: url(../assets/images/ico_login_username.png);
  }
  .root .password{
    margin-top: 5px;
  }
 .btn-group{
   margin-top: 10px;
   display: -webkit-flex; /* Safari */
   display: flex;
   justify-content:space-around;
 }
  .btn-group input[type='button']{
    flex-grow:1;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 50px;
    border: 0;
    outline: 0;
  background-color: pink;
  }
</style>

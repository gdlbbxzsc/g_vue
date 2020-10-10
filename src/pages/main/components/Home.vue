<template>
  <div class="bg">
    <header>
      <div class="titlebar">
        <img src="https://img.yzcdn.cn/vant/cat.jpeg"  class="titlebar-back" width="40" height="40" >
        <span class="titlebar-title">我爱你sdf中国</span>
      </div>
    </header>
    <section>
      <div class="shareuser-info">
        <img src="https://img.yzcdn.cn/vant/cat.jpeg"  class="user-pic" width="30" height="30" >
        <span class="user-content">我爱你 中国</span>
      </div>
    </section>
    <section >
      <div >
        <img src="../../../assets/images/webregistermoney.png"    width="100%"   >
      </div>
    </section>
    <section class="input_block">
      <div class="input-group">
        <van-field class="phone-input" v-model="tel" type="tel"  />
      </div>
      <div class="input-group1">
        <div class="yzm">
          <van-field class="phone-input" v-model="yzm" type="tel"  />
        </div>
        <div class="yzm-img">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg"    width="88px" height="44px"  >
        </div>
      </div>

      <div class="input-group2">
        <div class="code">
          <van-field class="phone-input" v-model="code" type="tel"  />
        </div>
        <div class="code-btn">
          <van-button round type="info">圆形按钮</van-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Field, Image, Button } from 'vant'

export default {
  name: 'Main',
  components: {
    [Image.name]: Image,
    [Button.name]: Button,
    [Field.name]: Field
  },
  data () {
    return {
      tel: '139',
      yzm: '12345',
      code: '1111'
    }
  }
}
</script>

<style scoped>

  .bg {
    background-image: linear-gradient(#EF6A27, #E73D26);
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  .titlebar {
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
  }

  .titlebar .titlebar-title {
    margin-left: 20px;
  }

  .shareuser-info {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }
  .shareuser-info .user-content {
    margin-left: 10px;
  }

  .input_block{
    /*box-sizing: border-box;*/
    /*width:100%;*/
  }
  .input-group {
    box-sizing: border-box;
    width:100%;
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 15px;
  }
  .input-group .phone-input {
    border-radius:50px;
  }

  .input-group1 {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width:100%;
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 15px;
  }
  .input-group1 .yzm   {
    flex: 1;
  }
  .input-group1 .yzm .phone-input {
    border-radius:50px;
  }
  .input-group1 .yzm-img   {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    flex: 1;
    box-sizing: border-box;
    width:100%;
    padding-right: 20px;
    padding-left: 20px;
  }

  .input-group2 {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width:100%;
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 15px;
  }
  .input-group2 .code   {
    flex: 1;
  }
  .input-group2 .code .phone-input {
    border-radius:50px;
  }
  .input-group2 .code-btn   {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    flex: 1;
    box-sizing: border-box;
    width:100%;
    padding-left: 40px;
  }
  .input-group2 .code-btn van-button  {
    width:100%;
  }

</style>

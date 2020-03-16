<template>
  <div class="myHeader">
    <div class="left">
      <span class="iconfont"><font color="#2AB795" size="5">&#xe626;</font></span>
    </div>
    <div class="content">
      <a style="color: black">Mall商城</a>
    </div>
    <div class="right">
      <span class="iconfont"><font color="#2AB795">&#xe619;</font></span>
      <span class="iconfont"><font color="#2AB795">&#xe8bc;</font></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaHeader'
}
</script>

<style lang="less" scoped>
  .myHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 1rem;
    margin-top: 0rem;
    /*padding: 0 0.2rem;*/
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    background: #fff;
    .left {
      display: flex;
      flex-direction: row;
      align-items: center;
      .logo {
        width: 0.8rem;
        height: 0.8rem;
      }
      .title {
        padding-left: 0.133333rem;
        font-size: 0.75rem;
        color: #8e8e8e;
      }
    }
    .content {
      text-align: center;
      font-family:Georgia;
      font-size: 2em;
    }
    .right {
      span {
        font-size: 0.75rem;
      }
    }
  }
</style>

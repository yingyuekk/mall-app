<template>
<div class="div-l">
  <div class="div-inline">
    <span class="iconfont"><font color="#daa520" size="6" style="padding: 0.2rem">&#xe6b1;</font></span>
      <br/>
    <div class="div-text"><span>话题</span></div>
  </div>
  <div class="div-inline">
    <span class="iconfont"><font color="#daa520" size="6">&#xe603;</font></span>
    <br/>
    <div class="div-text"><span>优选</span></div>
  </div>
  <div class="div-inline">
    <span class="iconfont"><font color="#daa520" size="6">&#xe68f;</font></span>
    <br/>
    <div class="div-text"><span>特惠</span></div>
  </div>
  <div class="div-inline">
    <span class="iconfont"><font color="#daa520" size="6">&#xe604;</font></span>
    <br/>
    <div class="div-text"><span>签到</span></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Discounts'
}
</script>

<style lang="less" scoped>
.div-l {
  width: 100%;
  height: 2rem;
  background: white ;
}
.div-inline {
  float:left;
  width: 25%;
  height: 1.5rem;
  margin-top: 0.3rem;
  text-align: center;
}
.div-text {
  font-size: 0.5rem;
  margin-top: 0.2rem;
}
</style>

<template>
  <div class="div-announce-a">
    <div class="div-announce-b">
      <span class="iconfont"><font color="#FC4024">&#xe634;</font></span>
      <span style="color: #999999">自营家电清洗服务上线</span>
    </div>
    <div class="div-announce-b1">
      <span style="margin:0 auto;text-align:center">详情</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Announce'
}
</script>

<style lang="less" scoped>
.div-announce-a {
  width: 100%;
  height: 1rem;
  background: white ;
  border:1px solid #CCCCCC;
  font-size: 0.5rem;
}
.div-announce-b {
  width: 50%;
  height: 1rem;
  margin-top: 0.25rem;
  margin-left: 0.5rem;
  font-size: 0.3rem;
  float: left;
}
.div-announce-b1 {
  width: 15%;
  height: 0.5rem;
  margin-top: 0.25rem;
  margin-right: 0.5rem;
  border:1px solid #2AB795;
  float: right;
  text-align: center;
  font-size: 0.4rem;
  color: #2AB795;
  line-height: 0.5rem;
  border-top-right-radius: 0.1rem;
  border-top-left-radius: 0.1rem;
  border-bottom-left-radius: 0.1rem;
  border-bottom-right-radius: 0.1rem;
}
</style>

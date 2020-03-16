<template>
<div class="recommand-subject-list">
  <div class="recommand-subject-title">
    <span class="recommand-subject-title-s">专题精选</span>
    <div class="recommand-subject-title-d">
      <span style="color: #999999;width: 80%;margin-left: 40%">更多推荐</span>
      <span class="iconfont" style="width: 20%"><font color="#999999">&#xe60e;</font></span>
    </div>
  </div>
  <ul>
    <li v-for="(RecommandSubject,index) in json.list" :key="index">
      <div>
        <img :src="RecommandSubject.src"/>
      </div>
      <div class="recommand-subject-list-title">
        <div class="recommand-subject-list-title-t">
          <span style="color: #333333;margin-top: 0.05rem">{{RecommandSubject.name}}</span>
          <span style="color: #FB0017;margin-left: 10%">￥{{RecommandSubject.price}}元起</span>
        </div>
        <span style="color: #999999;margin-top: 0.05rem">{{RecommandSubject.title}}</span>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'RecommandSubject',
  data () {
    return {
      json: {
        list: [
          {
            name: '五个春天的生活新提案',
            title: '餐厨起居好物',
            price: '99',
            src: 'https://img.alicdn.com/tfs/TB1DIGMxET1gK0jSZFrXXcNCXXa-520-280.png_q90_.webp'
          }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
.recommand-subject-list {
  width: 100%;
  height: 8.5rem;
  border:1px solid #CCCCCC;
  margin-top: 0.2rem;
}
.recommand-subject-list ul {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
}
.recommand-subject-list li {
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 0.05rem;
  list-style: none;
}
.recommand-subject-list img {
  width: 100%;
  height: 50%;
  margin-left: 0rem;
}
.recommand-subject-title {
  width: 100%;
  height: 1.5rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.recommand-subject-title-d {
  width: 40%;
  font-size: 0.5rem;
  display: flex;
  flex-flow: row nowrap;
  margin-right: 0.5rem;
}
.recommand-subject-title-s {
  width: 60%;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  font-size: 0.6rem;
}
.recommand-subject-list-title {
  width: 100%;
  display: flex;
  flex-flow: column;
  margin-left: 5%;
  font-size: 0.6rem;
}
.recommand-subject-list-title-t {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
}
</style>

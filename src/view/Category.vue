<template>
<div class="category">
  <div class="category-main">
    <div class="wrapper" ref="wrapper">
      <ul class="content">
        <!-- 分类列表 -->
        <li v-for="(item,index) in detialList" :key="index" @click="listClick(index)" :class="index===active?'active':''">{{item.list}}</li>
      </ul>
    </div>
    <div class="detialList_box">
      <!-- 分类详情列表 -->
      <ul class="detialList clearfix" v-for="(item,index) in detialList" v-show="index===active" :key="index">
        <li v-for="(item,index) in item.detial" :key="index">
          <div class="category-icon">
          <i class="iconfont" style="color: #dad57b;font-size: 1rem" v-html="item.src"></i>
          <p style="margin-top: 0.2rem;font-size: 0.4rem;color: #797979">{{item.text}}</p>
          </div>
        </li>
      </ul>
      <div class="padding_color"></div>
    </div>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Category',
  data () {
    return {
      detialList: [ // 分类数据
        {
          list: '服装',
          detial: [
            {src: '&#xe61d;', text: '内裤'},
            {src: '&#xe61c;', text: '内衣'},
            {src: '&#xe61e;', text: '袜子'},
            {src: '&#xe67b;', text: '大衣'},
            {src: '&#xe620;', text: '家居服'},
            {src: '&#xe60f;', text: '衬衫'}
          ]
        },
        {
          list: '餐厨',
          detial: [
            {src: '&#xe62f;', text: '锅具'},
            {src: '&#xe614;', text: '刀铲'},
            {src: '&#xe613;', text: '功能厨具'},
            {src: '&#xe64b;', text: '餐具'},
            {src: '&#xe630;', text: '杯壶'}
          ]
        },
        {
          list: '配件',
          detial: [
            {src: '&#xe61d;', text: '内裤'},
            {src: '&#xe61c;', text: '内衣'},
            {src: '&#xe61e;', text: '袜子'},
            {src: '&#xe67b;', text: '大衣'},
            {src: '&#xe620;', text: '家居服'},
            {src: '&#xe60f;', text: '衬衫'}
          ]
        },
        {
          list: '居家',
          detial: [
            {src: '&#xe62f;', text: '锅具'},
            {src: '&#xe614;', text: '刀铲'},
            {src: '&#xe613;', text: '功能厨具'},
            {src: '&#xe64b;', text: '餐具'},
            {src: '&#xe630;', text: '杯壶'}
          ]
        }
      ],
      active: 0,
      detialtext: '服装'
    }
  },
  methods: {
    listClick (index) { // 显示隐藏分类详情
      this.active = index
      this.detialtext = index
    }
  },
  created () {
    // mockjs模拟数据
    // this.$http.get("/detial").then(res => {
    //   this.detialList=res.data.detials
    // });
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, { // better-scroll初始化
        scrollY, // 竖向滚动
        click: true // 滚动区域可触发点击事件
      })
    })
  }
}
</script>

<style lang="less" scoped>
.category {
  width: 100%;
  height: 80%;
  position: absolute;
  top: 1rem;
  bottom: 50px;  /*关键*/
  overflow: hidden;
  z-index: 1;
}
.category-main {
  display: flex;
  height: 100%;
}
.wrapper {
  overflow: hidden;
  width: 80px;
  height: 100%;
  background-color: #fff;
  .content {
    padding-top: 40px;
    padding-bottom: 80px;
    li {
      height: 40px;
      width: 80px;
      line-height: 40px;
      padding-left: 10px;
      text-align: left;
      background-color: #fff;
      border: 1px solid #efeff4;
    }
    .active {
      background-color: #efeff4;
      border-left: 2px solid #ff0000;
    }
  }
}
.detialList_box {
  flex: 1;
  overflow: hidden;
  margin: 0 8px;
  background-color: #fff;
  .detialList {
    padding-bottom: 20px;
    li {
      float: left;
      width: 33.3333333%;
    }
  }
  .padding_color {
    background-color: #efeff4;
    height: 100%;
  }
}
.category-icon {
  width: 1rem;
  height: 1rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 50%;
  margin-bottom: 0.8rem;
  margin-left: 0.5rem;
}
</style>

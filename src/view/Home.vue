<template>
  <div class="home">
    <!-- 内容 -->
    <div ref="wrapper" class="wrapper">
      <div class="content">
        <!-- 轮播图 -->
        <carousel :carouselData="carouselData"></carousel>
        <!-- 特惠 -->
        <discounts></discounts>
        <!-- 通告 -->
        <announce></announce>
        <!-- 品牌制造商直供 -->
        <brand></brand>
        <!-- 秒杀专区 -->
        <promotion></promotion>
        <!-- 新鲜好物 -->
        <new-product></new-product>
        <!-- 人气推荐 -->
        <recomand></recomand>
        <!-- 专题精选 -->
        <recommand-subject></recommand-subject>
        <!-- 猜你喜欢 -->
        <guess-product></guess-product>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import Carousel from '../components/home/Carousel'
import Discounts from '../components/home/Discounts'
import Announce from '../components/home/Announce'
import Brand from '../components/home/Brand'
import Promotion from '../components/home/Promotion'
import NewProduct from '../components/home/NewProduct'
import Recomand from '../components/home/Recomand'
import RecommandSubject from '../components/home/RecommandSubject'
import GuessProduct from '../components/home/GuessProduct'
import TabBar from '../components/TabBar'
import {home} from '@/api/home/home'
export default {
  me: 'Home',
  data () {
    return {
      carouselData: [],
      brandData: [],
      promotionData: [],
      NewProductData: [],
      recomandData: [],
      RecommandSubjectData: []
    }
  },
  components: {
    TabBar,
    GuessProduct,
    RecommandSubject,
    Carousel,
    Discounts,
    Announce,
    Brand,
    Promotion,
    NewProduct,
    Recomand,
    // eslint-disable-next-line no-dupe-keys
    RecommandSubject,
    // eslint-disable-next-line no-dupe-keys
    GuessProduct,
    // eslint-disable-next-line no-dupe-keys
    TabBar
  },
  mounted () {
    // eslint-disable-next-line no-unused-expressions,no-sequences
    this.getHome(),
    this.$nextTick(() => {
      // $refs绑定元素
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          // 开启点击事件 默认为false
          click: true
        })
        // console.log(this.scroll)
      } else if (!this.$refs.wrapper) {

      } else {
        this.scroll.refresh()
      }
    })
  },
  methods: {
    getHome () {
      home().then((response) => {
        this.carouselData = response.data.data.advertiseList
        console.log(response.data.data)
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import "~styles/variables.less";
.home {
  background: #f3f4f5;
}
.wrapper{
  width: 100%;
  height: 80%;
  position: absolute;
  top: 1rem;
  bottom: 50px;  /*关键*/
  overflow: hidden;
  z-index: 1;
}
</style>

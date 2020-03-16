<template>
<div class="carousel">
  <!-- slides -->
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide class="swiper-item" v-for='item of carouselData' :key='item.id'>
      <a :href='item.url'>
      <img class='myswiper_img' :src='item.pic' :alt="item.name" />
      </a>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Carousel',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      }
    }
  },
  props: {
    'carouselData': Array
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    console.log('this is current instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style lang="less" scoped>
.carousel {
  /deep/ .swiper-pagination-bullet-active {
    background: #fff;
  }
  .myswiper_img {
    width: 100%;
    height: 5rem;
  }
}
</style>

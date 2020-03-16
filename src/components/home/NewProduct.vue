<template>
  <div class="new-product-list">
    <div class="new-product-title">
      <span class="new-product-title-s">新鲜好物</span>
      <div class="new-product-title-d">
        <span style="color: #999999;width: 80%;margin-left: 40%">更多推荐</span>
        <span class="iconfont" style="width: 20%"><font color="#999999">&#xe60e;</font></span>
      </div>
    </div>
    <ul>
      <li v-for="(NewProduct,index) in json.list" :key="index">
        <div>
          <div>
            <span style="float: right" class="iconfont"><font color="#FD994B">&#xe785;</font></span>
          </div>
          <div>
            <img :src="NewProduct.src"/>
          </div>
        </div>
        <div class="new-product-list-title">
          <span style="color: #333333;margin-top: 0.05rem">{{NewProduct.name}}</span>
          <span style="color: #999999;margin-top: 0.05rem">{{NewProduct.title}}</span>
          <span style="color: #FB0017;">￥{{NewProduct.price}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NewProduct',
  data () {
    return {
      json: {
        list: [
          {
            name: '银色星芒刺绣网纱底裤',
            title: '薄如蝉翼，丝滑如肌肤',
            price: '99',
            src: 'https://img.alicdn.com/imgextra/i1/6000000007002/O1CN018rBzle21axqA8S2mv_!!6000000007002-2-tblive.png_180x180q90.jpg_.webp'
          },
          {
            name: '银色星芒刺绣网纱底裤',
            title: '薄如蝉翼，丝滑如肌肤',
            price: '99',
            src: 'https://img.alicdn.com/imgextra/i3/O1CN01CbCeh11bwmhQAQUiS_!!0-tbCommonAudio.jpg_180x180q90.jpg_.webp'
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.new-product-list {
  width: 100%;
  height: 6rem;
  border:1px solid #CCCCCC;
  margin-top: 0.2rem;
}
.new-product-list  ul{
  width: 100%;
  display: flex;
  flex-flow: row wrap;
}
.new-product-list li {
  width: 42%;
  padding: 0.05rem;
  list-style: none;
  margin-right: 0.3rem;
  margin-left: 0.3rem;
}
.new-product-list img {
  width: 100%;
  height: 3rem;
}
.new-product-list-title {
  display: flex;
  flex-flow: column;
  align-items: center;
  font-size: 0.5rem;
}
.new-product-title {
  width: 100%;
  height: 0.8rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.new-product-title-d {
  width: 40%;
  font-size: 0.5rem;
  display: flex;
  flex-flow: row nowrap;
  margin-right: 0.5rem;
}
.new-product-title-s {
  width: 60%;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  font-size: 0.6rem;
}
</style>

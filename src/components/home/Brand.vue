<template>
  <div id="brand-list">
    <div class="brand-title">
      <span class="brand-title-s">品牌制造商直供</span>
      <div class="brand-title-d">
        <span style="color: #999999;width: 80%;margin-left: 40%">更多推荐</span>
        <span class="iconfont" style="width: 20%"><font color="#999999">&#xe60e;</font></span>
      </div>
    </div>
    <ul>
      <li v-for="(brand,index) in json.list" :key="index">
        <div>
          <div>
            <div class="brand-list-title">
              <span style="font-size: 0.5rem;font-size: 0.5rem">{{brand.name}}</span>
              <span style="color: #999999;font-size: 0.5rem">{{brand.price}}元起</span>
            </div>
            <div>
              <span style="float: right;font-size: 0.6rem" class="iconfont"><font color="#FD994B">&#xe785;</font></span>
            </div>
          </div>
          <div>
            <img :src="brand.src"/>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Brand',
  data () {
    return {
      json: {
        list: [
          {
            name: 'WMF制作商',
            price: '9.9',
            src: 'https://img.alicdn.com/bao/uploaded/i1/TB1UuC6LVXXXXa9XXXXYXGcGpXX_M2.SS2_200x200q90.jpg_.webp'
          },
          {
            name: 'MUJI制造商',
            price: '19.9',
            src: 'https://img.alicdn.com/bao/uploaded/i1/436220648/TB2.jKbe5AKL1JjSZFoXXagCFXa_!!436220648.jpg_200x200q90.jpg_.webp'
          },
          {
            name: '爱慕制造商',
            price: '29.9',
            src: 'https://img.alicdn.com/bao/uploaded/i2/321007425/TB27pFMsxSYBuNjSsphXXbGvVXa_!!321007425.jpg_200x200q90.jpg_.webp'
          },
          {
            name: '内野制造商',
            price: '59.9',
            src: 'https://img.alicdn.com/bao/uploaded/i3/TB1jn3lJVXXXXboXVXXXXXXXXXX_!!0-item_pic.jpg_200x200q90.jpg_.webp'
          }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
#brand-list {
  width: 100%;
  height: 11rem;
  border:1px solid #CCCCCC;
  margin-top: 0.2rem;
}
#brand-list  ul{
  width: 100%;
  display: flex;
  flex-flow: row wrap;
}
#brand-list li {
  width: 42%;
  padding: 0.05rem;
  list-style: none;
  margin-right: 0.3rem;
  margin-left: 0.3rem;
}
#brand-list img {
  width: 100%;
  height: 3rem;
}
.brand-title {
  width: 100%;
  height: 1.5rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.brand-title-d {
  width: 40%;
  font-size: 0.5rem;
  display: flex;
  flex-flow: row nowrap;
  margin-right: 0.5rem;
}
.brand-title-s {
  width: 60%;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  font-size: 0.6rem;
}
.brand-list-title {
  display: flex;
  flex-flow: column;
}
</style>

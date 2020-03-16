<template>
  <div class="promotion-list">
    <div class="promotion-title">
      <div>
        <span style="color: #333333">秒杀专区</span><br/>
        <span style="color: #666666">下一场18：00开始</span>
      </div>
      <div style="margin-left: 10%">
        <span style="color: #999999">本场结束剩余</span>
        <div class="promotion-title-t">
        <div class="promotion-title-y">
          00
        </div>
        <span>：</span>
        <div class="promotion-title-y">
          20
        </div>
        <span>：</span>
        <div class="promotion-title-y">
          56
        </div>
        </div>
      </div>
    </div>
    <ul>
      <li v-for="(promotion,index) in json.list" :key="index">
        <div>
          <img :src="promotion.src"/>
          <div class="promotion-list-img">￥{{promotion.yPrice}}</div>
        </div>
        <div class="promotion-list-title">
          <span style="color: #FB0017;">秒杀价￥ {{promotion.price}}</span><br/>
          <span style="color: #333333;margin-top: -0.5rem">{{promotion.name}}</span><br/>
          <span style="color: #999999;margin-top: -0.5rem">{{promotion.title}}</span><br/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Promotion',
  data () {
    return {
      json: {
        list: [
          {
            src: 'https://img.alicdn.com/bao/uploaded/i3/329380110/O1CN01Xzg0v21CgQ9dD6Jib_!!0-saturn_solar.jpg_200x200q90.jpg_.webp',
            yPrice: '299',
            price: '99',
            name: '银色星芒刺绣网纱底裤',
            title: '薄如蝉翼，丝滑如肌肤'
          },
          {
            src: 'https://img.alicdn.com/bao/uploaded/i1/2134568678/TB1PWURXEKtLeJjy0FiXXcvnVXa_!!0-item_pic.jpg_200x200q90.jpg_.webp',
            yPrice: '299',
            price: '99',
            name: '银色星芒刺绣网纱底裤',
            title: '薄如蝉翼，丝滑如肌肤'
          },
          {
            src: 'https://img.alicdn.com/bao/uploaded/i4/305724896/TB2_4Fqtv1TBuNjy0FjXXajyXXa_!!305724896.jpg_200x200q90.jpg_.webp',
            yPrice: '299',
            price: '99',
            name: '银色星芒刺绣网纱底裤',
            title: '薄如蝉翼，丝滑如肌肤'
          },
          {
            src: 'https://img.alicdn.com/bao/uploaded/i3/467959705/TB2Adj4tamWBuNjy1XaXXXCbXXa_!!467959705.jpg_200x200q90.jpg_.webp',
            yPrice: '299',
            price: '99',
            name: '银色星芒刺绣网纱底裤',
            title: '薄如蝉翼，丝滑如肌肤'
          }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
.promotion-list {
  width: 100%;
  height: 12rem;
  border:1px solid #CCCCCC;
  margin-top: 0.2rem;
}
.promotion-list  ul{
  width: 100%;
  display: flex;
  flex-flow: row wrap;
}
.promotion-list li {
  width: 42%;
  list-style: none;
  margin-right: 0.3rem;
  margin-left: 0.3rem;
}
.promotion-list img {
  width: 100%;
  height: 3rem;
  padding: 0.1rem;
  border-top-right-radius: 1.8rem;
}
.promotion-list-img {
  width: 1rem;
  height: 1rem;
  background: red;
  color: white;
  border-radius: 50%;
  float: right;
  margin-top: -3.358rem;
  margin-right: -0.35rem;
  text-align: center;
  line-height: 1rem;
  font-size: 0.32rem;
}
.promotion-list-title {
  display: flex;
  flex-flow: column;
  align-items: center;
  font-size: 0.5rem;
}
.promotion-title {
  width: 100%;
  height: 2rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-size: 0.7rem;
  margin-left: 0.5rem;
}
.promotion-title div {
  width: 60%;

}
.promotion-title-t {
  display: flex;
  flex-flow: row nowrap;
}
.promotion-title-y {
  width: 0.5rem;
  height: 0.5rem;
  background: black;
  color: white;
  border-radius: 0.1rem;
  text-align: center;
  line-height: 0.5rem;
}
</style>

<template>
    <div class="guess-product-list">
      <div class="guess-product-title">猜你喜欢</div>
      <ul>
        <li v-for="(GuessProduct,index) in json.list" :key="index">
          <div>
            <img :src="GuessProduct.src"/>
          </div>
          <div class="promotion-list-title">
            <span style="color: #333333;margin-top: -0.5rem">{{GuessProduct.name}}</span><br/>
            <span style="color: #999999;margin-top: -0.5rem">{{GuessProduct.title}}</span><br/>
            <span style="color: #FB0017;">￥ {{GuessProduct.price}}</span><br/>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'GuessProduct',
  data () {
    return {
      json: {
        list: [
          {
            src: 'https://img.alicdn.com/bao/uploaded/i1/2134568678/TB1PWURXEKtLeJjy0FiXXcvnVXa_!!0-item_pic.jpg_200x200q90.jpg_.webp',
            price: '99',
            name: '银色星芒刺绣网纱底裤',
            title: '薄如蝉翼，丝滑如肌肤'
          },
          {
            src: 'https://img.alicdn.com/bao/uploaded/i1/2838887950/TB2q2eepFXXXXagXFXXXXXXXXXX_!!2838887950.jpg_180x180q90.jpg_.webp',
            price: '99',
            name: '银色星芒刺绣网纱底裤',
            title: '薄如蝉翼，丝滑如肌肤'
          },
          {
            src: 'https://img.alicdn.com/imgextra/i2/1689522943/TB2xlhTXQT85uJjSZFhXXcPEVXa_!!1689522943-0-beehive-scenes.jpg_360x360xzq90.jpg_.webp',
            price: '99',
            name: '银色星芒刺绣网纱底裤',
            title: '薄如蝉翼，丝滑如肌肤'
          },
          {
            src: 'https://img.alicdn.com/imgextra/i2/3778221387/O1CN011M7HoTpKkqwlv3C_!!3778221387-0-beehive-scenes.jpg_360x360xzq90.jpg_.webp',
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
.guess-product-list {
  width: 100%;
  margin-top: 0.5rem;
  border-top: 1px solid #CCCCCC;
}
.guess-product-list ul {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
}
.guess-product-list li {
  width: 42%;
  list-style: none;
  margin-right: 0.3rem;
  margin-left: 0.3rem;
}
.guess-product-list img {
  width: 100%;
  height: 3rem;
  padding: 0.1rem;
}
.guess-product-title {
  width: 100%;
  height: 2rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  font-size: 0.7rem;
  line-height: 2rem;
}
</style>

<template>
  <div class="recomand-list">
    <div class="recomand-title">
      <span class="recomand-title-s">人气推荐</span>
      <div class="recomand-title-d">
        <span style="color: #999999;width: 80%;margin-left: 40%">更多推荐</span>
        <span class="iconfont" style="width: 20%"><font color="#999999">&#xe60e;</font></span>
      </div>
    </div>
    <ul>
      <li v-for="(Recomand,index) in json.list" :key="index">
        <div>
          <img :src="Recomand.src"/>
        </div>
        <div class="recomand-list-title">
          <span style="color: #333333;margin-top: 0.05rem">{{Recomand.name}}</span>
          <span style="color: #999999;margin-top: 0.05rem">{{Recomand.title}}</span>
          <div class="recomand-list-title-y">
            <span style="color: #FB0017;">￥{{Recomand.price}}</span>
            <div class="recomand-list-y" style="margin-left: 40%">{{Recomand.number}}色可选</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recomand',
  data () {
    return {
      json: {
        list: [
          {
            name: '银色星芒刺绣网纱底裤',
            title: '薄如蝉翼，丝滑如肌肤',
            price: '99',
            number: '4',
            src: 'https://img.alicdn.com/bao/uploaded/i3/TB17fLDFVXXXXbAXXXXXXXXXXXX_!!0-item_pic.jpg_180x180q90.jpg_.webp'
          },
          {
            name: '银色星芒刺绣网纱底裤',
            title: '薄如蝉翼，丝滑如肌肤',
            price: '99',
            number: '4',
            src: 'https://img.alicdn.com/bao/uploaded/i1/TB1JePFKFXXXXaYXVXXXXXXXXXX_!!0-item_pic.jpg_180x180q90.jpg_.webp'
          },
          {
            name: '银色星芒刺绣网纱底裤',
            title: '薄如蝉翼，丝滑如肌肤',
            price: '99',
            number: '4',
            src: 'https://img.alicdn.com/imgextra/i3/6000000002042/O1CN013cEVlB1QxHLxhpHpd_!!6000000002042-0-tblive.jpg_180x180q90.jpg_.webp'
          }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
.recomand-list {
  width: 100%;
  height: 17rem;
  border:1px solid #CCCCCC;
  margin-top: 0.2rem;
}
.recomand-list ul {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  /*border:1px solid #CCCCCC;*/

}
.recomand-list li {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0.05rem;
  list-style: none;
  border-top: 1px solid #CCCCCC;
}
.recomand-list img {
  width: 4rem;
  height: 4rem;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.recomand-list-title {
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-left: 5%;
  font-size: 0.6rem;
}
.recomand-title {
  width: 100%;
  height: 1.5rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.recomand-title-d {
  width: 40%;
  font-size: 0.5rem;
  display: flex;
  flex-flow: row nowrap;
  margin-right: 0.5rem;
}
.recomand-title-s {
  width: 60%;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  font-size: 0.6rem;
}
.recomand-list-title-y {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
}
.recomand-list-y {
  width: 2rem;
  height: 0.5rem;
  color: #FD994B;
  border:1px solid #FD994B;
  border-radius: 0.1rem;
  text-align: center;
  line-height: 0.5rem;
}
</style>

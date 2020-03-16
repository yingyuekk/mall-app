<template>
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <ul>
        <li v-for="(item,index) in user.list" :key="index">
          <div class="mine-info">
            <div class="mine-info-div">
              <img style="width: 30%" :src="item.src"/>
              <div style="color: #FFFFFF;margin-left: 10%;width: 30%">
                <span>{{item.name}}</span>
                <div><span>{{item.member}}</span></div>
              </div>
              <span style="width: 30%" class="iconfont"><font color="#FFFFFF"
                                                              style="font-size: 0.8rem;margin-left: 40%">&#xe62d;</font></span>
            </div>
          </div>
          <div class="mine-info-title">
            <div>
              <span style="color: #666666">积分</span>
              <span style="color: #2AB795">{{item.integral}}</span>
            </div>
            <div>
              <span style="color: #666666">优惠券</span>
              <span style="color: #2AB795">{{item.discountCoupon}}</span>
            </div>
            <div>
              <span style="color: #666666">关注</span>
              <span style="color: #2AB795">{{item.concerned}}</span>
            </div>
          </div>
          <div class="mine-info-fw">
            <div>
                <span style="width: 30%" class="iconfont"><font color="#FC4024"
                                                                style="font-size: 0.8rem;">&#xe74d;</font></span>
              <span style="color: #666666">我的订单</span>
            </div>
            <div>
                <span style="width: 30%" class="iconfont"><font color="#666666"
                                                                style="font-size: 0.8rem;">&#xe62e;</font></span>
              <span style="color: #666666">待付款</span>
            </div>
            <div>
                <span style="width: 30%" class="iconfont"><font color="#666666"
                                                                style="font-size: 0.8rem;">&#xe607;</font></span>
              <span style="color: #666666">待收货</span>
            </div>
            <div>
                <span style="width: 30%" class="iconfont"><font color="#666666"
                                                                style="font-size: 0.8rem;">&#xe608;</font></span>
              <span style="color: #666666">待评价</span>
            </div>
            <div>
                <span style="width: 30%" class="iconfont"><font color="#666666"
                                                                style="font-size: 0.8rem;">&#xe62b;</font></span>
              <span style="color: #666666">售后服务</span>
            </div>
          </div>
          <div class="mine-info-collect">
            <div>
              <span class="iconfont"><font color="#FC4024" style="font-size: 0.5rem;">&#xe64c;</font></span>
              <span>我的收藏</span>
            </div>
            <div>
              <span>{{item.productCollect}}</span>
              <span>商品</span>
            </div>
            <div>
              <span>{{item.subjectCollect}}</span>
              <span>专题</span>
            </div>
            <div>
              <span>{{item.discourseCollect}}</span>
              <span>话题</span>
            </div>
          </div>
          <div class="mine-info-icon" style="margin-top: 0.5rem">
            <div>
              <span class="iconfont"><font color="#666666" style="font-size: 0.8rem;margin-left: 0.3rem">&#xe631;</font></span>
              <span style="color: #333333;">我的足迹</span>
            </div>
            <div style="flex: 0.7"></div>
            <div style="margin-left: auto;">
              <span style="color: #666666">{{item.footprint}}</span>
              <span class="iconfont"><font color="#666666" style="font-size: 0.5rem;margin-right: 0.3rem">&#xe62d;</font></span>
            </div>
          </div>
          <div class="mine-info-icon">
            <div>
              <span class="iconfont"><font color="#666666" style="font-size: 0.8rem;margin-left: 0.3rem">&#xe67e;</font></span>
              <span style="color: #333333;">我的评价</span>
            </div>
            <div style="flex: 0.7"></div>
            <div style="margin-left: auto;">
              <span style="color: #666666">{{item.footprint}}</span>
              <span class="iconfont"><font color="#666666" style="font-size: 0.5rem;margin-right: 0.3rem">&#xe62d;</font></span>
            </div>
          </div>
          <div class="mine-info-icon">
            <div>
              <span class="iconfont"><font color="#666666" style="font-size: 0.8rem;margin-left: 0.3rem">&#xe621;</font></span>
              <span style="color: #333333;">地址管理</span>
            </div>
            <div style="flex: 0.7"></div>
            <div style="margin-left: auto;">
              <span class="iconfont"><font color="#666666" style="font-size: 0.5rem;margin-right: 0.3rem">&#xe62d;</font></span>
            </div>
          </div>
          <div class="mine-info-icon">
            <div>
              <span class="iconfont"><font color="#666666" style="font-size: 0.8rem;margin-left: 0.3rem">&#xe733;</font></span>
              <span style="color: #333333;">我的会员</span>
            </div>
            <div style="flex: 0.7"></div>
            <div style="margin-left: auto;">
              <span style="color: #666666">{{item.member}}</span>
              <span class="iconfont"><font color="#666666" style="font-size: 0.5rem;margin-right: 0.3rem">&#xe62d;</font></span>
            </div>
          </div>
          <div class="mine-info-icon">
            <div>
              <span class="iconfont"><font color="#666666" style="font-size: 0.8rem;margin-left: 0.3rem">&#xe60c;</font></span>
              <span style="color: #333333;">服务中心</span>
            </div>
            <div style="flex: 0.7"></div>
            <div style="margin-left: auto;">
              <span class="iconfont"><font color="#666666" style="font-size: 0.5rem;margin-right: 0.3rem">&#xe62d;</font></span>
            </div>
          </div>
          <div class="mine-info-icon">
            <div>
              <span class="iconfont"><font color="#666666" style="font-size: 0.8rem;margin-left: 0.3rem">&#xe710;</font></span>
              <span style="color: #333333;">系统设置</span>
            </div>
            <div style="flex: 0.7"></div>
            <div style="margin-left: auto;">
              <span class="iconfont"><font color="#666666" style="font-size: 0.5rem;margin-right: 0.3rem">&#xe62d;</font></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'mine',
  data () {
    return {
      user: {
        list: [
          {
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584022883070&di=480170a5a876364fca8327f60d09faaa&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20200105%2Fc5162a9d6f484ce3b8ff464b27f8865f.jpeg',
            name: 'Winder',
            member: '黄金会员',
            integral: '100',
            discountCoupon: '100',
            concerned: '100',
            productCollect: '100',
            subjectCollect: '100',
            discourseCollect: '100',
            footprint: '10',
            evaluate: '10'
          }
        ]
      }
    }
  },
  mounted () {
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
  }
}
</script>

<style lang="less" scoped>
.wrapper{
  width: 100%;
  height: 80%;
  position: absolute;
  top: 1rem;
  bottom: 50px;  /*关键*/
  overflow: hidden;
  z-index: 1;
}
.mine-info {
  width: 100%;
  height: 5rem;
  display: flex;
  flex-flow: row nowrap;
  background: #3F4552;
}
.mine-info img {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}
.mine-info-div {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-size: 0.5rem;
  margin-left: 0.5rem;
}
.mine-info-div div {
  width: 100%;
  display: flex;
  flex-flow: column;
}
.mine-info-div div div {
  width: 60%;
  margin-top: 0.2rem;
  border:1px solid #FFFFFF;
  text-align: center;
  border-radius: 0.15rem;
}
.mine-info-title {
  width: 100%;
  height: 1.5rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  border-bottom: 1px solid #CCCCCC;
}
.mine-info-title div {
  width: 40%;
  display: flex;
  flex-flow: column nowrap;
  font-size: 0.5rem;
  align-items: center;
}
.mine-info-fw {
  width: 100%;
  height: 1.5rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  border-top: 1px solid #CCCCCC;
  margin-top: 0.5rem;
}
.mine-info-fw div {
  width: 40%;
  display: flex;
  flex-flow: column nowrap;
  font-size: 0.5rem;
  align-items: center;
  margin-top: 0.2rem;
}
.mine-info-collect {
  width: 100%;
  height: 1.5rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  border-top: 1px solid #CCCCCC;
  border-bottom: 1px solid #CCCCCC;
}
.mine-info-collect div {
  width: 40%;
  display: flex;
  flex-flow: column nowrap;
  font-size: 0.5rem;
  align-items: center;
  margin-top: 0.2rem;
}
.mine-info-icon {
  width: 100%;
  height: 1rem;
  display: flex;
  align-items: center;
  border-top: 1px solid #CCCCCC;
  font-size: 0.5rem;
}
</style>

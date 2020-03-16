<template>
  <div ref="wrapper" class="wrapper">
    <ul v-for="(item,index) in Subject" :key="index" ref="wrapperUl">
      <li v-for="(item,index) in item.SubjectData" :key="index" v-show="active === '0' || active === '全部专题' ?true:item.topName === active">
        <div class="subject-list-item">
          <div class="subject-list-item-menu">
            <div class="subject-list-item-y">
              <img :src="item.topSrc"/>
            </div>
            <div>
              <span>{{item.topName}}</span>
            </div>
          </div>
          <img :src="item.src"/>
          <div class="subject-list-item-title">
            <div>
              <span style="color: #333333;">{{item.name}}</span>
              <span style="color: #FB0017;margin-left: 20%">￥{{item.price}}元起</span>
            </div>
            <span style="color: #999999;">{{item.title}}</span>
          </div>
          <div class="subject-list-item-icon">
            <div>
              <div>
                <span class="iconfont"><font color="#999999" style="font-size: 0.5rem;margin-left: 0.5rem">&#xe606;</font></span>
                <span>{{item.like}}</span>
              </div>
              <div>
                <span class="iconfont"><font color="#999999" style="font-size: 0.5rem;margin-left: 0.5rem">&#xe615;</font></span>
                <span>{{item.pageView}}</span>
              </div>
            </div>
            <div  style="margin-left: 35%">
              <div style="display: flex;flex-flow: row nowrap;margin-right: 0.5rem">
              <span class="iconfont"><font color="#999999" style="font-size: 0.5rem">&#xe63a;</font></span>
              <span>{{item.reply}}</span>
              </div>
              <span class="iconfont"><font color="#999999" style="font-size: 0.5rem">&#xe62d;</font></span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'subjectList',
  data () {
    return {
      Subject: [
        {
          menu: '全部专题',
          src: 'https://img14.360buyimg.com/img/s100x100_jfs/t26881/248/1069038704/78844/5f504fd9/5bc0914fN9c0e3876.jpg!cc_100x100.webp',
          SubjectData: [
            {
              topName: '服装专题',
              topSrc: 'https://img14.360buyimg.com/img/s100x100_jfs/t19429/345/2114569686/193072/6f671ab/5ae74720N203d91fc.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  服装-1',
              title: '餐厨起居好物  服装-1',
              price: '99',
              src: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/88601/16/14017/94317/5e61c3a7E3886a3a1/ff78b8900c900b33.jpg!cr_1125x445_0_171!q70.jpg.dpg',
              like: '100',
              pageView: '10000',
              reply: '100',
              isHot: 'false'
            },
            {
              topName: '服装专题',
              topSrc: 'https://img14.360buyimg.com/img/s100x100_jfs/t19429/345/2114569686/193072/6f671ab/5ae74720N203d91fc.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  服装-2',
              title: '餐厨起居好物  服装-2',
              price: '99',
              src: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/85665/33/14496/171750/5e65bb31E418daf54/72edf47ff2d59c7f.jpg!cr_1125x445_0_171!q70.jpg.dpg',
              isHot: 'false',
              like: '100',
              pageView: '10000',
              reply: '100'
            },
            {
              topName: '服装专题',
              topSrc: 'https://img14.360buyimg.com/img/s100x100_jfs/t19429/345/2114569686/193072/6f671ab/5ae74720N203d91fc.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  服装-3',
              title: '餐厨起居好物  服装-3',
              price: '99',
              src: 'https://imgcps.jd.com/ling4/4080819/6Z2i6Iac55yB5b-D55yB5Yqb/5ZOB6LSo5rqQ5LqO5Y2T6LaK/p-5c13869682acdd181deeff08/b07ccd43/cr_1125x445_0_171/s1125x690/q70.jpg',
              isHot: 'false',
              like: '100',
              pageView: '10000',
              reply: '100'
            },
            {
              topName: '服装专题',
              topSrc: 'https://img14.360buyimg.com/img/s100x100_jfs/t19429/345/2114569686/193072/6f671ab/5ae74720N203d91fc.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  服装-4',
              title: '餐厨起居好物  服装-4',
              price: '99',
              src: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/108137/16/8397/112957/5e6706eaE2d765545/3209da6a0646e2cb.jpg!cr_1125x445_0_171!q70.jpg.dpg',
              isHot: 'false',
              like: '100',
              pageView: '10000',
              reply: '100'
            },
            {
              topName: '餐厨专题',
              topSrc: 'https://img12.360buyimg.com/img/s100x100_jfs/t30319/14/1552128996/325212/62467251/5ce3c4bfN6cfc1eea.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  餐厨-1',
              title: '餐厨起居好物  餐厨-1',
              price: '99',
              src: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/88601/16/14017/94317/5e61c3a7E3886a3a1/ff78b8900c900b33.jpg!cr_1125x445_0_171!q70.jpg.dpg',
              isHot: 'true',
              like: '100',
              pageView: '10000',
              reply: '100'
            },
            {
              topName: '餐厨专题',
              topSrc: 'https://img12.360buyimg.com/img/s100x100_jfs/t30319/14/1552128996/325212/62467251/5ce3c4bfN6cfc1eea.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  餐厨-2',
              title: '餐厨起居好物  餐厨-2',
              price: '99',
              src: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/85665/33/14496/171750/5e65bb31E418daf54/72edf47ff2d59c7f.jpg!cr_1125x445_0_171!q70.jpg.dpg',
              isHot: 'false',
              like: '100',
              pageView: '10000',
              reply: '100'
            },
            {
              topName: '餐厨专题',
              topSrc: 'https://img12.360buyimg.com/img/s100x100_jfs/t30319/14/1552128996/325212/62467251/5ce3c4bfN6cfc1eea.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  餐厨-3',
              title: '餐厨起居好物  餐厨-3',
              price: '99',
              src: 'https://imgcps.jd.com/ling4/4080819/6Z2i6Iac55yB5b-D55yB5Yqb/5ZOB6LSo5rqQ5LqO5Y2T6LaK/p-5c13869682acdd181deeff08/b07ccd43/cr_1125x445_0_171/s1125x690/q70.jpg',
              isHot: 'false',
              like: '100',
              pageView: '10000',
              reply: '100'
            },
            {
              topName: '餐厨专题',
              topSrc: 'https://img12.360buyimg.com/img/s100x100_jfs/t30319/14/1552128996/325212/62467251/5ce3c4bfN6cfc1eea.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  餐厨-4',
              title: '餐厨起居好物  餐厨-4',
              price: '99',
              src: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/108137/16/8397/112957/5e6706eaE2d765545/3209da6a0646e2cb.jpg!cr_1125x445_0_171!q70.jpg.dpg',
              isHot: 'false',
              like: '100',
              pageView: '10000',
              reply: '100'
            },
            {
              topName: '配件专题',
              topSrc: 'https://img12.360buyimg.com/img/s100x100_jfs/t25528/164/2287789271/129283/c84577ac/5bc7eda9Nc0c5d398.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  配件-1',
              title: '餐厨起居好物  配件-1',
              price: '99',
              src: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/88601/16/14017/94317/5e61c3a7E3886a3a1/ff78b8900c900b33.jpg!cr_1125x445_0_171!q70.jpg.dpg',
              isHot: 'false',
              like: '100',
              pageView: '10000',
              reply: '100'
            },
            {
              topName: '配件专题',
              topSrc: 'https://img12.360buyimg.com/img/s100x100_jfs/t25528/164/2287789271/129283/c84577ac/5bc7eda9Nc0c5d398.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  配件-2',
              title: '餐厨起居好物  配件-2',
              price: '99',
              src: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/85665/33/14496/171750/5e65bb31E418daf54/72edf47ff2d59c7f.jpg!cr_1125x445_0_171!q70.jpg.dpg',
              isHot: 'true',
              like: '100',
              pageView: '10000',
              reply: '100'
            },
            {
              topName: '配件专题',
              topSrc: 'https://img12.360buyimg.com/img/s100x100_jfs/t25528/164/2287789271/129283/c84577ac/5bc7eda9Nc0c5d398.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  配件-3',
              title: '餐厨起居好物  配件-3',
              price: '99',
              src: 'https://imgcps.jd.com/ling4/4080819/6Z2i6Iac55yB5b-D55yB5Yqb/5ZOB6LSo5rqQ5LqO5Y2T6LaK/p-5c13869682acdd181deeff08/b07ccd43/cr_1125x445_0_171/s1125x690/q70.jpg',
              isHot: 'false',
              like: '100',
              pageView: '10000',
              reply: '100'
            },
            {
              topName: '配件专题',
              topSrc: 'https://img12.360buyimg.com/img/s100x100_jfs/t25528/164/2287789271/129283/c84577ac/5bc7eda9Nc0c5d398.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  配件-4',
              title: '餐厨起居好物  配件-4',
              price: '99',
              src: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/108137/16/8397/112957/5e6706eaE2d765545/3209da6a0646e2cb.jpg!cr_1125x445_0_171!q70.jpg.dpg',
              isHot: 'false',
              like: '100',
              pageView: '10000',
              reply: '100'
            },
            {
              topName: '居家专题',
              topSrc: 'https://img13.360buyimg.com/img/s100x100_jfs/t1/73672/27/2184/213442/5d08e765E79ea2f0d/9f47094b87f0e166.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  居家-1',
              title: '餐厨起居好物  居家-1',
              price: '99',
              src: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/88601/16/14017/94317/5e61c3a7E3886a3a1/ff78b8900c900b33.jpg!cr_1125x445_0_171!q70.jpg.dpg',
              isHot: 'false',
              like: '100',
              pageView: '10000',
              reply: '100'
            },
            {
              topName: '居家专题',
              topSrc: 'https://img13.360buyimg.com/img/s100x100_jfs/t1/73672/27/2184/213442/5d08e765E79ea2f0d/9f47094b87f0e166.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  居家-2',
              title: '餐厨起居好物  居家-2',
              price: '99',
              src: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/85665/33/14496/171750/5e65bb31E418daf54/72edf47ff2d59c7f.jpg!cr_1125x445_0_171!q70.jpg.dpg',
              isHot: 'false',
              like: '100',
              pageView: '10000',
              reply: '100'
            },
            {
              topName: '居家专题',
              topSrc: 'https://img13.360buyimg.com/img/s100x100_jfs/t1/73672/27/2184/213442/5d08e765E79ea2f0d/9f47094b87f0e166.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  居家-3',
              title: '餐厨起居好物  居家-3',
              price: '99',
              src: 'https://imgcps.jd.com/ling4/4080819/6Z2i6Iac55yB5b-D55yB5Yqb/5ZOB6LSo5rqQ5LqO5Y2T6LaK/p-5c13869682acdd181deeff08/b07ccd43/cr_1125x445_0_171/s1125x690/q70.jpg',
              isHot: 'true',
              like: '100',
              pageView: '10000',
              reply: '100'
            },
            {
              topName: '居家专题',
              topSrc: 'https://img13.360buyimg.com/img/s100x100_jfs/t1/73672/27/2184/213442/5d08e765E79ea2f0d/9f47094b87f0e166.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  居家-4',
              title: '餐厨起居好物  居家-4',
              price: '99',
              src: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/108137/16/8397/112957/5e6706eaE2d765545/3209da6a0646e2cb.jpg!cr_1125x445_0_171!q70.jpg.dpg',
              isHot: 'false',
              like: '100',
              pageView: '10000',
              reply: '100'
            },
            {
              topName: '洗护专题',
              topSrc: 'https://img20.360buyimg.com/img/s100x100_jfs/t1/39490/36/6707/91656/5cd3ca9bE75022437/03f276581f7fd26f.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  洗护-1',
              title: '餐厨起居好物  洗护-1',
              price: '99',
              src: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/88601/16/14017/94317/5e61c3a7E3886a3a1/ff78b8900c900b33.jpg!cr_1125x445_0_171!q70.jpg.dpg',
              isHot: 'false',
              like: '100',
              pageView: '10000',
              reply: '100'
            },
            {
              topName: '洗护专题',
              topSrc: 'https://img20.360buyimg.com/img/s100x100_jfs/t1/39490/36/6707/91656/5cd3ca9bE75022437/03f276581f7fd26f.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  洗护-2',
              title: '餐厨起居好物  洗护-2',
              price: '99',
              src: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/85665/33/14496/171750/5e65bb31E418daf54/72edf47ff2d59c7f.jpg!cr_1125x445_0_171!q70.jpg.dpg',
              isHot: 'false',
              like: '100',
              pageView: '10000',
              reply: '100'
            },
            {
              topName: '洗护专题',
              topSrc: 'https://img20.360buyimg.com/img/s100x100_jfs/t1/39490/36/6707/91656/5cd3ca9bE75022437/03f276581f7fd26f.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  洗护-3',
              title: '餐厨起居好物  洗护-3',
              price: '99',
              src: 'https://imgcps.jd.com/ling4/4080819/6Z2i6Iac55yB5b-D55yB5Yqb/5ZOB6LSo5rqQ5LqO5Y2T6LaK/p-5c13869682acdd181deeff08/b07ccd43/cr_1125x445_0_171/s1125x690/q70.jpg',
              isHot: 'false',
              like: '100',
              pageView: '10000',
              reply: '100'
            },
            {
              topName: '洗护专题',
              topSrc: 'https://img20.360buyimg.com/img/s100x100_jfs/t1/39490/36/6707/91656/5cd3ca9bE75022437/03f276581f7fd26f.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  洗护-4',
              title: '餐厨起居好物  洗护-4',
              price: '99',
              src: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/108137/16/8397/112957/5e6706eaE2d765545/3209da6a0646e2cb.jpg!cr_1125x445_0_171!q70.jpg.dpg',
              like: '100',
              pageView: '10000',
              reply: '100',
              isHot: 'true'
            }
          ]
        },
        {
          menu: '服装专题',
          src: 'https://img14.360buyimg.com/img/s100x100_jfs/t19429/345/2114569686/193072/6f671ab/5ae74720N203d91fc.jpg!cc_100x100.webp',
          SubjectData: [
            {
              topName: '服装专题',
              topSrc: 'https://img14.360buyimg.com/img/s100x100_jfs/t19429/345/2114569686/193072/6f671ab/5ae74720N203d91fc.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  服装-1',
              title: '餐厨起居好物  服装-1',
              price: '99',
              src: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/88601/16/14017/94317/5e61c3a7E3886a3a1/ff78b8900c900b33.jpg!cr_1125x445_0_171!q70.jpg.dpg',
              like: '100',
              pageView: '10000',
              reply: '100',
              isHot: 'true'
            },
            {
              topName: '服装专题',
              topSrc: 'https://img14.360buyimg.com/img/s100x100_jfs/t19429/345/2114569686/193072/6f671ab/5ae74720N203d91fc.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  服装-2',
              title: '餐厨起居好物  服装-2',
              price: '99',
              src: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/85665/33/14496/171750/5e65bb31E418daf54/72edf47ff2d59c7f.jpg!cr_1125x445_0_171!q70.jpg.dpg',
              like: '100',
              pageView: '10000',
              reply: '100',
              isHot: 'false'
            },
            {
              topName: '服装专题',
              topSrc: 'https://img14.360buyimg.com/img/s100x100_jfs/t19429/345/2114569686/193072/6f671ab/5ae74720N203d91fc.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  服装-3',
              title: '餐厨起居好物  服装-3',
              price: '99',
              src: 'https://imgcps.jd.com/ling4/4080819/6Z2i6Iac55yB5b-D55yB5Yqb/5ZOB6LSo5rqQ5LqO5Y2T6LaK/p-5c13869682acdd181deeff08/b07ccd43/cr_1125x445_0_171/s1125x690/q70.jpg',
              like: '100',
              pageView: '10000',
              reply: '100',
              isHot: 'false'
            },
            {
              topName: '服装专题',
              topSrc: 'https://img14.360buyimg.com/img/s100x100_jfs/t19429/345/2114569686/193072/6f671ab/5ae74720N203d91fc.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  服装-4',
              title: '餐厨起居好物  服装-4',
              price: '99',
              src: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/108137/16/8397/112957/5e6706eaE2d765545/3209da6a0646e2cb.jpg!cr_1125x445_0_171!q70.jpg.dpg',
              like: '100',
              pageView: '10000',
              reply: '100',
              isHot: 'false'
            }
          ]
        },
        {
          menu: '餐厨专题',
          src: 'https://img12.360buyimg.com/img/s100x100_jfs/t30319/14/1552128996/325212/62467251/5ce3c4bfN6cfc1eea.jpg!cc_100x100.webp',
          SubjectData: [
            {
              topName: '餐厨专题',
              topSrc: 'https://img12.360buyimg.com/img/s100x100_jfs/t30319/14/1552128996/325212/62467251/5ce3c4bfN6cfc1eea.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  餐厨-1',
              title: '餐厨起居好物  餐厨-1',
              price: '99',
              src: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/88601/16/14017/94317/5e61c3a7E3886a3a1/ff78b8900c900b33.jpg!cr_1125x445_0_171!q70.jpg.dpg',
              like: '100',
              pageView: '10000',
              reply: '100',
              isHot: 'false'
            },
            {
              topName: '餐厨专题',
              topSrc: 'https://img12.360buyimg.com/img/s100x100_jfs/t30319/14/1552128996/325212/62467251/5ce3c4bfN6cfc1eea.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  餐厨-2',
              title: '餐厨起居好物  餐厨-2',
              price: '99',
              src: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/85665/33/14496/171750/5e65bb31E418daf54/72edf47ff2d59c7f.jpg!cr_1125x445_0_171!q70.jpg.dpg',
              like: '100',
              pageView: '10000',
              reply: '100',
              isHot: 'true'
            },
            {
              topName: '餐厨专题',
              topSrc: 'https://img12.360buyimg.com/img/s100x100_jfs/t30319/14/1552128996/325212/62467251/5ce3c4bfN6cfc1eea.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  餐厨-3',
              title: '餐厨起居好物  餐厨-3',
              price: '99',
              src: 'https://imgcps.jd.com/ling4/4080819/6Z2i6Iac55yB5b-D55yB5Yqb/5ZOB6LSo5rqQ5LqO5Y2T6LaK/p-5c13869682acdd181deeff08/b07ccd43/cr_1125x445_0_171/s1125x690/q70.jpg',
              like: '100',
              pageView: '10000',
              reply: '100',
              isHot: 'false'
            },
            {
              topName: '餐厨专题',
              topSrc: 'https://img12.360buyimg.com/img/s100x100_jfs/t30319/14/1552128996/325212/62467251/5ce3c4bfN6cfc1eea.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  餐厨-4',
              title: '餐厨起居好物  餐厨-4',
              price: '99',
              src: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/108137/16/8397/112957/5e6706eaE2d765545/3209da6a0646e2cb.jpg!cr_1125x445_0_171!q70.jpg.dpg',
              like: '100',
              pageView: '10000',
              reply: '100',
              isHot: 'false'
            }
          ]
        },
        {
          menu: '配件专题',
          src: 'https://img12.360buyimg.com/img/s100x100_jfs/t25528/164/2287789271/129283/c84577ac/5bc7eda9Nc0c5d398.jpg!cc_100x100.webp',
          SubjectData: [
            {
              topName: '配件专题',
              topSrc: 'https://img12.360buyimg.com/img/s100x100_jfs/t25528/164/2287789271/129283/c84577ac/5bc7eda9Nc0c5d398.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  配件-1',
              title: '餐厨起居好物  配件-1',
              price: '99',
              src: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/88601/16/14017/94317/5e61c3a7E3886a3a1/ff78b8900c900b33.jpg!cr_1125x445_0_171!q70.jpg.dpg',
              like: '100',
              pageView: '10000',
              reply: '100',
              isHot: 'false'
            },
            {
              topName: '配件专题',
              topSrc: 'https://img12.360buyimg.com/img/s100x100_jfs/t25528/164/2287789271/129283/c84577ac/5bc7eda9Nc0c5d398.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  配件-2',
              title: '餐厨起居好物  配件-2',
              price: '99',
              src: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/85665/33/14496/171750/5e65bb31E418daf54/72edf47ff2d59c7f.jpg!cr_1125x445_0_171!q70.jpg.dpg',
              like: '100',
              pageView: '10000',
              reply: '100',
              isHot: 'false'
            },
            {
              topName: '配件专题',
              topSrc: 'https://img12.360buyimg.com/img/s100x100_jfs/t25528/164/2287789271/129283/c84577ac/5bc7eda9Nc0c5d398.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  配件-3',
              title: '餐厨起居好物  配件-3',
              price: '99',
              src: 'https://imgcps.jd.com/ling4/4080819/6Z2i6Iac55yB5b-D55yB5Yqb/5ZOB6LSo5rqQ5LqO5Y2T6LaK/p-5c13869682acdd181deeff08/b07ccd43/cr_1125x445_0_171/s1125x690/q70.jpg',
              like: '100',
              pageView: '10000',
              reply: '100',
              isHot: 'true'
            },
            {
              topName: '配件专题',
              topSrc: 'https://img12.360buyimg.com/img/s100x100_jfs/t25528/164/2287789271/129283/c84577ac/5bc7eda9Nc0c5d398.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  配件-4',
              title: '餐厨起居好物  配件-4',
              price: '99',
              src: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/108137/16/8397/112957/5e6706eaE2d765545/3209da6a0646e2cb.jpg!cr_1125x445_0_171!q70.jpg.dpg',
              like: '100',
              pageView: '10000',
              reply: '100',
              isHot: 'false'
            }
          ]
        },
        {
          menu: '居家专题',
          src: 'https://img13.360buyimg.com/img/s100x100_jfs/t1/73672/27/2184/213442/5d08e765E79ea2f0d/9f47094b87f0e166.jpg!cc_100x100.webp',
          SubjectData: [
            {
              topName: '居家专题',
              topSrc: 'https://img13.360buyimg.com/img/s100x100_jfs/t1/73672/27/2184/213442/5d08e765E79ea2f0d/9f47094b87f0e166.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  居家-1',
              title: '餐厨起居好物  居家-1',
              price: '99',
              src: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/88601/16/14017/94317/5e61c3a7E3886a3a1/ff78b8900c900b33.jpg!cr_1125x445_0_171!q70.jpg.dpg',
              like: '100',
              pageView: '10000',
              reply: '100',
              isHot: 'false'
            },
            {
              topName: '居家专题',
              topSrc: 'https://img13.360buyimg.com/img/s100x100_jfs/t1/73672/27/2184/213442/5d08e765E79ea2f0d/9f47094b87f0e166.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  居家-2',
              title: '餐厨起居好物  居家-2',
              price: '99',
              src: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/85665/33/14496/171750/5e65bb31E418daf54/72edf47ff2d59c7f.jpg!cr_1125x445_0_171!q70.jpg.dpg',
              like: '100',
              pageView: '10000',
              reply: '100',
              isHot: 'false'
            },
            {
              topName: '居家专题',
              topSrc: 'https://img13.360buyimg.com/img/s100x100_jfs/t1/73672/27/2184/213442/5d08e765E79ea2f0d/9f47094b87f0e166.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  居家-3',
              title: '餐厨起居好物  居家-3',
              price: '99',
              src: 'https://imgcps.jd.com/ling4/4080819/6Z2i6Iac55yB5b-D55yB5Yqb/5ZOB6LSo5rqQ5LqO5Y2T6LaK/p-5c13869682acdd181deeff08/b07ccd43/cr_1125x445_0_171/s1125x690/q70.jpg',
              like: '100',
              pageView: '10000',
              reply: '100',
              isHot: 'false'
            },
            {
              topName: '居家专题',
              topSrc: 'https://img13.360buyimg.com/img/s100x100_jfs/t1/73672/27/2184/213442/5d08e765E79ea2f0d/9f47094b87f0e166.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  居家-4',
              title: '餐厨起居好物  居家-4',
              price: '99',
              src: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/108137/16/8397/112957/5e6706eaE2d765545/3209da6a0646e2cb.jpg!cr_1125x445_0_171!q70.jpg.dpg',
              like: '100',
              pageView: '10000',
              reply: '100',
              isHot: 'false'
            }
          ]
        },
        {
          menu: '洗护专题',
          src: 'https://img20.360buyimg.com/img/s100x100_jfs/t1/39490/36/6707/91656/5cd3ca9bE75022437/03f276581f7fd26f.jpg!cc_100x100.webp',
          SubjectData: [
            {
              topName: '洗护专题',
              topSrc: 'https://img20.360buyimg.com/img/s100x100_jfs/t1/39490/36/6707/91656/5cd3ca9bE75022437/03f276581f7fd26f.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  洗护-1',
              title: '餐厨起居好物  洗护-1',
              price: '99',
              src: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/88601/16/14017/94317/5e61c3a7E3886a3a1/ff78b8900c900b33.jpg!cr_1125x445_0_171!q70.jpg.dpg',
              like: '100',
              pageView: '10000',
              reply: '100',
              isHot: 'true'
            },
            {
              topName: '洗护专题',
              topSrc: 'https://img20.360buyimg.com/img/s100x100_jfs/t1/39490/36/6707/91656/5cd3ca9bE75022437/03f276581f7fd26f.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  洗护-2',
              title: '餐厨起居好物  洗护-2',
              price: '99',
              src: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/85665/33/14496/171750/5e65bb31E418daf54/72edf47ff2d59c7f.jpg!cr_1125x445_0_171!q70.jpg.dpg',
              like: '100',
              pageView: '10000',
              reply: '100',
              isHot: 'false'
            },
            {
              topName: '洗护专题',
              topSrc: 'https://img20.360buyimg.com/img/s100x100_jfs/t1/39490/36/6707/91656/5cd3ca9bE75022437/03f276581f7fd26f.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  洗护-3',
              title: '餐厨起居好物  洗护-3',
              price: '99',
              src: 'https://imgcps.jd.com/ling4/4080819/6Z2i6Iac55yB5b-D55yB5Yqb/5ZOB6LSo5rqQ5LqO5Y2T6LaK/p-5c13869682acdd181deeff08/b07ccd43/cr_1125x445_0_171/s1125x690/q70.jpg',
              like: '100',
              pageView: '10000',
              reply: '100',
              isHot: 'false'
            },
            {
              topName: '洗护专题',
              topSrc: 'https://img20.360buyimg.com/img/s100x100_jfs/t1/39490/36/6707/91656/5cd3ca9bE75022437/03f276581f7fd26f.jpg!cc_100x100.webp',
              name: '五个春天的生活新提案  洗护-4',
              title: '餐厨起居好物  洗护-4',
              price: '99',
              src: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/108137/16/8397/112957/5e6706eaE2d765545/3209da6a0646e2cb.jpg!cr_1125x445_0_171!q70.jpg.dpg',
              like: '100',
              pageView: '10000',
              reply: '100',
              isHot: 'false'
            }
          ]
        }
      ],
      detialtext: '全部专题'
    }
  },
  mounted () {
    console.log('this is current instance object', this.wrapper)
    this.$nextTick(() => {
      // $refs绑定元素
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          // 开启点击事件 默认为false
          click: true
        })
        // console.log(this.scroll)
      } else {
        this.scroll.refresh()
      }
    })
  },
  props: {
    // eslint-disable-next-line vue/no-dupe-keys
    'active': String
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    wrapper () {
      // eslint-disable-next-line no-undef
      return this.$refs.wrapperUl
    }
  }
}
</script>

<style lang="less" scoped>
  .subject-list ul {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
  }
  .subject-list li {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    margin-top: 0.5rem;
    border-top: 1px solid #CCCCCC;
    background: white;
  }
  .wrapper{
    width: 100%;
    height: 80%;
    position: absolute;
    top: 3rem;
    bottom: 50px;  /*关键*/
    overflow: hidden;
    z-index: 1;
  }
  .subject-list-item {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
  }
  .subject-list-item img {
    width: 100%;
    height: 5rem;
  }
  .subject-list-item-menu {
    width: 100%;
    height: 1rem;
    display: flex;
    flex-flow: row;
    align-items: center;
  }
  .subject-list-item-menu div {
    margin-left: 5%;
    font-size: 0.5rem;
    color: #797979;
  }
  .subject-list-item-y {
    width: 0.8rem;
    height: 0.8rem;
    background: #E6E5EB;
    border-radius: 50%;
  }
  .subject-list-item-y img {
    width: 0.5rem;
    height: 0.5rem;
    margin: 20%;
  }
  .subject-list-item-title {
    width: 100%;
    height: 1.2rem;
    display: flex;
    flex-flow: column;
    margin-left: 5%;
    font-size: 0.5rem;
    margin-top: 0.1rem;
    line-height: 0.5rem;
  }
  .subject-list-item-title div {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
  }
  .subject-list-item-icon {
    width: 100%;
    height: 1.5rem;
    display: flex;
    flex-flow: row nowrap;
    border-top:  1px solid #CCCCCC;
    align-items: center;
    font-size: 0.5rem;
  }
  .subject-list-item-icon  div {
    width: 50%;
    display: flex;
    flex-flow: row nowrap;
  }
</style>

<template>
  <div class="subject">
    <!-- 专题目录 -->
    <div class="subject-menu">
      <div class="person-wrap" ref="personWrap">
        <ul class="person-list" ref="personTab">
          <li v-for="(menuData,index) in Subject" :key="index" @click="listClick(index,menuData.menu)"
              :class="index===active?'active':''">
            <div class="subject-menu-y"><img :src="menuData.src"/></div>
            <br/>
            <span style="color: #797979;margin-top: -20%">{{menuData.menu}}</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 专题 -->

        <div class="subject-list">
          <subject-list :active="menuName"></subject-list>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import SubjectList from '../components/subject/subjectList'
export default {
  name: 'Subject',
  components: {SubjectList},
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
      active: 0,
      menuName: '0',
      detialtext: '全部专题'
    }
  },
  created () {
    this.$nextTick(() => {
      this.personScroll()
    })
  },
  methods: {
    personScroll () {
      let width = this.$refs.personTab.children.length * (this.$refs.personTab.clientWidth / 4)
      this.$refs.personTab.style.width = width + 'px'
      // this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.personWrap, {
            startX: 0,
            click: true,
            scrollX: true,
            // 忽略竖直方向的滚动
            scrollY: false,
            eventPassthrough: 'vertical'
          })
        } else {
          this.scroll.refresh()
        }
      })
    },
    listClick (index, menuName) { // 显示隐藏分类详情
      debugger
      this.menuName = menuName
      this.active = index
      this.detialtext = index
    }
  }
}
</script>

<style lang="less" scoped>
.subject {
  width: 100%;
  height: 80%;
  background: #F2F2F2;
  position: absolute;
  top: 1rem;
  bottom: 50px;  /*关键*/
  overflow: hidden;
  z-index: 1;
}
.subject-menu {
  width: 100%;
  height: 3rem;
  border-bottom: 1px solid #CCCCCC;
  background: white;
}
.subject-menu ul {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
}
.subject-menu li {
  width: 42%;
  list-style: none;
  margin-top: 0.4rem;
  margin-right: 0.4rem;
  margin-left: 0.4rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  font-size: 0.5rem;
}
.subject-menu-y img {
  width: 0.925rem;
  height: 0.925rem;
  margin: 20%;
}
.subject-menu-y {
  width: 1.5rem;
  height: 1.5rem;
  background: #E6E5EB;
  border-radius: 50%;
}
.subject-list {
  width: 100%;
  height: 5rem;

}

</style>

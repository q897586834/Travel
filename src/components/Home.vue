<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperlist="swiperList"></home-swiper>
    <home-icons :iconlist="iconList"></home-icons>
    <home-recommend :recommendlist="recommendList"></home-recommend>
    <home-weekend :weekendlist="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "./Home/Header";
import HomeSwiper from './Home/Swiper';
import HomeIcons from './Home/Icons';
import HomeRecommend from './Home/Recommend';
import HomeWeekend from './Home/Weekend';
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: "Home",
  components: {
    HomeHeader,HomeIcons,HomeSwiper,HomeRecommend,HomeWeekend
  },
  data() {
    return {
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[],
      lastcity:[],
  }
  },
  computed: {
    ...mapState(['city'])
  },
  methods:{
    getHomeInfo (){
      axios.get('/api/index.json?city='+ this.city)
      .then(this.getIndexInfo)
    },
    getIndexInfo(res){
      res = res.data
      if(res.ret && res.data){
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
      console.log(res)
    },
    // getCityInfo(res){
    //   res = res.data
    //   if(res.ret && res.data){
    //     const data = res.data
    //     this.city = data.hotCities
    //   }
    // }
  },
  mounted (){
    this.lastcity = this.city
    this.getHomeInfo()
    // console.log('mounted')
  },
  activated() {
    if(this.lastcity !== this.city){
      this.lastcity = this.city
      this.getHomeInfo()
    }
   // console.log('activated')
  
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

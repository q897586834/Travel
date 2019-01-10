<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "./Home/Header";
import HomeSwiper from './Home/Swiper';
import HomeIcons from './Home/Icons';
import HomeRecommend from './Home/Recommend';
import HomeWeekend from './Home/Weekend';
import axios from 'axios'
export default {
  name: "Home",
  components: {
    HomeHeader,HomeIcons,HomeSwiper,HomeRecommend,HomeWeekend
  },
  data() {
    return {
      city:'',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[],
    }
  },
  methods:{
    getHomeInfo (){
      axios.get('/api/index.json')
      .then(this.getIndexInfo)
      axios.get('/api/city.json')
      .then(this.getCityInfo)
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
    getCityInfo(res){
      res = res.data
      if(res.ret && res.data){
        const data = res.data
        this.city = data.hotCities
      }
    }
  },
  mounted (){
    this.getHomeInfo()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

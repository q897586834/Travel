<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "./Home/Header";
import HomeSwiper from './Home/Swiper';
import HomeIcons from './Home/Icons';
import HomeRecommend from './Home/Recommend';
import HomeWeekend from './Home/Weekend';
export default {
  name: "HelloWorld",
  components: {
    HomeHeader,HomeIcons,HomeSwiper,HomeRecommend,HomeWeekend
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

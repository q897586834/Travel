<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from "./Home/Header";
import HomeSwiper from './Home/Swiper';
import HomeIcons from './Home/Icons';
export default {
  name: "HelloWorld",
  components: {
    HomeHeader,HomeIcons,HomeSwiper
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

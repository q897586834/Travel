<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="(item,index) in swiperList"
        :key="index"
      >
        <img
          class="swiper-img"
          :src="item.imgUrl"
        />
      </swiper-slide>
      <div
        class="swiper-pagination"
        slot="pagination"
      ></div>
    </swiper>

  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperList: [
        {
          id: "0001",
          imgUrl:
            "https://img1.qunarzz.com/vc/1a/a4/43/21fe674b9648f457b2ab88e6b4.jpg"
        },
        {
          id: "0002",
          imgUrl:
            "https://img1.qunarzz.com/vc/a0/b2/8b/3e3a346ff497f75c338230b09a.jpg"
        }
      ],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
        },
        loop:true,
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>

<template>
  <div class="banner">
    <img
      class="banner-img"
      src="http://img1.qunarzz.com/sight/p0/201212/18/f195032e85740a4b93835fbb.jpg_600x330_692af2a1.jpg"
    >
    <div class="banner-info">
      <div class="banner-title">杭州海底世界</div>
      <div class="banner-num">
        <span class="iconfont banner-item">&#xe692;</span>39</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBanner"
};
</script>

<style lang="stylus" scoped>
.banner
  position relative                             
  overflow: hidden
  height: 0
  padding-bottom: 55%
  .banner-img
    width: 100%
  .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height: .6rem
      color #ffffff
      background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
      .banner-title
          flex:1
          font-size .32rem
          padding 0 .2rem
      .banner-num
          padding: 0 .4rem
          height .4rem
          line-height .4rem
          margin-top .14rem
          border-radius .2rem
          font-size .24rem
          background rgba(0,0,0,.8)
          .banner-item
              font-size .24rem
</style>
<template>
  <div>
    <div class="title">
      热销推荐
    </div>
    <ul>
      <li
        class="item"
        v-for="item in list"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img
            class="item-img"
            :src="item.imgUrl"
          />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props:{
      list:Array
  },
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          title: "杭州云曼温泉",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1810/cc/cc47164357acbeb5a3.water.jpg_200x200_151f0405.jpg",
          desc: "饱经沧桑的地方诉述着这座城的段段衷肠"
        },
        {
          id: "0002",
          title: "杭州云曼温泉",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1810/cc/cc47164357acbeb5a3.water.jpg_200x200_151f0405.jpg",
          desc: "饱经沧桑的地方诉述着这座城的段段衷肠"
        },
        {
          id: "0003",
          title: "杭州云曼温泉",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1810/cc/cc47164357acbeb5a3.water.jpg_200x200_151f0405.jpg",
          desc: "饱经沧桑的地方诉述着这座城的段段衷肠"
        },
        {
          id: "0004",
          title: "杭州云曼温泉",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1810/cc/cc47164357acbeb5a3.water.jpg_200x200_151f0405.jpg",
          desc: "饱经沧桑的地方诉述着这座城的段段衷肠"
        },
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  margin-top: 0.2rem
  line-height: 0.8rem
  background: #eee
  text-indent: 0.2rem
.item
  overflow: hidden
  display: flex
  height: 1.9rem
  .item-img
    width: 1.7rem
    height: 1.7rem
    padding: 0.1rem
  .item-info
    flex: 1
    padding: 0.1rem
    min-width: 0
    border-bottom: 1px solid #f3f3f3
    .item-title
      line-height: 0.54rem
      font-size: 0.32rem
      ellipsis()
    .item-desc
      line-height: 0.4rem
      color: #ccc
      ellipsis()
    .item-button
      line-height: 0.44rem
      margin-top: 0.16rem
      background: #ff9300
      padding: 0 0.2rem
      border-radius: 0.06rem
      color: #fff
</style>

<template>
  <div class="search">
    <input
      type="text"
      placeholder="输入城市名或拼音"
      class="search-input"
      v-model="keyword"
    >
    <div
      class="search-content"
      ref="search"
      v-show="keyword"
    >
      <ul>
        <li
          v-for="item in list"
          :key="item.id"
          class="search-item boder-bottom"
          @click="handleCityClick(item.name)"
        >{{item.name}}</li>
        <li
          class="search-item boder-bottom"
          v-show="hasNoData"
        >没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
import {mapMutations} from 'vuex'
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  methods: {
    // handleLetterClick(e) {
    //   this.$emit("change", e.target.innerText);
    // },
    handleCityClick(city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    }
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search);
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
  height: 0.72rem
  padding: 0 0.1rem
  background: $bgColor
  .search-input
    box-sizing: border-box
    width: 100%
    padding: 0 0.1rem
    height: 0.62rem
    line-height: 0.62rem
    text-align: cen ter
    border-radius: 0.06rem
    color: #666666
.search-content
  position: absolute
  overflow: hidden
  top: 1.58rem
  z-index: 1
  left: 0
  right: 0
  bottom: 0
  background: #eee
  .search-item
    line-height: 0.62rem
    background: #ffffff
    color: #666666
    padding-left: 0.2rem
</style>
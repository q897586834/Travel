<template>
  <div class="search">
    <input
      type="text"
      placeholder="输入城市名或拼音"
      class="search-input"
    >
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
  height: 0.72rem
  padding: 0 0.1rem
  background: $bgColor
  .search-input
    box-sizing border-box
    width : 100%
    padding: 0 0.1rem
    height: 0.62rem
    line-height: 0.62rem
    text-align: center
    border-radius: 0.06rem
    color #666666
</style>
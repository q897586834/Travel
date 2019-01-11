<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
        <city-alphabet></city-alphabet>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityAlphabet from './components/Alphabet'
import CityList from './components/List'
    export default {
        name:'City',
        components:{
            CityHeader,CitySearch,CityList,CityAlphabet
        }
    }
</script>

<style lang="stylus" scoped>

</style>
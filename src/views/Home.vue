<template>
<div class="home">
    <div class="mx-auto w-10/12 flex-wrap flex gap-24">
        <router-link :to="{name:'Country' ,params:{name: item.name}}" v-for="(item, index) in countries" :key="index" class="w-1/6 mx-auto overflow-hidden bg-white rounded-lg shadow-lg m-10">
            <img class="object-cover object-center w-full h-56" :src="item.flags.png" alt="avatar">
            <div class="px-6 py-4">
                <h1 class="text-xl font-semibold text-gray-800 dark:text-white">{{item.name}}</h1>
                <p class="py-2 text-gray-700 dark:text-gray-400"></p>
                <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <h1 class="px-2 text-sm"><b>Population:</b> {{item.population}}</h1>
                </div>
                <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <h1 class="px-2 text-sm"><b>Region:</b> {{item.region}}</h1>
                </div>
                <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <h1 class="px-2 text-sm"><b>Capital:</b> {{item.capital}}</h1>
                </div>
            </div>
        </router-link>
    </div>
</div>
</template>

<script>
import {
    mapState
} from "vuex";

export default {
    name: 'Home',
    mounted() {
        this.$store.dispatch('loadCountries')
    },
    computed: {
        ...mapState([
            'countries'
        ])
    }
}
</script>

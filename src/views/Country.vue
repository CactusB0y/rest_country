<template>
<div class="h-screen">
    <router-link class="text-white text-3xl absolute left-32 top-32" to="/"> back</router-link>
    <div class="flex justify-evenly h-full items-center">
        <div class="w-1/4">
            <img class="" :src="country.flag" alt="">
        </div>
        <div class="w-1/4 text-white">
            <h1 class="text-4xl mb-20">{{country.name}}</h1>
            <div class="flex justify-between text-left">
                <div>
                    <ul>
                        <li>
                            <b>Native Name: </b>
                            {{country.nativeName}}
                        </li>
                        <li>
                            <b>Population: </b>
                            {{country.population}}
                        </li>
                        <li>
                            <b>Region: </b>
                            {{country.region}}
                        </li>
                        <li>
                            <b>Sub Region: </b>
                            {{country.subregion}}
                        </li>
                        <li>
                            <b>Capital: </b>
                            {{country.capital}}
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <b>Top Level Domain: </b>
                            {{country.topLevelDomain[0]}}
                        </li>
                        <li>
                            <b>Currencies: </b>
                            {{country.currencies[0].code}}
                        </li>
                        <li>
                            <b>Languages: </b>
                            {{country.languages[0].name}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import index from '../store/index.js'

export default {
    props: {
        name: {
            type: String,
            required: true
        }
    },
    computed: {
        country() {
            return index.state.countries.find(countri => countri.name == this.name)
        }
    }
}
</script>

<style>

</style>

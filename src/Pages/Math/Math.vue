<template>
    <div class="section">
        <div class="container">
            <masonry
                v-bind:cols="{
                    default: 10
                }"
                v-bind:gutter="{
                    default: '1.5rem'
                }">
                <math-card
                    v-for="(card, index) in this.cards"
                    v-bind:key="index"
                    v-bind:card="card">
                </math-card>
            </masonry>
        </div>
    </div>
</template>

<script>
import MathCard from './MathCard.vue'

export default {
    components: {
        MathCard
    },
    created () {
        let cardNumber = 100
        let i = 1
        while (i <= cardNumber) {
            let addendFirst = this.getRandomNumber(10)
            let addendSecond = this.getRandomNumber(10)
            let correctSum = addendFirst + addendSecond
            this.cards.push({
                index: i,
                addendFirst,
                addendSecond,
                correctSum
            })
            i++
        }
        console.log(this.cards)
    },
    data () {
        return {
            cards: []
        }
    },
    methods: {
        getRandomNumber (limit) {
            return Math.floor(Math.random() * Math.floor(limit - 1)) + 1
        }
    }
}
</script>

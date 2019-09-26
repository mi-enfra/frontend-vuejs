<template>
    <div class="box has-text-right is-family-monospace">
        <p>{{ card.addendFirst }}</p>
        <p>+ {{ card.addendSecond }}</p>
        <input class="input has-text-right" autofocus
            v-bind:class="{
                'is-success': isCorrect(),
                'is-danger': !isCorrect() && this.answer !== '',
            }"
            v-bind:tabindex="card.index"
            v-model="answer">
    </div>
</template>

<script>
export default {
    props: {
        card: Object
    },
    data () {
        return {
            answer: ''
        }
    },
    methods: {
        isCorrect () {
            return this.card.correctSum === parseInt(this.answer)
        }
    }
}
</script>

<style lang="scss" scoped>
.box {
    padding: 0.675rem 1.25rem;
    p {
        padding: 0 0.675rem 0 0;
    }
    input {
        font-family: inherit;
    }
}
</style>

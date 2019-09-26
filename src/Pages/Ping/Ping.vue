<template>
    <div class="section">
        <chart id="chart"
            v-if="this.googleData.length > 0"
            v-bind:google-data="this.googleData"
            v-bind:labels="this.labels">
        </chart>
    </div>
</template>

<script>
import Ping from 'ping.js'
import Chart from './PingChart'

export default {
    name: 'Ping',
    components: {
        Chart
    },
    data () {
        return {
            Ping: new Ping(),
            labels: [],
            limit: 300,
            googleData: [],
            stats: {
                average: 0,
                highest: 0,
                lowest: 0
            }
        }
    },
    created () {
        setInterval(this.runPing, 1000)
        while (this.googleData.length <= this.limit) {
            this.googleData.splice(0, 0, NaN)
            this.labels.splice(0, 0, this.googleData.length - 1)
        }
    },
    methods: {
        runPing () {
            this.Ping.ping('https://www.google.com', (err, data) => {
                if (err) { data = -1000 }
                if (this.googleData.length > this.limit) { this.googleData.shift() }
                this.googleData.push(data)
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.section {
    height: 100%;
    #chart {
        height: 100%;
        position: relative;
    }
}
</style>

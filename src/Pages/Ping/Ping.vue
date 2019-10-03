<template>
    <div class="section">
        <chart id="chart"
            v-bind:google-data="this.googleData"
            v-bind:labels="this.labels">
        </chart>
    </div>
</template>

<script>
import Ping from 'ping.js'
import Chart from './PingChart'
import Dexie from 'dexie'

export default {
    name: 'Ping',
    components: {
        Chart
    },
    data () {
        return {
            Ping: new Ping(),
            db: new Dexie('Ping'),
            dbCounter: 0,
            labels: [],
            limit: 300,
            googleData: []
        }
    },
    created () {
        setInterval(this.runPing, 1000)
        this.db.version(1).stores({
            ping: 'id, latency'
        })
    },
    methods: {
        runPing () {
            this.Ping.ping('https://www.google.com', async (err, data) => {
                if (err) {
                    console.error(err)
                    return 0
                }
                await this.saveToDatabase(data)
                var pingArray = await this.db.ping.toArray()
                pingArray.forEach((value, index) => {
                    this.googleData.splice(index, 1, value.latency)
                    this.labels.splice(index, 1, this.limit - index)
                })
            })
        },
        async saveToDatabase (latency) {
            await this.db.ping.put({
                id: this.dbCounter,
                latency: latency
            })
            this.dbCounter++
            if (this.dbCounter + 1 > this.limit) {
                this.dbCounter = 0
            }
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

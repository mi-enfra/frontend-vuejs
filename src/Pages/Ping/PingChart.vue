<script>
import { Line } from 'vue-chartjs'

export default {
    extends: Line,
    props: {
        labels: Array,
        googleData: Array
    },
    data () {
        return {
            chartdata: {
                labels: this.labels,
                datasets: [
                    {
                        data: this.googleData,
                        backgroundColor: '#fff',
                        borderColor: '#4285f4',
                        borderWidth: 1,
                        fill: true,
                        label: 'Google',
                        pointRadius: 0,
                        steppedLine: 'middle'
                    }
                ]
            },
            options: {
                aspectRatio: 1,
                maintainAspectRatio: false,
                responsive: true,
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Seconds ago'
                        },
                        ticks: {
                            callback: function (dataLabel, index) {
                                return index % 10 === 0 ? dataLabel : ''
                            }
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Ping in ms'
                        }
                    }]
                }
            }
        }
    },
    watch: {
        googleData () {
            this.$data._chart.update()
        }
    },
    mounted () {
        this.renderChart(this.chartdata, this.options)
    }
}
</script>

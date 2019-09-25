<template>
    <div id="app">
        <navigation
            v-bind:navigation-links="this.links">
        </navigation>
        <router-view></router-view>
    </div>
</template>

<script>
import Navigation from './AppNavigation.vue'

export default {
    name: 'App',
    components: {
        Navigation
    },
    data () {
        return {
            links: [
                {
                    text: 'Home',
                    destination: '/'
                }
            ]
        }
    },
    watch: {
        $route (to, from) {
            let title = ''
            if (window.location.origin === 'http://localhost:8080') {
                title = '[Dev] Marvin\'s Lab'
            } else {
                title = 'Marvin\'s Lab'
            }
            if (to.meta.title !== undefined || to.meta.title !== '') {
                title += ' | ' + to.meta.title
            }
            document.title = title
        }
    }
}
</script>

<style lang="scss" scoped>
#app {
    height: 100%;
    .section {
        height: 100%;
    }
}
</style>

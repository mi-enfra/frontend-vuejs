<template>
    <div class="section">
        <div class="container">
            <h1>Vuejs Home Page</h1>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../Styles/_variables.scss';
@import '../../node_modules/bulma/sass/utilities/_all.sass';
@import '../../node_modules/bulma/sass/elements/title.sass';

.section {
    .container {
        h1 {
            @extend .title;
        }
    }
}
</style>

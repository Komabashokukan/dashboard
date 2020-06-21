<template>
    <div>
        <v-navigation-drawer v-model="drawer" temporary app>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        駒場小空間admin
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        Dashboard
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense nav>
                <v-list-item v-for="item in items" :key="item.title" :to="item.to" link align="left">

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>

                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app dark short>

            <v-toolbar-title class="headline">
                <span>駒場小空間admin</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn text v-for="item in items" :to="item.to" :key="item.to">{{ item.title }}</v-btn>
            </v-toolbar-items>

            <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-spacer class="hidden-sm-and-down"></v-spacer>

        </v-app-bar>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data () {
        return {
            drawer: null,
            items: [
                { title: 'Home', to: '/' },
                { title: '備品管理', to: '/equipments' },
                { title: '各種申請', to: '/form' },
                { title: '退出チェック', to: '/exit_check' }
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

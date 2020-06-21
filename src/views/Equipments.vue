<template>
    <v-container>
        <v-card>
            <v-card-title>機材一覧</v-card-title>

            <v-container fluid fill-height>
                <v-layout wrap justify-center>

                    <v-container>
                        <v-list two-line subheader class="text-left">
                            <v-flex v-for="(item, index) in items" :key="item">
                                <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
                                <v-divider v-else-if="item.divider" :key="index"></v-divider>
                                <v-tooltip right v-else :key="item.name">
                                    <template v-slot:activator="{ on }">
                                        <v-list-item class="file-tile" v-on="on" :to="item.to">
                                            <v-list-item-avatar>
                                                <v-icon :color="item.color">{{ item.icon }}</v-icon>
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title>{{ item.name }}</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </template>
                                </v-tooltip>
                            </v-flex>
                        </v-list>
                    </v-container>

                </v-layout>
            </v-container>

        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'Equipments',
    computed: {
        items () {
            return [
                { header: '舞台' },
                { name: '舞台備品一覧', to: '#', icon: 'mdi-screw-machine-round-top', color: 'blue lighten-2' },
                { divider: true },
                { header: '音響' },
                { name: '音響備品一覧', to: '#', icon: 'mdi-music-note', color: 'green lighten-1' },
                { divider: true },
                { header: '照明' },
                { name: '照明備品一覧', to: '/equipments/equipment_light', icon: 'mdi-lightbulb-on', color: 'orange lighten-2' },
                { name: '機材管理表', to: '/equipments/equipment_log_light', icon: 'mdi-lightbulb-on', color: 'orange lighten-2' },
                { name: '予備球管理表', to: '#', icon: 'mdi-lightbulb-on', color: 'orange lighten-2' }
            ]
        }
    },
    methods: {
        func () {
        }
    }
}
</script>

<style scoped>

</style>

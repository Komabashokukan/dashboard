<template>
    <v-container>
        <v-card>
            <v-card-title>退出チェック</v-card-title>

            <v-container fluid fill-height>
                <v-layout wrap justify-center>

                    <v-container>
                        <v-list two-line subheader class="text-left">
                            <v-flex v-for="item in items" :key="item">
                                <v-list-item :to="item.to">
                                    <v-list-item-avatar>
                                        <v-icon color="blue">{{ item.icon }}</v-icon>
                                    </v-list-item-avatar>
                                    {{ item.title }}
                                </v-list-item>
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
    name: 'ExitCheck',
    computed: {
        items () {
            return [
                { title: '退出時点検表(舞台部門)', to: '/exit_check/exit_check_set', icon: 'mdi-screw-machine-round-top' },
                { title: '退出時点検表(照明部門)', to: '/exit_check/exit_check_light', icon: 'mdi-lightbulb-on' },
                { title: '退出時点検表(音響部門)', to: '/exit_check/exit_check_sound', icon: 'mdi-music-note' }
            ]
        }
    }
}
</script>

<style scoped>

.form-title {
    font-size: 16pt;
}

</style>

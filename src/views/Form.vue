<template>
    <v-container>
        <v-card>
            <v-card-title>各種申請</v-card-title>

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
    name: 'Form',
    computed: {
        items () {
            return [
                { title: '継続使用申請書', to: '/form/reservation_request', icon: 'mdi-file-document' },
                { title: '継続使用計画書', to: '/form/project_plan', icon: 'mdi-calendar-multiple-check' },
                { title: '時間外使用申請書', to: '/form/overtime_use', icon: 'mdi-table-clock' },
                { title: '同意書', to: '/form/consent', icon: 'mdi-badge-account-horizontal-outline' }
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

<template>
    <v-row class="fill-height">
    <v-col>
      <v-sheet>
        <v-toolbar flat color="white">
          <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
            Today
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="prev">
            <v-icon small>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="next">
            <v-icon small>mdi-chevron-right</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-toolbar-title v-if="$refs.calendar" :justify="center">
            {{this.showedYear}}年 {{ this.showedMonth }}月
          </v-toolbar-title>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="95%">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :events="events"
          :event-color="getEventColor"
          :type="type"
          @change="updateRange"
          @click:event="showEvent"
        ></v-calendar>
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-y
          max-width="400px"
        >
          <v-card
            color="grey lighten-4"
            min-width="350px"
            flat
          >
            <v-toolbar
              :color="selectedEvent.color"
              dark
            >
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <span v-html="selectedEvent"></span>
            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                color="secondary"
                @click="selectedOpen = false"
              >
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
    data: () => ({
        showedMonth: '',
        showedYear: '',
        focus: '',
        type: 'month',
        typeToLabel: {
            month: 'Month',
            week: 'Week',
            day: 'Day',
            '4day': '4 Days'
        },
        selectedEvent: {},
        selectedElement: null,
        selectedOpen: false,
        events: [],
        colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
        names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party']
    }),
    mounted () {
        this.$refs.calendar.checkChange()
    },
    methods: {
        viewDay ({ date }) {
            this.focus = date
            this.type = 'day'
        },
        getEventColor (event) {
            return event.color
        },
        setToday () {
            this.focus = ''
        },
        prev () {
            this.$refs.calendar.prev()
        },
        next () {
            this.$refs.calendar.next()
        },
        showEvent ({ nativeEvent, event }) {
            const open = () => {
                this.selectedEvent = event
                this.selectedElement = nativeEvent.target
                // eslint-disable-next-line no-return-assign
                setTimeout(() => this.selectedOpen = true, 10)
            }
            if (this.selectedOpen) {
                this.selectedOpen = false
                setTimeout(open, 10)
            } else {
                open()
            }
            nativeEvent.stopPropagation()
        },
        updateRange ({ start, end }) {
            this.events = this.fetchDB({ start, end })
            this.updateTitle()
        },
        updateTitle () {
            let tmpDate = {}
            if (this.focus.length === 0) {
                tmpDate = this.$refs.calendar.start.split('-')
            } else {
                tmpDate = this.focus.split('-')
            }
            this.showedYear = Number(tmpDate[0])
            this.showedMonth = Number(tmpDate[1])
        },
        rnd (a, b) {
            return Math.floor((b - a + 1) * Math.random()) + a
        },
        // 後に変える
        fetchDB ({ start, end }) {
            const events = []
            const min = new Date(`${start.date}T00:00:00`)
            const max = new Date(`${end.date}T23:59:59`)
            const days = (max.getTime() - min.getTime()) / 86400000
            const eventCount = days - 20
            for (let i = 0; i < eventCount; i++) {
                const allDay = this.rnd(0, 3) === 0
                const firstTimestamp = this.rnd(min.getTime(), max.getTime())
                const first = new Date(firstTimestamp - (firstTimestamp % 900000))
                const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
                const second = new Date(first.getTime() + secondTimestamp)
                const detail = 'hello'
                console.log(first.toISOString().substring(0, 16))
                events.push({
                    name: this.names[this.rnd(0, this.names.length - 1)],
                    start: first.toISOString().substring(0, 16),
                    end: second.toISOString().substring(0, 16),
                    color: this.colors[this.rnd(0, this.colors.length - 1)],
                    timed: !allDay,
                    details: detail
                })
            }
            return events
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
  <div>
    <vue-plotly :data="data" :layout="layout" :options="options"/>
  </div>
</template>

<script>
import computeResults from '../util/computeResults.js'
import VuePlotly from '@statnett/vue-plotly'

const opinionGiven = [
  {
    address: 'a',
    pollUid: 1,
    ranking: [3, 0, 1, 2]
  },
  {
    address: 'a',
    pollUid: 1,
    ranking: [1, 0, 3, 2]
  },
  {
    address: 'a',
    pollUid: 1,
    ranking: [2, 3, 0, 1]
  },
  {
    address: 'a',
    pollUid: 1,
    ranking: [1, 0, 2, 3]
  },
  {
    address: 'a',
    pollUid: 1,
    ranking: [0, 1, 3, 2]
  },
  {
    address: 'a',
    pollUid: 1,
    ranking: [3, 2, 1, 0]
  },
  {
    address: 'a',
    pollUid: 1,
    ranking: [1, 0, 3, 2]
  },
  {
    address: 'a',
    pollUid: 1,
    ranking: [2, 3, 1, 0]
  },
  {
    address: 'a',
    pollUid: 1,
    ranking: [0, 2, 3, 1]
  }
]
const pollUid = 1
const numberOfChoices = 4

var layout = {
  title: 'Results',
  xaxis: {
    title: {
      text: 'Number of votes'
    },
    tickvals: ',d'
  },
  yaxis: {
    title: {
      text: 'Choice'
    },
    autorange: 'reversed'
  },
  barmode: 'stack'
}
export default {
  components: {
    VuePlotly
  },
  data () {
    return {
      data: computeResults(opinionGiven, pollUid, numberOfChoices),
      layout: layout,
      options: {}
    }
  }
}

</script>

<style scoped>

</style>

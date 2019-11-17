<template>
  <div>
  </div>
</template>

<script>
import computeResults from '../util/computeResults'
const opinionGiven = [
  {
    address: 'a',
    pollUid: 1,
    ranking: [0, 1, 2]
  },
  {
    address: 'a',
    pollUid: 1,
    ranking: [1, 0, 2]
  },
  {
    address: 'a',
    pollUid: 1,
    ranking: [2, 0, 1]
  },
  {
    address: 'a',
    pollUid: 1,
    ranking: [1, 2, 0]
  },
  {
    address: 'a',
    pollUid: 0,
    ranking: [0, 1, 2]
  }
]
const pollUid = 1
const results = computeResults(opinionGiven, pollUid)
console.log(results)
export default results
/*
export default {
  name: 'results',
  components: {
    'result-component': () => import('components/ResultComponent')
  },
  data () {
    results = computeResults(opinionGiven, pollUid)
    console.log(results)
    return { results: results }
  }
}
*/
</script>

<style scoped>

</style>

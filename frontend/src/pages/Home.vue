<template>
  <div id="app" class="columns">
    <div class="column">
      <poll-component v-for="poll in polls" :poll="poll" :key="poll.id"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'poll-list',
  components: {
    'poll-component': () => import('components/PollComponent')
  },
  data () {
    return { polls: [
      {
        id: 1,
        name: 'Should we kick out all foreigners?',
        author: 'SVP',
        img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        org: ''
      },
      {
        id: 2,
        name: 'What should I eat for dinner?',
        author: 'Earl',
        img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        org: 'My cozy home'
      },
      {
        id: 3,
        name: 'How much money do you earn?',
        author: 'FDP',
        img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        org: ''
      }
    ] }
  }
}
</script>

<style scoped>

</style>

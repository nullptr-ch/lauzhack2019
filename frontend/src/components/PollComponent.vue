<template>
  <q-item clickable>
    <q-item-section avatar>
      <q-img :src="poll.img"
        spinner-color="white"
        style="height: 50px; max-width: 50px"
      />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{poll.name}}</q-item-label>
      <q-item-label caption lines="2">By {{poll.author}}</q-item-label>
    </q-item-section>

    <q-item-section side top>
      <q-item-label caption>{{poll.org}}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'poll-component',
  props: {
    poll: Object
  }
}
</script>

<style scoped>

</style>

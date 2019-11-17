<template>
  <q-page padding>
    <div v-if="loading" class="fixed-center">
      <q-circular-progress
        indeterminate
        size="50px"
        color="lime"
        class="q-ma-md"
      />
    </div>
    <div v-else>
      <h1>
        <q-avatar color="red" text-color="white" icon="directions" />
        {{ pollName }}
      </h1>
      <p>
        {{ pollDescription }}
      </p>
      <h2>
        Micropinions
      </h2>
      <q-separator inset />
      <q-list bordered padding>
        <q-item v-for="alternative in alternatives" :key="alternative" tag="label" v-ripple>
          <q-item-section side top>
            <q-radio v-model="opinion" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ alternative }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <div class="text-right">
        <q-btn color="primary" label="Micropinionate !" />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Opinion',
  data: function () {
    return {
      loading: true
    }
  },
  props: {
    pollUid: {
      required: true,
      type: Number
    }
  },
  mounted: function () {
    let allEvents = this.$store.state.contractInstance.getPastEvents('allEvents')
    let pollCreationEvent = allEvents.filter(event => event.pollUid === this.pollUid)
    this.pollName = pollCreationEvent.name
    this.description = pollCreationEvent.description
    this.alternatives = pollCreationEvent.alternatives
    this.loading = false
  }
}
</script>

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
        {{ contract.name }}
      </h1>
      <p>
        {{ contract.description }}
      </p>
      <h2>
        Micropinions
        <q-separator class="q-mt-lg" />
      </h2>
      <q-list padding>
        <q-item v-for="alternative in contract.alternatives" :key="alternative" tag="label" v-ripple>
          <q-item-section side top>
            <q-radio v-model="1" />
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
import { mapGetters } from 'vuex'

export default {
  name: 'Opinion',
  data: function () {
    return {
      loading: false,
      contract: this.computeContract()
    }
  },
  props: {
    pollUid: {
      required: true
    }
  },
  computed: {
    ...mapGetters('contract', ['events'])
  },
  methods: {
    computeContract: function () {
      let eventSignatures = []
      let events = this.$store.getters['contract/events']
      for (let i = 0; i < events.length; i++) {
        eventSignatures.push(global.web3.eth.abi.encodeEventSignature(events[i]))
      }

      const MyContract = new global.web3.eth.Contract(this.$store.state.contract.abi, this.$store.state.contract.address)
      MyContract.events.allEvents({ fromBlock: 0 }).on('data', function (event) {
        for (let i = 0; i < eventSignatures.length; i++) {
          if (event.raw.topics[0] === eventSignatures[i]) {
            let decoded = global.web3.eth.abi.decodeParameters(['address', 'uint256', 'string', 'string', 'uint256', 'string[]'], event.raw.data)
            let contract = {
              name: decoded[2],
              description: decoded[3],
              closingMoment: decoded[4],
              alternatives: decoded[5]
            }
            console.log(contract)
            return contract
          }
        }
      })
      return {
        name: 'Poll1',
        description: 'The second poll',
        closingMoment: 123,
        alternatives: ['Alternative 1', 'Alternative 2']
      }
    }
  }
}
</script>

<template>
  <q-page padding>
    <div>
      {{ $store.state.ethengine.account }}
      {{ $store.state.ethengine.balance }}
      {{ $store.state.ethengine.network }}
      {{ $store.state.ethengine.netId }}
      {{ $store.state.ethengine.unlocked }}
      {{ $store.state.ethengine.rpcURL }}
      {{ $store.state.ethengine.blockNumber }}
      {{ $store.state.ethengine.gasPrice }}
      {{ $store.state.ethengine.fallbackHost }}
      {{ $store.state.ethengine.connected }}
      {{ $store.state.ethengine.isInjected }}
      {{ $store.state.ethengine.provider }}
      {{ $store.state.ethengine.metamaskDisabled }}
    </div><div>
      {{ $store.state.contract.abi }}
      {{ $store.state.contract.bin }}
      {{ $store.state.contract.hashes }}
      {{ $store.state.contract.address }}
      {{ $store.state.contract.txnReceipts }}
      {{ $store.state.contract.callLog }}
    </div><div>
      {{ events }}
    </div>
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
import { mapGetters } from 'vuex'

export default {
  name: 'Opinion',
  data: function () {
    return {
      loading: true,
      contract: null
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
  async mounted () {
    let eventSignatures = []
    let events = this.$store.getters['contract/events']
    for (let i = 0; i < events.length; i++) {
      eventSignatures.push(global.web3.eth.abi.encodeEventSignature(events[i]))
    }

    const MyContract = await new global.web3.eth.Contract(this.$store.state.contract.abi.abi, this.$store.state.contract.address)
    MyContract.events.allEvents({ fromBlock: 0 }).on('data', function (event) {
      for (let i = 0; i < eventSignatures.length; i++) {
        if (event.raw.topics[0] === eventSignatures[i]) {
          console.log(global.web3.eth.abi.decodeParameters(['address', 'uint256', 'string', 'string', 'uint256', 'string[]'], event.raw.data))
        }
      }
    })
  },
  methods: {
    decodeEvent: function (rawData) {

    }
  }
}
</script>

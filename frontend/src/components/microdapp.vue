<template>
  <metamask/>
</template>

<script>
import Metamask from 'components/metamask'
export default {
  name: 'microdapp',
  beforeCreate () {
    console.log('registerWeb3 Action dispatched from microdapp.vue')
    this.$store.dispatch('registerWeb3')
  },
  components: {
    'metamask': Metamask
  }
}
</script>

<style scoped>

</style>

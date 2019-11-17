import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getWeb3 from '../util/getWeb3'

import abi from 'assets/microdemocracy-abi.json'

const contractAddress = '0xdfdEfF7650a96A6ded29c8c7E6eE060c3eEaa4Ac'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    strict: true,
    state,
    mutations: {
      registerWeb3Instance (state, payload) {
        let result = payload
        let web3Copy = state.web3
        web3Copy.coinbase = result.coinbase
        web3Copy.networkId = result.networkId
        web3Copy.balance = parseInt(result.balance, 10)
        web3Copy.isInjected = result.injectedWeb3
        web3Copy.web3Instance = result.web3
        state.web3 = web3Copy

        console.log(abi)
        const Contract = web3Copy.web3Instance().eth.Contract
        console.log('a')
        state.contractInstance = new Contract(abi, contractAddress)
        console.log('b')
      }
    },
    actions: {
      registerWeb3 ({ commit }) {
        console.log('registerWeb3 Action being executed')
        getWeb3.then(result => {
          console.log('committing result to registerWeb3Instance mutation')
          commit('registerWeb3Instance', result)
        }).catch(e => {
          console.log('error in action registerWeb3', e)
        })
      }
    }
  })

  return Store
}

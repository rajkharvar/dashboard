import Vue from 'vue'
import Web3 from 'web3'
// import BN from 'bignumber.js'
let web3
let accounts
let error
export const EventBus = new Vue()

if (typeof window.ethereum === 'undefined'
|| typeof window.web3 === 'undefined') {
  alert('Browser does not support ethereum. Consider installing metamask!')
} else {
  // In the case the user has MetaMask installed, you can easily
  // ask them to sign in and reveal their accounts:
  ethereum.enable()
  web3 = new Web3(window.web3.currentProvider)
}
// const _1e18 = new web3.utils.BN('1000000000000000000')
export const createJob = async (url, selector, repeat, eth) => {
  let jobManagerBuild = require('../../build/contracts/JobManager.json')

  let networkid = 4
  let jobManager = new web3.eth.Contract(jobManagerBuild['abi'], jobManagerBuild['networks'][networkid].address)

  // const accounts = await web3.eth.getAccounts()
  accounts = await ethereum.enable()

  // console.log(accounts)
  const res = await jobManager.methods.createJob(url, selector, repeat).send({
    from: accounts[0],
    value: eth
  })

  return {
    // id,
    tx: res.transactionHash
  }
}

// export const getContractAddress = (assetId) => {
//   return CDPFactory.methods.contracts(assetId).call()
// }

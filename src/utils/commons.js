import Vue from 'vue'
import Web3 from 'web3'
var _ = require('lodash/object')

// import BN from 'bignumber.js'
let web3
let accounts
let networkid = 4

// let error
// let ethereum
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

  // let networkid = 4
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

export const faucet = async (address) => {
  let faucetBuild = require('../../build/contracts/Faucet.json')

  let faucet = new web3.eth.Contract(faucetBuild['abi'], faucetBuild['networks'][networkid].address)

  // const accounts = await web3.eth.getAccounts()
  accounts = await ethereum.enable()

  // console.log(accounts)
  const res = await faucet.methods.faucet(address).send({
  from: accounts[0]})

  return {
    // id,
    tx: res.transactionHash
  }
}

export const getSchBalance = async (address) => {
  let simpleTokenBuild = require('../../build/contracts/SimpleToken.json')

  let simpleToken = new web3.eth.Contract(simpleTokenBuild['abi'], simpleTokenBuild['networks'][networkid].address)

  // const accounts = await web3.eth.getAccounts()
  accounts = await ethereum.enable()

  // console.log(accounts)
  const res = await simpleToken.methods.balanceOf(address).call()

  return res
}

export const get = async (data, selector) => {
  return _.get(data, selector)
}

// export const url = 'http://localhost:3000/'
export const url = 'https://api.razor.network/'

// export const getContractAddress = (assetId) => {
//   return CDPFactory.methods.contracts(assetId).call()
// }

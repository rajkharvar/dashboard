<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">Recent Staking Transactions</h3>
        </div>
        <div class="col text-right">
          <!-- <a href="#!" class="btn btn-sm btn-primary">Explore on Etherscan</a> -->
        </div>
      </div>
    </div>
    <base-pagination
      v-model="currentPage"
      :pageCount="pageCount"
      :perPage="perPage"
      aria-controls="my-table"
      class="px-3"
    ></base-pagination>
    <!-- <p class="mt-3">Current Page: {{ currentPage }}</p> -->

    <div class="table-responsive">

      <base-table thead-classes="thead-light"
                  :data="dataPage"
                  :per-page="perPage"
:current-page="currentPage">
<!-- res.push({epoch: data.epoch, staker: staker, action: events[i].event, value: data.amount, timestamp: data.timestamp }) -->


        <template slot="columns">
          <th>Epoch</th>
          <th>Staker</th>
          <th>Age</th>
          <th>Action</th>
          <th>Change</th>
          <th>New Stake</th>
          <!-- <th>Credit</th> -->
        </template>

        <template slot-scope="{row}">
          <th scope="row"  style=" vertical-align: middle;">
            {{row.epoch}}
          </th>

          <td scope="row">
            <div class="jazz-box">
              <jazzicon :address=row.staker :diameter="30" />
              <div>{{row.staker}}</div>
            </div>
          </td>
          <td  style=" vertical-align: middle;">
              {{row.timestamp}}
          </td>
          <td  style=" vertical-align: middle;">
            <span class="badge badge-primary">{{row.action}} </span>
          </td>
          <td  style=" vertical-align: middle;">
            <span class="text-success" v-if="row.change>0">+{{row.change}}</span>
            <span class="text-danger" v-if="row.change<0">{{row.change}}</span>
          </td>
          <td  style=" vertical-align: middle;">
            {{row.newStake}}
          </td>

          <!-- <td  style=" vertical-align: middle;">
            {{row.credit}}
          </td> -->
        </template>

      </base-table>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'staking-table',
    props: ['tableData'],
    data() {
      return {
        perPage: 10,
        currentPage: 1
      }
  },
  computed: {
  rows() {
    return this.tableData.length
},
  pageCount() {
    return Math.floor(this.tableData.length / this.perPage)
},
  dataPage() {
      return this.tableData.slice(this.perPage*(this.currentPage-1),this.perPage*(this.currentPage))
  }
}
}

</script>
<style>
</style>

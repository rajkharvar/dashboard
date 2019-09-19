<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">Recent Blocks</h3>
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
<!-- res.push({epoch: data.epoch, staker: staker, action: events[i].event, medians: data.medians, jobIds: data.jobIds, timestamp: data.timestamp }) -->

        <template slot="columns">
          <th>Epoch</th>
          <th>Staker</th>
          <th>Age</th>
          <th>Action</th>
          <th>Medians</th>
          <th>JobIds</th>
        </template>

        <template slot-scope="{row}">
          <th scope="row"  style=" vertical-align: middle;">
            {{row.epoch}}
          </th>

        <td scope="row" style=" vertical-align: middle;" >
            <jazzicon :address=row.staker :diameter="30" style="display:inline; vertical-align: middle;" /> <span style="  display: inline;
vertical-align: middle;"> {{row.staker}}</span>
</td>
          <td  style=" vertical-align: middle;">
            {{row.timestamp}}
          </td>
          <td  style=" vertical-align: middle;">
            <span class="badge badge-primary">{{row.action}} </span>
          </td>
          <td  style=" vertical-align: middle;">
            {{row.medians}}
          </td>
          <td  style=" vertical-align: middle;">
            {{row.jobIds}}
          </td>
        </template>

      </base-table>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'blocks-table',
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

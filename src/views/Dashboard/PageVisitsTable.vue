<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">Recent Transactions</h3>
        </div>
        <div class="col text-right">
          <a href="#!" class="btn btn-sm btn-primary">Explore on Etherscan</a>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table thead-classes="thead-light"
                  :data="tableData">
        <template slot="columns">
          <th>Address</th>
          <th>Action</th>
          <th>Value</th>
          <th>Timestamp</th>
        </template>

        <template slot-scope="{row}">
          <th scope="row">
            {{row.address}}
          </th>
          <td>
            {{row.action}}
          </td>
          <td>
            {{row.value}}
          </td>
          <td>
            <!-- <i class="fas fa-arrow-up text-success mr-3"
               :class="row.bounceRateDirection === 'up' ? 'text-success': 'text-danger'">
            </i> -->
            {{row.timeStamp}}
          </td>
        </template>

      </base-table>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'page-visits-table',
    data() {
      return {
        tableData: [
          {
            address: '0xdeadbeef',
            action: 'vote',
            value: '340',
            timeStamp: '090909',
            // bounceRateDirection: 'up'
          }
        ]
      }
    }
  }
</script>
<style>
</style>

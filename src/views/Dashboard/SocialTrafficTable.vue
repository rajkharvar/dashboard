<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">Votes by stakers in last epoch</h3>
        </div>
        <!-- <div class="col text-right">
          <base-button size="sm" type="primary">See all</base-button>
        </div> -->
      </div>
    </div>

    <div class="table-responsive">
      <base-table thead-classes="thead-light"
                  :data="tableData">
        <template slot="columns">
          <th>Staker</th>
          <th>Value</th>
          <th>Weight</th>
        </template>

        <template slot-scope="{row}">
          <th scope="row">
            {{row.staker}}
          </th>
          <td>
            {{row.value}}
          </td>
          <td>
            <div class="d-flex align-items-center">
              <span class="mr-2">{{row.weight}}%</span>
              <base-progress :type="row.progressType"
                             class="pt-0"
                             :show-percentage="false"
                             :value="row.weight"
              />
            </div>
          </td>
        </template>

      </base-table>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'social-traffic-table',
    data() {
      return {
        tableData: [
          {
            staker: 'Facebook',
            value: '1,480',
            weight: 60,
            // progressType: 'gradient-danger',
          }
        ]
      }
    }

  }
</script>
<style>
</style>

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
          <th>Stake</th>
          <th>Weight</th>
        </template>

        <template slot-scope="{row}">
          <th scope="row" style=" vertical-align: middle;" >
              <jazzicon :address=row.staker :diameter="30" style="display:inline; vertical-align: middle;" /> <span style="  display: inline;
  vertical-align: middle;"> {{row.staker}}</span>
          </th>
          <td  style=" vertical-align: middle;">
            {{row.value}}
          </td>
          <td  style=" vertical-align: middle;">
            {{row.stake}}
          </td>
          <td  style=" vertical-align: middle;">
            <div class="d-flex align-items-center">
              <!-- <span class="mr-2">{{row.weight}}%</span> -->
              <base-progress
                             class="pt-0"
                             :show-percentage="true"
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
    props: ['tableData']
  }
</script>
<style>
</style>

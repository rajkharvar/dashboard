<template>

    <div>
        <base-header style="backgroundColor:#40429b" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->
            <div class="row">
                    <select v-model="selected"  @change="initBigChart(selected)">
              <option v-for="job in jobs" v-bind:value="job.id">
                {{ job.url }}
              </option>
            </select>
            <!-- <span>Selected: {{ selected }}</span> -->
                <!-- <div class="col-xl-3 col-lg-6">
                    <stats-card title="Total traffic"
                                type="gradient-red"
                                sub-title="350,897"
                                icon="ni ni-active-40"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                            <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Total traffic"
                                type="gradient-orange"
                                sub-title="2,356"
                                icon="ni ni-chart-pie-35"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 12.18%</span>
                            <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Sales"
                                type="gradient-green"
                                sub-title="924"
                                icon="ni ni-money-coins"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                            <span class="text-danger mr-2"><i class="fa fa-arrow-down"></i> 5.72%</span>
                            <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>

                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Performance"
                                type="gradient-info"
                                sub-title="49,65%"
                                icon="ni ni-chart-bar-32"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 54.8%</span>
                            <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>
                </div>
            -->
            </div>
        </base-header>

        <!--Charts-->
        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col-xl-12 mb-5 mb-xl-0">
                    <card type="default" header-classes="bg-transparent">
                        <div slot="header" class="row align-items-center">
                            <div class="col">
                                <h6 class="text-light text-uppercase ls-1 mb-1">Data</h6>
                                <!-- <h5 class="h3 text-white mb-0">Sales value</h5> -->
                            </div>
                            <div class="col">
                                <!-- <ul class="nav nav-pills justify-content-end">
                                    <li class="nav-item mr-2 mr-md-0">
                                        <a class="nav-link py-2 px-3"
                                           href="#"
                                           :class="{active: bigLineChart.activeIndex === 0}"
                                           @click.prevent="initBigChart(0)">
                                            <span class="d-none d-md-block">Month</span>
                                            <span class="d-md-none">M</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link py-2 px-3"
                                           href="#"
                                           :class="{active: bigLineChart.activeIndex === 1}"
                                           @click.prevent="initBigChart(1)">
                                            <span class="d-none d-md-block">Week</span>
                                            <span class="d-md-none">W</span>
                                        </a>
                                    </li>
                                </ul> -->
                            </div>
                        </div>
                        <line-chart
                                :height="350"
                                ref="bigChart"
                                :chart-data="bigLineChart.chartData"
                                :extra-options="bigLineChart.extraOptions"
                        >
                        </line-chart>

                    </card>
                </div>

                <!-- <div class="col-xl-4">
                    <card header-classes="bg-transparent">
                        <div slot="header" class="row align-items-center">
                            <div class="col">
                                <h6 class="text-uppercase text-muted ls-1 mb-1">Performance</h6>
                                <h5 class="h3 mb-0">Total orders</h5>
                            </div>
                        </div>

                        <bar-chart
                                :height="350"
                                ref="barChart"
                                :chart-data="redBarChart.chartData"
                        >
                        </bar-chart>
                    </card>
                </div> -->
            </div>
            <!-- End charts-->

            <!--Tables-->
            <!-- <div class="row mt-5">
                <div class="col-xl-8 mb-5 mb-xl-0">
                    <page-visits-table></page-visits-table>
                </div>
                <div class="col-xl-4">
                    <social-traffic-table></social-traffic-table>
                </div>
            </div> -->
            <!--End tables-->
        </div>

    </div>
</template>
<script>
  // Charts
  import * as chartConfigs from '@/components/Charts/config';
  import LineChart from '@/components/Charts/LineChart';
  // import BarChart from '@/components/Charts/BarChart';

  // Tables

  // import SocialTrafficTable from './Dashboard/SocialTrafficTable';
  // import PageVisitsTable from './Dashboard/PageVisitsTable';

  export default {
    components: {
      LineChart,
      // BarChart,
      // PageVisitsTable,
      // SocialTrafficTable,
    },
    data() {
      return {
          jobs: [],
          selected: null,
        bigLineChart: {
          allData: [
            [0, 1, 2, 3,1],
            // [0, 20, 5, 25, 10, 30, 15, 40, 40]
          ],
          activeIndex: 0,
          chartData: {
            datasets: [],
            labels: [],
        },
          extraOptions: chartConfigs.blueChartOptions,
        }
        // redBarChart: {
        //   chartData: {
        //     labels: ['gog', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        //     datasets: [{
        //       label: 'Sales',
        //       data: [25, 20, 30, 22, 17, 29]
        //     }]
        //   }
        // }
      };
    },
    methods: {
        async getJobs() {
            let data = await this.axios.get('https://api.razor.network/jobs')
            for(let i = 0; i<data.data.message.length; i++) {
                this.jobs.push({'url':data.data.message[i].url,'id':data.data.message[i].id})
            }
            // console.log(this.jobs)

        },
      async initBigChart(jobId) {
        let data = await this.axios.get('https://api.razor.network/job/'+jobId)
        // console.log('d',data)
        // console.log('d',data.data)
        // console.log('length',Object.keys(data.data).length)
        let data2 = []
        let labels = []
        for(let i = 0; i < Object.keys(data.data).length; i++) {
            data2.push((data.data[i].value/100))
            labels.push(this.moment.unix(Number(data.data[i].timestamp)).format('DD-MMM HH:mm'))

        }
        // console.log('d2',data2)
        let chartData = {
          datasets: [
            {
              label: 'Price',
              data: data2
            }
          ],
          labels: labels,
        };
        this.bigLineChart.chartData = chartData;
        // this.bigLineChart.activeIndex = index;
      }
    },
    mounted() {
      // this.initBigChart(0);
      this. getJobs()
     // this.bigLineChart.allData=[5,5,5]
    }
  };
</script>
<style></style>

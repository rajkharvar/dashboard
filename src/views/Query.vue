<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->
            <div class="row">
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
        <!-- <div class="container-fluid mt--7">
            <div class="row">
                <div class="col-xl-12 mb-5 mb-xl-0">
                    <card type="default" header-classes="bg-transparent">
                        <div slot="header" class="row align-items-center">
                            <div class="col">
                                <h6 class="text-light text-uppercase ls-1 mb-1">Bitcoin price</h6>
                                <h5 class="h3 text-white mb-0">Sales value</h5> -->
                            <!-- </div>
                            <div class="col"> -->
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
                            <!-- </div>
                        </div> -->
                        <!-- <line-chart
                                :height="350"
                                ref="bigChart"
                                :chart-data="bigLineChart.chartData"
                                :extra-options="bigLineChart.extraOptions"
                        >
                        </line-chart>

                    </card>
                </div> -->

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
            <!-- </div> -->
            <!-- End charts-->

            <!--Tables-->
            <div class="row mt-5">
                <div class="col-xl-8 mb-5 mb-xl-0">
                    <!-- (url, selector, repeat, eth, account) -->
                <!-- <form  @submit="formSubmit"> -->
                    <h1>Create custom query</h1>
                    Note: Use ethereum compatible browser and set network to Rinkeby. Make sure you have some eth for tx. <br/>
                    Example: Use the following URL to fetch price of US stocks from NASDAQ. Substitute AAPL with symbol of any stock. <br/>
                    https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AAPL&apikey=E1BN9Y09VQ32BQ00<br/>
                    Use selector: Global Quote["05. price"]<br/>
                    check "explore custom queries" page after a few minutes to see the result.<br/>
                    another example: https://api.gemini.com/v1/pubticker/ltcusd selector: last <br/>

                    <input  v-model = "url" placeholder="JSON URL" class="form-control" />

                    <input  v-model= "selector" placeholder="JSON selector" class="form-control" />
                    Repeat: <input type="checkbox"   v-model="repeat" placeholder="selector" class="form-control" />
                    <input  v-model='eth' placeholder="fees in ether" class="form-control" />
                    <a class="btn btn-success" @click = "createJob"> Submit </a>
                <!-- </form> -->
        </div></div>
            <!-- <div class="row mt-5">
                <div class="col-xl-8 mb-5 mb-xl-0">
                    <page-visits-table></page-visits-table>
                </div>
                <div class="col-xl-4">
                    <social-traffic-table></social-traffic-table>
                </div>
            </div> -->
            <!--End tables-->
        <!-- </div> -->

    </div>
</template>
<script>

import { createJob } from '@/utils/commons'

  // Charts
  // import * as chartConfigs from '@/components/Charts/config';
  // import LineChart from '@/components/Charts/LineChart';
  // import BarChart from '@/components/Charts/BarChart';

  // Tables

  // import SocialTrafficTable from './Dashboard/SocialTrafficTable';
  // import PageVisitsTable from './Dashboard/PageVisitsTable';

  export default {
    components: {
      // LineChart,
      // BarChart,
      // PageVisitsTable,
      // SocialTrafficTable,
    },
    data() {
      return {
          url: null,
          selector: null,
          eth: null,
          account: null,
          repeat: false,
        bigLineChart: {
          allData: [],
          activeIndex: 0,


          chartData: {
            datasets: [],
            labels: [],
        },
          extraOptions: {
        //     scales: {
        //         xAxes: [{
        //             type: 'time',
        //             time: {
        //                 unit: 'second'
        //             }
        //         }]
        // }
    }
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
         async createJob () {
          await createJob(this.url, this.selector, this.repeat, this.eth)
          // this.refresh()
      },
      async initBigChart() {
        let data = await this.axios.get('https://api.razor.network/job/1')
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
      this.initBigChart();
     // this.bigLineChart.allData=[5,5,5]
    }
  };
</script>
<style></style>

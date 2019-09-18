<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Razor"
      title="Razor"
    >
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Ether',
            icon: 'fab fa-ethereum text-grey',
            path: '/dashboard'
          }"
        />

         <sidebar-item :link="{name: 'Bitcoin', icon: 'fab fa-bitcoin  text-orange', path: '/bitcoin'}"/>
        <sidebar-item :link="{name: 'Custom Query', icon: 'fas fa-search text-primary', path: '/query'}"/>
         <sidebar-item :link="{name: 'Explorer Custom Queries', icon: 'fas fa-binoculars text-primary', path: '/custom'}"/>
        <sidebar-item :link="{name: 'Facuet', icon: 'fas fa-shower text-primary', path: '/faucet'}"/>
    <!--     <sidebar-item :link="{name: 'Stocks', icon: 'ni ni-key-25 text-info', path: '/login'}"/> -->
        <!-- <sidebar-item :link="{name: 'Register', icon: 'ni ni-circle-08 text-pink', path: '/register'}"/> -->

      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
  import DashboardNavbar from './DashboardNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      DashboardNavbar,
      ContentFooter,
      FadeTransition
    },
    data() {
      return {
        sidebarBackground: 'vue' //vue|blue|orange|green|red|primary
      };
    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    }
  };
</script>
<style lang="scss">
</style>

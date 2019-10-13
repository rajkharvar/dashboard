<template>
  <card class="card-stats" :show-footer-line="true">
    <div class="row">

      <div class="col">
        <slot>
          <h5 class="card-title text-uppercase text-muted mb-0" v-if="title">{{title}}</h5>
          <span class="h2 font-weight-bold mb-0" v-if="subTitle">{{subTitle}}</span>
        </slot>
      </div>

      <div class="col-auto" v-if="$slots.icon || icon">
        <slot name="icon">
          <div class="icon icon-shape text-white rounded-circle shadow"
               :class="[`bg-${type}`, iconClasses]">
            <i :class="icon"></i>
          </div>
        </slot>
      </div>
    </div>
    <!-- ETH and SCH Balance -->
    <div class="row">
      <div class="col">
        <slot>
          <h5 class="card-title test-uppercase text-muted mb-0" v-if="ethTitle">{{ ethTitle }}</h5>
          <span class="h2 font-weight-bold mb-0">{{ ethAmount }}</span>
        </slot>
      </div>

      <div class="col">
        <slot>
          <h5 class="card-title test-uppercase text-muted mb-0" v-if="schTitle">{{ schTitle }}</h5>
          <span class="h2 font-weight-bold mb-0" >{{ schAmount }}</span>
        </slot>
      </div>
    </div>
    <p class="mt-3 mb-0 text-sm">
      <slot name="footer">

      </slot>
    </p>
  </card>
</template>
<script>
  import Card from './Card.vue';

  export default {
    name: 'stats-card',
    components: {
      Card
    },
    props: {
      type: {
        type: String,
        default: 'primary'
      },
      icon: String,
      title: String,
      subTitle: String,
      iconClasses: [String, Array],
      ethTitle: String,
      schTitle: String,
      ethAmount: Number,
      schAmount: Number
    }
  };
</script>
<style></style>

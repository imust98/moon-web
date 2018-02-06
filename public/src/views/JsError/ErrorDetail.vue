<template>
  <div class="layout layout-errorlist">
      <div class="m-layout-head">
          <h3>JS Error 详情</h3>
          <div class="time"></div>
      </div>
      <div class="error-list">

      </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import {Icon} from 'moon';
@Component
export default class ErrorDetail extends Vue {

}
</script>
<style lang="scss" scoped>

</style>


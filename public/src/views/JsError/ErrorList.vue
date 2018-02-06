<template>
  <div class="layout layout-errorlist">
      <div class="m-layout-head">
          <h3>JS Error 分析</h3>
          <div class="time"></div>
      </div>
      <div class="error-list">
            <Icon type="close"></Icon>
      </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { Icon } from 'moon';
debugger;
@Component({
    components: {
        Icon
    }
})
export default class ErrorList extends Vue {

}
</script>
<style lang="scss" scoped>

</style>


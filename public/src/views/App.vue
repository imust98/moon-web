<template>
  <div class="g-doc">
    <header class="g-head">
      <div class="title"><strong>APM</strong></div>
      <div class="userInfo"><strong></strong></div>
    </header>
    <div class="g-body">
      <div class="g-side">
        <div class="app"></div>
        <nav>
          <ul class="side">
            <li>
              <router-link class="tab" :to="{name:'userManage',query:{pid:pid}}" :class="{'tab-active':activeTab === 'userManage'}">
                <span>JS Error分析</span>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="g-main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

@Component
export default class App extends Vue {}
</script>
<style lang="scss">
.g-doc {
  color: #000;
}
</style>

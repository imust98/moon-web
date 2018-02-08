<template>
  <div class="g-doc">
    <header class="g-head">
      <div class="title"><strong>APM</strong></div>
      <div class="userInfo">
        <Dropdown @on-click="handleClick" placement="bottom-end">
        <a>黎浩梁</a>
        <DropdownMenu slot="list">
            <DropdownItem>退出</DropdownItem>
        </DropdownMenu>
    </Dropdown></div>
    </header>
    <div class="g-body">
      <div class="g-side">
        <div class="app">
          <Dropdown @on-click="handleClick" placement="bottom-end">
            <a>网易云音乐</a>
            <DropdownMenu slot="list">
                <DropdownItem>网易严选</DropdownItem>
                <DropdownItem>网易考拉海购</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <nav>
          <ul class="side">
            <li>
              <router-link class="tab" :to="{name:'errorlist'}">
                <span>JSError分析</span>
              </router-link>
              <ul>
                <li>
                  <router-link class="tab" :to="{name:'errordetail'}">
                    <span>JSError错误明细</span>
                  </router-link>
                </li>
              </ul>
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
import { Dropdown, DropdownMenu, DropdownItem } from 'moon';
import '../styles/common.scss';
@Component({
  components:{
    Dropdown,
    DropdownMenu,
    DropdownItem
  }
})
export default class App extends Vue {
  private handleClick(){

  }
}
</script>
<style lang="scss" scoped>
.g-doc {
  color: #000;
}
.app{
    height: 30px;
    padding:10px 0px;
    text-align: center;
}
</style>

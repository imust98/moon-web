<template>
  <div class="layout layout-errorlist">
      <div class="m-layout-head">
          <h3>JS Error 分析</h3>
          <div class="time">
            <Dropdown @on-click="handleClick" placement="bottom-end">
              <a>最近一天</a>
              <DropdownMenu slot="list">
                <DropdownItem>1小时</DropdownItem>
                <DropdownItem>6小时</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
      </div>
      <div class="error-list">
        <mo-table :sourcelist="sourcelist" classes="m-table-offline">
          <template slot="header">
            <tr>
              <td>错误名称</td>
              <td>错误数</td>
              <td>最近出现时间</td>
            </tr>
          </template>
          <template slot-scope="props" slot="body">
            <td :title="props.item.id">
              <router-link class="errorname" :to="{name:'errordetail',params:{id:123},query: { appId: '123sdd' }}">
                {{props.item.id}}
              </router-link>
              </td>
            <td :title="props.item.errorNum">{{props.item.errorNum}}</td>
            <td :title="props.item.lastShowTime">{{props.item.lastShowTime}}</td>
          </template>
        </mo-table>
      </div>
      <div class="page">
        <Pager :total="total" :pageSize="pageSize" :index="currentPage" @on-change="changePage"></Pager>
      </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import {
  Icon,
  Button as Btn,
  Table as MoTable,
  Pager,
  Dropdown,
  DropdownMenu,
  DropdownItem
} from 'moon';
Component.registerHooks(['beforeRouteEnter', 'beforeRouteUpdate']);
@Component({
  components: {
    Icon,
    Btn,
    MoTable,
    Pager,
    Dropdown,
    DropdownMenu,
    DropdownItem
  }
})
export default class ErrorList extends Vue {
  private total: number = 12;
  private pageSize: number = 20;
  private currentPage: number = 1;
  private handleClick() {}
  private changePage() {}
  private created() {
    this.$store.dispatch('jserror/abstructlist', {
      appId: 'asdfadf12',
      body: {
        endTime: 1518141148344,
        startTime: 1508141148344,
        limit: 100
      }
    });
  }
  private get sourcelist() {
    return this.$store.state.jserror.entry.ablist;
  }
}
</script>
<style lang="scss" scoped>
.error-list {
  padding-right: 20px;
}
.page {
  padding: 10px;
  text-align: center;
}
</style>

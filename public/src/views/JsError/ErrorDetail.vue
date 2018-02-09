<template>
  <div class="layout layout-errordetail">
      <section class="error error-topic">
        <div class="back">
					<router-link class="errorname" :to="{name:'errorlist',query: { appId: '123sdd' }}">
							返回
					</router-link>
				</div>
        <div class="name">
            <Strong>TypeError</Strong><span>{{errordetail.id}}</span>
        </div>
        <div class="num">
            <p>错误数</p>
            <p>{{errordetail.errorNum}}</p>
        </div>
        <div class="time">
            <p>最近时间</p>
            <p>{{errordetail.lastShowTime}}</p>
        </div>
      </section>
      <section class="error error-summary">
				<h4>概要信息</h4>
				<p>url:  <a href="http://apm-dev.163.com:8183/dist/console/js/moduleConfig/alarmDetail.js">{{errordetail.url}}</a></p>
				<div class="info">
					<table>
						<tr><td>IP</td><td>{{errordetail.id}}</td><td>浏览器</td><td>{{errordetail.browser}}</td><td>系统</td><td>{{errordetail.system}}</td></tr>
						<tr><td>版本</td><td>{{errordetail.version}}</td><td>设备类型</td><td>{{errordetail.device}}</td><td>发生时间</td><td>{{errordetail.errorOccurTime}}</td></tr>
					</table>
				</div>
      </section>
			<section class="error error-stack">
				<h4>错误堆栈</h4>
				<div><strong>TypeError </strong>{{errordetail.msg}}</div>
				<table>
					<tr v-for="item in errordetail.errorStack" :key="item"><td>{{item}}</td></tr>
				</table>
			</section>
			<section class="error error-behavior">
				<h4>用户行为</h4>
				<table>
					<tr v-for="(item,index) in errordetail.userTrack" :key="index"><td>{{item.type | formatBehaviour}}</td><td>{{item | formatValueByType(item.type)}}</td></tr>
				</table>
			</section>
			<section class="error error-ua">
				<h4>UA</h4>
				<p>{{errordetail.ua}}</p>
			</section>
			<div class="pager">
				 <span>{{currentNum}}/{{errordetail.errorNum}}</span>
				 <span><btn :disabled="currentNum === 1">上一页</btn></span>
				 <span><btn :disabled="errordetail.errorNum === currentNum">下一页</btn></span>
			</div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { Icon, Button as Btn } from 'moon';
@Component({
  components: {
    Btn
  }
})
export default class ErrorDetail extends Vue {
  private stack = [];
	private currentNum: number = 163;
	
  private get appId() {
    return this.$route.query.appId;
  }
  private get params() {
    return this.$route.params;
  }
  private beforeRouteEnter(to: any, from: any, next: any) {
    next((vm: any) => {
      vm.fetchDetail();
    });
  }

  private beforeRouteUpdate(to: any, from: any, next: any) {
    this.fetchDetail();
    next();
  }
  private fetchDetail() {
    this.$store.dispatch('jserror/detailerror', {
      appId: this.appId,
      body: {
        id: this.params.id,
        errorId: ''
      }
    });
  }
  private get errordetail() {
    return this.$store.state.jserror.entry.errordetail;
  }
}
</script>
<style lang="scss" scoped>
.error {
  padding: 15px 0px;
  border-bottom: 1px solid #d4d4d4;
  h4 {
    line-height: 24px;
    font-size: 18px;
  }
  td {
    height: 30px;
  }
}
.error-topic {
  padding: 10px 0px;
  display: flex;
  align-items: center;
  .back {
    width: 25px;
    text-align: center;
  }
  .name {
    flex: 1;
    padding-left: 10px;
    strong {
      font-size: 20px;
    }
  }
  .num {
    width: 60px;
    text-align: center;
  }
  .time {
    width: 100px;
    text-align: center;
  }
}
.pager {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  padding: 20px 10px;
  bottom: 0px;
  left: 200px;
  right: 0px;
  background: #c8c9cc;
}
</style>


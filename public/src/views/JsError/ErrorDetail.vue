<template>
  <div class="layout layout-errordetail">
      <section class="error error-topic">
        <div class="back"><a href="/errorlist">返回</a></div>
        <div class="name">
            <Strong>TypeError</Strong><span>/javascripts/testAnotherError.js in testtest1</span>
        </div>
        <div class="num">
            <p>错误数</p>
            <p>1852</p>
        </div>
        <div class="time">
            <p>最近时间</p>
            <p>2018.1.1 22:00</p>
        </div>
      </section>
      <section class="error error-summary">
				<h4>概要信息</h4>
				<p>url:  <a href="http://apm-dev.163.com:8183/dist/console/js/moduleConfig/alarmDetail.js">http://apm-dev.163.com:8183/dist/console/js/moduleConfig/alarmDetail.js</a></p>
				<div class="info">
					<table>
						<tr><td>IP</td><td>123.58.160.154</td><td>浏览器</td><td>Chrome</td><td>系统</td><td>Mac OS X</td></tr>
						<tr><td>版本</td><td>3.2.1</td><td>设备类型</td><td>Computer</td><td>发生时间</td><td>2018.1.1 22：00</td></tr>
					</table>
				</div>
      </section>
			<section class="error error-stack">
				<h4>错误堆栈</h4>
				<div><strong>TypeError</strong>b is not defined</div>
				<table>
					<tr><td>at http://apm-dev.163.com:8183/dist/console/js/moduleConfig/alarmDetail.js:85:34</td></tr>
					<tr><td>at http://apm-dev.163.com:8183/dist/console/js/moduleConfig/alarmDetail.js:85:34</td></tr>
					<tr><td>at http://apm-dev.163.com:8183/dist/console/js/moduleConfig/alarmDetail.js:85:34</td></tr>
				</table>
			</section>
			<section class="error error-behavior">
				<h4>用户行为</h4>
				<table>
					<tr><td>body > input#input1.testInputError[type="text"]</td></tr>
					<tr><td>level: log      arguments: room.renqiChange,10226</td></tr>
					<tr><td>level: log      arguments: room.renqiChange,10226</td></tr>
				</table>
			</section>
			<section class="error error-ua">
				<h4>UA</h4>
				<p>Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36</p>
			</section>
			<div class="pager">
				 <span>1852/1852</span>
				 <span><btn>上一页</btn></span>
				 <span><btn>下一页</btn></span>
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
export default class ErrorDetail extends Vue {}
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


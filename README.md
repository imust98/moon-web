# apm web端监控管理平台

## 项目开发方式

### 开发工具

* 编辑器
    * 推荐使用 vscode + vetur（对 typescript 支持较好）
    * 编辑器安装 editorconfig
* 浏览器
    * 推荐安装扩展程序: Vue.js devtools

### 安装依赖

```shell
npm install
nei build -k 5a521f440b88aef909e919e8862bf965
```

### 前端本地开发步骤

#### 运行

```shell
npm start
```

#### 测试

```shell
npm test
```

###开发规范
1、自定义事件要以“on-”开头命名
2、组件样式统一写在对应组件的style里面，并且样式中颜色部分统一用颜色变量表示，公共颜色变量在css/custom.mcss里，不需要自己引入，组件会自动引入。

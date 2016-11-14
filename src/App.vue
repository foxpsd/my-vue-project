<template>
    <div id="main">
        <div class="demo_box">
            <h1 class="demo_title1">前端开发方案（CMS类产品）- 【编号：1611】</h1>
            <br />
            <br />
            <div class="demo_desc">
                <p>依赖：vue、vue-router、Webpack、ES6、Babel</p>
                <p>补充说明：便于 Demo 实例的美观，UI部分引入 bootstrap3，在实际项目中可选</p>
                <p>注意：编码前，请必读 <router-link to="https://wiki.dxy.net/pages/viewpage.action?pageId=81273635" target="_blank">编码规范与概念解释</router-link></p>
            </div>
            <br />
            <table class="nav_index">
                <thead>
                    <tr>
                        <th>示例</th>
                        <th>+ 三方组件</th>
                        <th>+ 插件/功能模块</th>
                        <th>三方（助力）</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <ol class="demo_list">
                                <li><router-link target="_blank" to="/demo/simple.html">基础示例</router-link></li>
                                <li><router-link target="_blank" to="/demo/router.html">路由(基于hash)</router-link></li>
                                <li><router-link target="_blank" to="/demo/list.html">列表</router-link></li>
                                <li><router-link target="_blank" to="/demo/form.html#/1">表单+校验</router-link></li>
                            </ol>
                        </td>
                        <td>
                            <ol class="demo_list">
                                <li><router-link target="_blank" to="/demo/cascading.html#/cascading">DXY 级联菜单</router-link></li>
                                <li><router-link target="_blank" to="/demo/datepicker.html#/datepicker">日期选择</router-link></li>
                                <li><router-link target="_blank" to="/demo/ueditor.html">百度编辑器</router-link></li>
                                <li><router-link target="_blank" to="/demo/echarts.html">数据图表</router-link></li>
                            </ol>
                        </td>
                        <td>
                            <ol class="demo_list">
                                <li><router-link target="_blank" to="/demo/upload.html#/simple">文件上传 Upload</router-link></li>
                                <li><router-link target="_blank" to="/demo/module.html#/router-linklert">消息框 Alert</router-link></li>
                                <li><router-link target="_blank" to="/demo/module.html#/modal">模态对话框 Modal</router-link></li>
                                <li><router-link target="_blank" to="/demo/module.html#/tip">提示 Tip</router-link></li>
                                <li><router-link target="_blank" to="/demo/module.html#/popover">气泡弹框 Popover</router-link></li>
                                <li><router-link target="_blank" to="/demo/module.html#/tab">标签页 Tab</router-link></li>
                            </ol>
                        </td>
                        <td>
                            <ol class="demo_list">
                                <li><router-link target="_blank" to="https://github.com/calesce/redux-slider-monitor">redux-slider-monitor</router-link></li>
                                <li><router-link target="_blank" to="https://github.com/gaearon/redux-devtools">redux-devtools</router-link></li>
                                <li><router-link target="_blank" to="http://ionicons.com/">字体图标 ionicons</router-link></li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            <br />
            <br />
        </div>
    </div>
</template>
<script>
export default {
    name: 'app',
    components: {
    }
}
</script>
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>

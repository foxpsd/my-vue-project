import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import TestPage from './views/test'
import testStoreConf from './stores/testStore'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
Vue.use(VueRouter)

// get json数据

Vue.use(VueResource)
	/* eslint-disable no-new */

const store = new Vuex.Store({
	modules: {
		test: testStoreConf
	},
	// 根state
	state: {
		rootCount: 1
	},
	plugins: [createLogger()]
})

// 下面两种 commit 方式，其实是等同的
store.commit('increment', {amount: 10})
store.commit({type: 'increment', amount: 5})
store.dispatch({type: 'incrementAsync', amount: 100}).then(() => { store.dispatch({type: 'incrementAsync', amount: 50}) })

console.log(store.state.test.count) // -> 1

const Foo = {
	template: '<div>foo</div>'
}

// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置
var router = new VueRouter({
	routes: [{
		path: '/',
		component: App
	}, {
		path: '/test',
		component: TestPage
	}, {
		path: '/foo',
		component: Foo
	}]
})
new Vue({
	router,
	store
}).$mount('#app')

Vue.config.devtools = true

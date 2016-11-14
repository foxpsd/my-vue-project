export default {
	state: {
		count: 0,
		todos: [{
			id: 1,
			text: 'iceice',
			done: true
		}, {
			id: 2,
			text: 'xiao8',
			done: false
		}, {
			id: 3,
			text: 'maybe',
			done: true
		}]
	},
	getters: {
		doneTodos: state => {
			return state.todos.filter(todo => todo.done)
		}
	},
	mutations: {
		increment: (state, payload) => {
			state.count += payload.amount
		},
		increaseOne: state => {
			state.count ++
		}
	},
	actions: {
		incrementAsync: ({commit}, payload) => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					commit('increment', payload)
					resolve()
				}, 2000)
			})
		}
	}
}
<template>
    <div>
        <label>rootCount:</label>{{rootCount}}
        <br/>
        <label>count:</label>{{count}}
        <br/>
        <label>countPlusLocalState:</label>{{countPlusLocalState}}
        <br/>
        <button @click="increment({amount:2})">add 2</button>
        <button @click="increaseOne">add 1</button>
        <button @click="incrementAsync({amount:2})">add 2 async</button>
        <ul id="example-1">
            <li v-for="item in doneTodos">
                {{ item.text }}
            </li>
        </ul>
    </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    data: () => ({
        localCount: -10
    }),
    computed: {
        ...mapState({
            // arrow functions can make the code very succinct!
            count: ({test}) => test.count,
            // store 是向 vue 实例中的所有组件暴露的，通过 this.$store 来获取
            rootCount: state => state.rootCount,
            // passing the string value 'count' is same as `state => state.count`
            countAlias: 'test/count',

            // to access local state with `this`, a normal function must be used
            countPlusLocalState({test}) {
                console.log(this)
                return test.count + this.localCount
            }
        }),
        // doneTodos () {
        //     return this.$store.getters.doneTodos
        // }
        ...mapGetters([
            'doneTodos'
        ])
    },
    methods: {

        countAdd() {
            const store = this.$store
            store.commit('increment', {amount: 1})
        },
        ...mapMutations([
            'increment',
            'increaseOne' // map this.increment() to this.$store.commit('increment')
        ]),
        ...mapActions([
            'incrementAsync' // map this.increment() to this.$store.dispatch('increment')
        ])
    }
}
</script>

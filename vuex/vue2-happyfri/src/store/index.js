import Vue from 'vue'
import Vuex from '../vuex/index'
// import Vuex from 'vuex'

// import mutations from './mutations'
// import actions from './action'
Vue.use(Vuex)

let store =  new Vuex.Store({
  modules: {
    a: {
      state: {
        age: 'a10'
      },
      mutations: {
        syncChange(){
          console.log('a-syncChange')
        }
      }
    },
    b: {
      state: {
        age: 'b10'
      },
      mutations: {
        syncChange(){
          console.log('b-syncChange')
        }
      },
      modules: {
        c: {
          state: {
            age: 'c10'
          },
          mutations: {
            syncChange(){
              console.log('c-syncChange')
            }
          },
          modules: {
            d: {
              state: {
                age: 'd10'
              },
              mutations: {
                syncChange(){
                  console.log('d-syncChange')
                }
              }
            },
          }
        }
      }
    }
  },
	state: {
    age:10
  },
  // strict: false,
  getters: {
	  myAge(state) {
	    return state.age * 2
    }
  },
  // // 更新状态的唯一方式
  mutations: {
	  syncChange(state, payload){
	    // 严格模式不允许使用异步
      state.age += payload
      // setTimeout(()=>{
      //    state.age += payload
      // }, 2000)
    }
  },
	actions: {
    asyncChange({commit}, payload){
      setTimeout(()=>{
        commit('syncChange', payload)
      }, 2000)
    }
  }
})

// store.registerModule('e', {
//   state: {
//     age: 'e100'
//   }
// })

export default store

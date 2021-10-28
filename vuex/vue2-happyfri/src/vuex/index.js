let Vue
function forEach(obj, cb) {
  Object.keys(obj).forEach(key => {
    cb(key, obj[key])
  })
}
// forEach({a: 1, b: 2}, (key, value)=>{
//   console.log(key, value)
// })
class ModuleCollection {
  constructor(options) {
    // 遍历
    this.register([], options)
  }
  register(path, rootModule){
    let rowModule = {
      _raw: rootModule,
      _children: {},
      state: rootModule.state
    }
    if(!this.root) {
      this.root = rowModule
    } else {
      let parentModule = path.slice(0, -1) .reduce((root, current)=>{
        return root._children[current]
      }, this.root)
      parentModule._children[path[path.length-1]] = rowModule
    }
    if(rootModule.modules) {
      forEach(rootModule.modules, (moduleName, module)=>{
        this.register(path.concat(moduleName), module)
      })
    }
  }
}

function installModules(store, rootState, path, rowModule){
  let getters = rowModule._raw.getters
  // 安装状态 state 需要把子模块的状态安装到rootState
  if(path.length > 0) { // path大于0说明还有子模块
    let parentState = path.slice(0, -1).reduce((root, current)=>{
      return root[current]
    }, rootState)
    // console.log('parentState', path, path.slice(0, -1), parentState)
    // vue响应式原理 不能增加不存在的属性
    // 给这个根状态定义当前的模块
    Vue.set(parentState, path[path.length-1], rowModule.state)
  }
  if(getters) {
    forEach(getters, (getterName, getterFn)=>{
      Object.defineProperty(store.getters, getterName, {
        get: ()=> {
          return getterFn(rowModule.state)
        }
      })
    })
  }
  let mutations = rowModule._raw.mutations
  if(mutations){
    forEach(mutations, (mutationName, mutationFn)=>{
      let arr = store.mutations[mutationName] || (store.mutations[mutationName] = [])
      arr.push((payload) => {
        mutationFn(rowModule.state, payload)
      })
    })
  }
  let actions = rowModule._raw.actions
  if(actions) {
    forEach(actions, (actionName, actionFn) => {
      let arr = store.actions[actionName] || (store.actions[actionName] = [])
      arr.push((payload) => {
        actionFn(store, payload)
      })
    })
  }

  forEach(rowModule._children, (moduleName, rowModule)=>{
    installModules(store, rootState, path.concat(moduleName), rowModule)
  })
}

class Store {
  constructor(options) {
    // this.state = options.state
    // state响应式实现
    this.vm = new Vue({
      data: function () {
        return {
          state: options.state
        }
      }
    })
    this.getters = {}
    this.mutations = {}
    this.actions = {}

    // 需要将用户传入的数据格式化操作
    this.modules = new ModuleCollection(options)
    // console.log('---modules---', this.modules)

    // store/rootState/path/根模块
    installModules(this, this.state, [], this.modules.root)
    // getters实现
    // let getters = options.getters
    // this.getters = {}
    // forEach(getters, (gettersName, gettersFn) => {
    //   Object.defineProperty(this.getters, gettersName, {
    //     get: () => {
    //       return gettersFn(this.state)
    //     }
    //   })
    // })
    // mutations实现
    // let mutations = options.mutations
    // this.mutations = {}
    // forEach(mutations, (mutationsName, mutationsFn) => {
    //   this.mutations[mutationsName] = (payload) => {
    //     // 切面编程
    //     mutationsFn(this.state, payload)
    //     // 拦截做更多todo
    //   }
    // })
    // actions实现
    // let actions = options.actions
    // this.actions = {}
    // forEach(actions, (actionName, actionFn) => {
    //   this.actions[actionName] = (payload) => {
    //     actionFn(this, payload)
    //   }
    // })
  }
  commit = (mutationName, payload) => {
    // this.mutations[mutationName](payload)
    this.mutations[mutationName].forEach(fn => fn(payload))
  }
  dispatch = (actionName, payload) => {
    // this.actions[actionName](payload)
    this.actions[actionName].forEach(fn => fn(payload))
  }
  get state() {
    return this.vm.state
  }
  // 动态注册模块
  // registerModule(moduleName, module){
  //   if(!Array.isArray(moduleName)){
  //     moduleName = [moduleName]
  //   }
  //   this.modules.register(moduleName, module)
  //   installModules(this, this.state, [], module)
  // }
}
const install = (_Vue, options) => {
  Vue = _Vue
  // 为什么vuex不放在vue的原型上，默认所有实例都要store
  // Vue.mixin抽离公共的逻辑 放一些方法
  Vue.mixin({
    beforeCreate() {
      // console.log(this)
      let options = this.$options
      if(options.store){
        this.$store = options.store
      } else {
        this.$store = this.$parent && this.$parent.$store
      }
    }
  })

}

export default {
  Store,
  install
}

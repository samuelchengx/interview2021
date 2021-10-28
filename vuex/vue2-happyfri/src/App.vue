<template>
	<div>
<!--    <p>myAge: {{$store.getters.myAge}}</p>-->
    <p>{{$store.state.age}}</p>
    <button @click="syncChange()">同步更新</button>
    <button @click="asyncChange()">异步更新</button>
    <br/>
    {{$store.state.a.age}}
    {{$store.state.b.age}}
    {{$store.state.b.c.age}}
    {{$store.state.b.c.d.age}}
  </div>
</template>

<script>
  	export default {
  	  name: 'App',
  	  data: function () {
  	    return {
  	      name: 'vuex'
        }
      },
      mounted() {
        console.log('---mounted', this.$store.state)
      },
      created() {
        // console.log(this)
      },
      methods: {
        syncChange(){
          this.$store.commit('syncChange' ,10)
        },
        asyncChange(){
          this.$store.dispatch('asyncChange' ,20)
        }
      }
  	}
</script>

<style>

</style>

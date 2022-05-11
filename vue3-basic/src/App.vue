<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>{{count}}</h1>
  <h1>{{double}}</h1>
  <h1 v-if="loading">Loading...</h1>
  <h1 v-if="loaded"><img :src="data?.message"></h1>
  <h1>X:{{x}},Y:{{y}}</h1>

  <button @click="increase">👍+1</button>
</template>

<script lang="ts">
import { computed, reactive, toRefs} from 'vue';
import useMousePosition from './hooks/useMousePosition'
import useURLLoader from './hooks/useURLLoader'
interface DataProps {
  count: number;
  double: number;
  increase: () => void;
}
interface DogResult {
  message: string;
  status: string
}
export default {
  name: 'App',
  setup() {
    // const count = ref(0)
    // const double = computed(() => {
    //   return count.value *2
    // })
    // const increase = () => {
    //   count.value++
    // }
    const { position } = useMousePosition()
    const { loading, loaded, data } = useURLLoader('https://dog.ceo/api/breeds/image/random')
    const { x, y } = toRefs(position)
    const countData: DataProps = reactive({
      count: 0,
      increase: () => { 
        countData.count++
      },
      double: computed(() => countData.count * 2)
    })
    const { count, double, increase} = toRefs(countData)
    return { count, double, increase, x, y, loading, loaded, data }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

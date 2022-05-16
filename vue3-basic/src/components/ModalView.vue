<template>
  <teleport to='#app' >
  <div id="center">
    <h2>this is a modal</h2>
  </div>
  </teleport>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: 'ModalView',
  props: {
    isOpen: Boolean
  },
  

})
</script>
<style>
  #center {
    width: 200px;
    height: 200px;
    border: 2px solid black;
    background: white;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -100px;
    margin-top: -100px;
  }
</style>
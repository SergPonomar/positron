<script setup>
import { useStore } from 'vuex'

const store = useStore()

function setAssembling(e) {
  store.commit('cart/setAssembling', e.target.checked)
}
</script>

<template>
  <input 
    type="checkbox"
    id="assembling"
    name="assembling"
    class="assembling-checkbox"
    @change="setAssembling"
  >
</template>

<style>
.assembling-checkbox {
  min-width: 20px;
  min-height: 20px;
  border: 1px solid #797B86;
  border-radius: 2px;
  margin: 0;
  padding: 0;
}
</style>

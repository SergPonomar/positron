<script setup>
import { useStore } from 'vuex'

const store = useStore()
const clearAll = () => store.commit('cart/clearCart')
</script>

<template>
  <button 
    @click="clearAll"
    class="clear-all" 
  >
    Очистить корзину
  </button>
</template>

<style>
.clear-all {
  all: unset;
  cursor: pointer;
  text-decoration: underline;
}
</style>

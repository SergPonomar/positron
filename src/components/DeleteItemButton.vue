<script setup>
import { useStore } from 'vuex'
import DeleteIcon from './icons/DeleteIcon.vue'

const props = defineProps({
  item: { type: Object, required: true }
})

const store = useStore()
const deleteItem = () => store.commit('cart/deleteItem', props.item)
</script>

<template>
  <button 
    @click="deleteItem"
    class="delete-item-button" 
  >
    <DeleteIcon/>
  </button>
</template>

<style>
.delete-item-button {
  all: unset;
  cursor: pointer;
  text-align: right;
  align-self: flex-start;
}
</style>

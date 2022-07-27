<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import MinusSign from './icons/MinusSign.vue'
import PlusSign from './icons/PlusSign.vue'

const props = defineProps({
  item: { type: Object, required: true }
})

const store = useStore()
const count = computed(() => store.state.count)
const decrement = () => store.commit('cart/decrementItemQuantity', props.item)
const increment = () => store.dispatch('cart/incItemQuantity', props.item)
</script>

<template>
  <div class="item-counter">
    <button 
      @click="decrement"
      class="item-counter__button item-counter__button_left" 
    >
      <MinusSign/>
    </button>
    <span
      class="item-counter__quantity" 
    >
      {{item.quantity}}
    </span>
    <button 
      @click="increment"
      class="item-counter__button item-counter__button_right" 
    >
      <PlusSign/>
    </button>
  </div>
</template>

<style>
.item-counter {
  display: inline-flex;
  gap: 2px;
  min-width: 102px;
  cursor: pointer;
}
.item-counter__button {
  all: unset;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #F6F8FA;
  width: 2em;
  height: 2.125em;
}
.item-counter__button_left {
  border-radius: 4px 0 0 4px;
}
.item-counter__button_right {
  border-radius: 0 4px 4px 0;
}
.item-counter__quantity {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #F6F8FA;
  font-size: 0.875em;
  padding: 9px 7px 8px 7px;
  flex: 1;
}
</style>

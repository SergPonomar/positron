<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { formatPrice } from '../utils'

const props = defineProps({
  size: { type: String, required: false }
})

const store = useStore()
const totalPrice = computed(() => 
  formatPrice(store.getters['cart/cartTotalPrice']))

const classMod = computed(() => {
  switch (props.size) {
    case "s": return "total-price_size_s"
    case "l": return "total-price_size_l"
    default: return ""
  }
})
</script>

<template>
  <span
    class="total-price"
    :class="classMod"
  >
    {{totalPrice}} ₽
  </span>
</template>

<style>
.total-price_size_s {
  font-size: 0.75em;
}
.total-price_size_l {
  font-size: 1.45em;
  line-height: 1.3;
  letter-spacing: 0.005em;
}
</style>

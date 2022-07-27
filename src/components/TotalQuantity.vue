<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const props = defineProps({
  size: { type: String, required: false }
})

const store = useStore()
const count = computed(() => store.getters['cart/cartTotalQuantity'])

const goods = computed(() => {
  let str = count.value.toString()
  if (/[5-9]$|1[0-9]$|20$/.test(str)) return "товаров"
  if (/1$/.test(str)) return "товар"
  if (/[2-4]$/.test(str)) return "товара"
  return "товаров"
})

const classMod = computed(() => {
  switch (props.size) {
    case "s": return "total-quantity_size_s"
    default: return ""
  }
})
</script>

<template>
  <span 
    class="total-quantity"
    :class="classMod"
  >
    {{count}} {{goods}}
  </span>
</template>

<style>
.total-quantity_size_s {
  color: #797B86;
  font-size: 0.75em;
}
</style>

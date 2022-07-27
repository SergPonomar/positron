<script setup>
import { formatPrice } from '../utils'

defineProps({
  item: { type: Object, required: true }
})
</script>

<template>
  <span
    class="item-price"
  >
    {{formatPrice(item.price * item.quantity)}} ₽
  </span>
</template>

<style>
.item-price {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.125em;
  line-height: 1.45;
  text-align: right;
}
</style>

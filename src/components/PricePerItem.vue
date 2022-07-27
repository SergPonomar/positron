<script setup>
defineProps({
  item: { type: Object, required: true }
})
</script>

<template>
  <span 
    v-if="item.quantity > 1"
    class="price-per-item"
  >
    {{item.price}} ₽/шт.
  </span>
</template>

<style>
.price-per-item {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 0.75em;
  line-height: 1.45;
}
</style>

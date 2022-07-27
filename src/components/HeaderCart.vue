<script setup>
import CartIcon from './icons/CartIcon.vue'
import TotalQuantity from './TotalQuantity.vue'
import TotalPrice from './TotalPrice.vue'
</script>

<template>
  <div class="header-cart">
    <CartIcon/>
    <div class="header-cart__description">
      <span class="header-cart__title">Ваша корзина</span>
      <TotalQuantity size="s"/>
      <TotalPrice size="s"/>
    </div>
  </div>
</template>

<style>
.header-cart {
  display: flex;
  gap: 10px;
  align-items: center;
}
.header-cart__description {
  display: flex;
  flex-direction: column;
}
.header-cart__title {
  font-size: 0.875em;
}
</style>

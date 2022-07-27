<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import TotalQuantity from './TotalQuantity.vue'
import ClearAll from './ClearAll.vue'
import CartItem from './CartItem.vue'
import AssemblingComponent from './AssemblingComponent.vue'

const store = useStore()
const items = computed(() => store.getters['cart/cartProducts'])
</script>

<template>
  <section class="cart">
    <header class="cart-header">
      <h1>Ваша корзина</h1>
      <TotalQuantity class="cart-header__last"/>
      <ClearAll/>
    </header>
    <div>
      <CartItem 
        v-for="item in items" 
        :item="item"
        :key="item.code" 
      />
    </div>
    <AssemblingComponent/>
  </section>
</template>

<style>
.cart-header {
  display: flex;
  column-gap: 22px;
  row-gap: 10px;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
}
.cart-header__last {
  margin-right: auto;
}
</style>

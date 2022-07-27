<script setup>
import CartComponent from './components/CartComponent.vue'
import CartSummary from './components/CartSummary.vue'
import HeaderCart from './components/HeaderCart.vue'
import ViewedSlider from './components/ViewedSlider.vue'
import BreadCrumbs from './components/BreadCrumbs.vue'
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
onBeforeMount(() => {
  store.dispatch('products/getAllProducts')
  store.dispatch('products/getViewed')
  store.dispatch('cart/getCartItems')
})
</script>

<template>
  <header class="cart-in-header">
    <HeaderCart/>
  </header>
  <BreadCrumbs/>
  <main class="cart-main">
    <CartComponent/>
    <CartSummary/>
  </main>
  <ViewedSlider/>
</template>

<style>
.cart-in-header {
  padding: 64px 2px 25px 2px;
  display: flex;
  justify-content: flex-end;
}
.cart-main {
  display: grid;
  column-gap: 55px;
  grid-template-columns: 1.88fr 1fr;
  align-items: flex-start;
}

@media only screen and (max-width: 1200px) {
  .cart-main {
    grid-template-columns: auto;
  }
}
</style>

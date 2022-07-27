<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import TotalPrice from './TotalPrice.vue'
import ButtonComponent from './ButtonComponent.vue'

const store = useStore()
const count = computed(() => store.getters['cart/cartTotalQuantity'])
const assembling = computed(() => {
  if (store.state.cart.assembling) {
    return "Да"
  } else {
    return "Нет"
  }
})
const checkout = () => store.dispatch('cart/checkout')
</script>

<template>
  <section class="cart-summary"> 
    <h3>Итого</h3>
    <ul class="cart-summary__list">    
      <li class="cart-summary__item">
        <span>Сумма заказа</span>
        <TotalPrice class="cart-summary__value"/>
      </li>
      <li class="cart-summary__item">
        <span>Количество</span>
        <span class="cart-summary__value">{{count}} шт</span>
      </li>
      <li class="cart-summary__item">
        <span>Установка</span>
        <span class="cart-summary__value">{{assembling}}</span>
      </li>
    </ul>
    <div class="cart-summary__sum">
      <span>Стоимость товаров</span>
      <TotalPrice 
        size="l"
        class="cart-summary__full-price"
      />
    </div>
    <div class="cart-summary__controls">
      <ButtonComponent 
        @click="checkout"
      >
        Оформить заказ
      </ButtonComponent>
      <ButtonComponent 
        @click="checkout"
        outlined
      >
        Купить в 1 клик
      </ButtonComponent>
    </div>
  </section>
</template>

<style>
.cart-summary {
  background: #F6F8FA;
  border-radius: 5px;
  padding: 35px 30px 35px 30px;
  margin-top: 88px;
}
.cart-summary__list {
  display: flex;
  flex-direction: column;
  padding: 28px 0 28px 0;
  gap: 18px;
  border-bottom: 1px solid #AEB0B6;
}
.cart-summary__item, .cart-summary__sum {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  column-gap: 10px;
}
.cart-summary__item {
  font-weight: 500;
  line-height: 1.45;
}
.cart-summary__sum {
  font-size: 1.125em;
  font-weight: 600;
  line-height: 1.45;
  padding: 10px 0 30px 0;
}
.cart-summary__value {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}
.cart-summary__full-price {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
}
.cart-summary__controls {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

@media only screen and (max-width: 1200px) {
  .cart-summary {
    margin-top: 50px;
  }
}
@media only screen and (max-width: 500px) {
  .cart-summary {
    margin-top: 30px;
  }
}
</style>

<script setup>
import ItemCounter from './ItemCounter.vue'
import PricePerItem from './PricePerItem.vue'
import ItemPrice from './ItemPrice.vue'
import DeleteItemButton from './DeleteItemButton.vue'
import { getImageUrl } from '../utils'

defineProps({
  item: { type: Object, required: true }
})
</script>

<template>
  <div class="cart-item">
    <img 
      :src='getImageUrl(item.imgUrl)' 
      :alt="item.code"
      class="cart-item__image"
    >
    <div class="cart-item__description">
      <h5>{{item.title}}</h5>
      <p class="cart-item__spec">{{item.spec}}</p>
      <p class="cart-item__code">Артикул: {{item.code}}</p>
    </div>
    <div class="cart-item__counter">
      <ItemCounter :item="item"/>
      <PricePerItem :item="item"/>
    </div>
    <ItemPrice class="cart-item__price" :item="item"/>
    <DeleteItemButton class="cart-item__delete" :item="item"/>
  </div>
</template>

<style>
.cart-item {
  display: grid;
  grid-template-columns: 130px auto 160px 120px 45px;
  grid-template-rows: auto auto auto;
  align-items: center;
  grid-row-gap: 10px;
  padding: 27px 0 20px 0;
}
.cart-item:not(:last-child) {
  border-bottom: 1px solid #C4C4C4;
}
.cart-item__spec {
  font-size: 0.75em;
  color: #2C3242;
}
.cart-item__code {
  font-size: 0.875em;
  color: #797B86;
}
.cart-item__counter {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.cart-item__image {
  max-width: 100px;
}

@media only screen and (max-width: 800px) {
  .cart-item {
    grid-template-columns: 130px auto auto auto 45px;
  }
  .cart-item__image {
    grid-row: 1 / 3; 
    grid-column: 1 / 2;
  }
  .cart-item__description {
    grid-row: 1 / 2; 
    grid-column: 2 / 5;
  }
  .cart-item__delete {
    grid-row: 1 / 3; 
    grid-column: 5 / 6;
  }
  .cart-item__counter {
    grid-row: 2 / 3; 
    grid-column: 2 / 3;
    justify-self: flex-start;
  }
  .cart-item__price {
    grid-row: 2 / 3; 
    grid-column: 3 / 5;
  }
}

@media only screen and (max-width: 500px) {
  .cart-item {
    grid-row-gap: 15px;
  }
  .cart-item__price {
    grid-row: 3 / 4; 
    grid-column: 2 / 4;
    text-align: left;
  }
}
</style>

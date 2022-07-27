<script setup>
import { getImageUrl } from '../utils'
import { formatPrice } from '../utils'
import { computed } from 'vue'
import ButtonComponent from './ButtonComponent.vue'

const props = defineProps({
  product: { type: Object, required: true }
})

const rubRange = computed(() => 
  `${formatPrice(props.product.rubRange.low)} ₽ - ${formatPrice(props.product.rubRange.high)} ₽`)

const euroRange = computed(() => 
  `${formatPrice(props.product.euroRange.low)} € - ${formatPrice(props.product.euroRange.high)} €`)
</script>

<template>
  <div class="product-card">
    <img 
      class="product-card__image" 
      :src='getImageUrl(product.imgUrl)' 
      :alt="product.code"
    >
    <h4 class="product-card__model">{{product.model}}</h4>
    <p class="product-card__description">{{product.description}}</p>
    <p class="product-card__rub-range">
      {{rubRange}}</p>
    <p class="product-card__euro-range">
      {{euroRange}}</p>
    <ButtonComponent size="s">Подробнее</ButtonComponent>
  </div>
</template>

<style>
.product-card {
  padding: 25px;
  display: flex;
  flex-direction: column;
  background: #F6F8FA;
  border-radius: 5px;
}
.product-card__image {
  width: 100%;
  max-width: 245px;
  margin: 0 auto;
}
.product-card__model {
  margin: 5px 0 0 0;
}
.product-card__description {
  font-size: 0.875em;
  margin: 10px 0 10px 0;
  min-height: 100px;
}
.product-card__rub-range {
  margin-top: auto;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.375em;
  line-height: 1.3;
}
.product-card__euro-range {
  margin: 3px 0 20px 0;
  color: #797B86;
  line-height: 1.45;
}
</style>

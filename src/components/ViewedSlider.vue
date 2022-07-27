<script setup>
import { computed, ref, onUpdated } from 'vue'
import { useStore } from 'vuex'
import ProductCard from './ProductCard.vue'
import LeftArrowIcon from './icons/LeftArrowIcon.vue'
import RightArrowIcon from './icons/RightArrowIcon.vue'

const store = useStore()
const viewedProducts = computed(() => store.getters['products/viewedProducts'])
const itemsDiv = ref(null)

const currentPosition = ref(1)
const maxPosition = ref(1)

onUpdated(() => {
  maxPosition.value = Math.ceil(
    (itemsDiv.value?.scrollWidth - itemsDiv.value.clientWidth) / 
    scrollAmount(getScrollParameters())) + 1
})

function getPosition() {
  return Math.ceil((itemsDiv.value.scrollLeft) / 
    scrollAmount(getScrollParameters())) + 1
}

function scrollAmount ({gap, scrollBy, visibleCards}) {
  let cardsWidth = (itemsDiv.value?.clientWidth - 
    (visibleCards-1)*gap)/visibleCards*scrollBy
  return Math.ceil(cardsWidth + gap*scrollBy)
}

function getScrollParameters() {
  const gap = 20
  let scrollBy = 2
  let visibleCards = 4
  const winWidth = window.innerWidth
  if (winWidth > 900 && winWidth <= 1200) {
    visibleCards = 3
  }
  if (winWidth > 600 && winWidth <= 900) {
    visibleCards = 2
  } 
  if (winWidth <= 600) {
    visibleCards = 1
    scrollBy = 1
  }
  return {gap, scrollBy, visibleCards}
}

let timer;
function scroll(left) {
  window.clearTimeout(timer)
  left? itemsDiv.value.scrollLeft -= scrollAmount(getScrollParameters()) :
    itemsDiv.value.scrollLeft += scrollAmount(getScrollParameters())
  timer = window.setTimeout(function () {
    currentPosition.value = getPosition()
  }, 500); 
}
</script>

<template>
  <section class="viewed-slider">
    <div class="viewed-slider__header">
      <h2>Просмотренные товары</h2>
      <div class="viewed-slider__controls"> 
        <button 
          @click="scroll(true)"
          class="viewed-slider__scroll"
        >
          <LeftArrowIcon/>
        </button>
          <div>
            <span class="viewed-slider__current-position">{{currentPosition}}</span>
            <span class="viewed-slider__max-position"> / {{maxPosition}}</span>
          </div>
        <button 
          @click="scroll(false)"
          class="viewed-slider__scroll"
        >
          <RightArrowIcon/>
        </button>
      </div>
    </div>
    <div ref="itemsDiv" class="viewed-slider__wrapper">
      <ProductCard 
        v-for="product in viewedProducts" 
        class="viewed-slider__item"
        :product="product"
      />  
    </div>
  </section>
</template>

<style>
.viewed-slider {
  margin: 96px 0 116px 0;
  display: flex;
  flex-direction: column;
  gap: 47px;
}
.viewed-slider__header {
  display: flex;
  justify-content: space-between;
  column-gap: 50px;
  row-gap: 20px;
  flex-wrap: wrap;
}
.viewed-slider__controls {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
}
.viewed-slider__current-position {
  font-weight: 500;
  font-size: 1.5em;
  line-height: 1.5;
}
.viewed-slider__max-position {
  color: #797B86;
  font-size: 1.125em;
  line-height: 1.5;
}
.viewed-slider__scroll {
  all: unset;
  background: #90A2B5;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
.viewed-slider__wrapper {
  display: flex;
  overflow-x: hidden;
  scroll-behavior: smooth;
  align-items: center;
  justify-content: space-between;
  column-gap: 20px;
}
.viewed-slider__item {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: calc((100% - 3 * 20px) / 4);
}

@media only screen and (max-width: 1200px) {
  .viewed-slider__item {
    flex-basis: calc((100% - 2 * 20px) / 3);
  }
}
@media only screen and (max-width: 900px) {
  .viewed-slider__item {
    flex-basis: calc((100% - 1 * 20px) / 2);
  }
}

@media only screen and (max-width: 600px) {
  .viewed-slider__item {
    flex-basis: 100%;
  }
  .viewed-slider__header {
    justify-content: center;
  }
}
</style>

<script setup>
import RightTriangle from './icons/RightTriangle.vue'
</script>

<template>
  <nav>
    <ul class="breadcrumb">
      <li><a href="#">Главная</a></li>
      <RightTriangle/>
      <li class="breadcrumb__current">Корзина</li>
    </ul>
  </nav>
</template>

<style>
.breadcrumb {
  display: flex;
  font-size: 0.875em;
  line-height: 1.5;
  list-style: none;
  gap: 10px;
  align-items: center;
  padding-left: 0;
  margin: 31px 0 60px 0;
}
.breadcrumb__current {
  color: #797B86;
}
@media only screen and (max-width: 800px) {
  .breadcrumb {
    margin-bottom: 30px;
  }
}
</style>

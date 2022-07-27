<script setup>
import AssemblingIcon from './icons/AssemblingIcon.vue'
import AssemblingCheckbox from './AssemblingCheckbox.vue'
</script>

<template>
  <div class="assembling">
    <AssemblingCheckbox/>
    <AssemblingIcon class="assembling__icon"/>
    <div>
      <h3>Установка</h3>
      <p class="assembling__instruction">
        Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.
      </p>
    </div>
  </div>
</template>

<style>
.assembling {
  background: #F6F8FA;
  border-radius: 5px;
  padding: 26px 25px 26px 25px;
  display: flex;
  align-items: center;
  gap: 20px;
}
.assembling__instruction {
  color: #797B86;
}
.assembling__icon {
  min-width: 50px;
  min-height: 50px;
}
@media only screen and (max-width: 600px) {
  .assembling {
    gap: 30px;
  }
  .assembling__icon {
    display: none;
  }
}
</style>

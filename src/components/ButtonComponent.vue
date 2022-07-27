<script setup>
import { computed } from 'vue'

const props = defineProps({
  outlined: Boolean,
  size: String
})

const _outlined = computed(() => {
  if (props.outlined) {
    return "button_outlined"
  } else {
    return ""
  }
})
const _size = computed(() => {
  switch (props.size) {
    case "s":
      return "button_size_s"
    default:
      return ""
  }
})
</script>

<template>
  <button 
    class="button"
    :class="[_outlined, _size]"
  >
    <slot></slot>
  </button>
</template>

<style>
.button {
  all: unset;
  cursor: pointer;
  text-align: center;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1.125em;
  line-height: 1.45;
  padding: 14px;
  color: white;
  background: #0069B4;
}
.button_outlined {
  color: #0069B4;
  background: #FFFFFF;
  border: 1px solid #0069B4;
}
.button_size_s {
  font-size: 1em;
  padding: 14.5px;
}
</style>

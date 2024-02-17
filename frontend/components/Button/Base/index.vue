<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
})

const emits = defineEmits(['click'])
</script>
<template>
  <button @click="emits('click')">{{ props.text }}</button>
</template>

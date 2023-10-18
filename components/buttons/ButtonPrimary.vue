<script setup lang="ts">
  import {PropType} from "vue";
  enum Modifier {
    Default = 'default',
    Icon = 'icon'
  }

  enum Theme {
      Dark = 'dark',
      Light = 'light'
  }

  const emits = defineEmits(['click'])

  const staticClass = 'button-primary'

  const props = defineProps({
      text: {
          type: String,
          default: '',
      },
      modifier: {
          type: String as PropType<Modifier>,
          default: Modifier.Default
      },
      theme: {
          type: String as PropType<Theme>,
          default: Theme.Dark
      }
  });

  const callbackClick = function (e: Event) {
      emits('click', e);
  }
</script>
<template>
  <button @click="callbackClick($event)"
          :class="[staticClass, `${staticClass}--${props.theme}`, `${staticClass}--${props.modifier}`]">
      <template v-if="props.modifier === Modifier.Icon">
          <div :class="`${staticClass}__icon`">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11.9995" cy="11.9999" r="7" stroke="white" stroke-width="2"/>
              </svg>
          </div>

      </template>
      <span>{{props.text}}</span>
  </button>
</template>
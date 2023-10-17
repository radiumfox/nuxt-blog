<script setup lang="ts">

  import {ref} from 'vue';
  const post = ref('');
  const emit = defineEmits(['add-post'])
  const publishPost = function() {
      emit('add-post', post);
  }
</script>
<template>
    <form @submit.native.prevent="publishPost()">
        <textarea v-model="post" id="new-post" name="new-post" placeholder="Write a post"></textarea>
        <button type="submit">Publish</button>
        <button type="reset">Remove</button>
    </form>
</template>
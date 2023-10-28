<script setup lang="ts">
import {ref} from "vue";

const content = ref("");

const createPost = function () {

}

</script>
<template>
  <textarea v-model="content"></textarea>
  <button @click="createPost()">Create</button>
</template>
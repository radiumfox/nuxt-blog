<script setup lang="ts">
  import { GET_POSTS, DELETE_POST } from '~/api/queries';
  import {ref} from "vue";

  const posts = ref([])
  await useAsyncQuery(GET_POSTS).then(data => {
      if(data.status.value === "success") {
          posts.value = data.data.value.posts;
      }
  })

  async function deletePost(id) {
      await useAsyncQuery(DELETE_POST, id).then(data => {
          console.log(data);
      })
  }
</script>
<template>
  <div>
      <template v-for="(post, idx) in posts" :key="idx">
          <div>
              <p>{{post.content}}</p>
              <p>{{post.date}}</p>
              <button @click="deletePost(post.id)" type="button">Delete</button>
          </div>
      </template>
  </div>
</template>
<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import index from './pages/index.vue';
import posts from './pages/posts.vue';
import CreatePost from './pages/create-post.vue';
import {ref, provide} from "vue";

const postsList = ref([]);
provide('postsList', postsList);
const showPost = function (post) {
    console.log(post);
    postsList.value.push({date: new Date().getDate(), text: post})
}

</script>
<template>
    <Header/>
    <NuxtPage @addPost="showPost"  />
    <Footer/>
</template>

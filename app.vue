<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import index from './pages/index.vue';
import posts from './pages/posts.vue';
import CreatePost from './pages/create-post.vue';
import {ref, provide, onMounted} from "vue";
const postsList = ref([]);

onMounted(()=> {
    provide('postsList', postsList);
})

const showPost = function (post) {
    console.log(post);
    postsList.value.push({date: new Date().getDate(), text: post})
}

</script>
<template>
    <Header/>
    <div class="layout-app">
        <NuxtPage @addPost="showPost"  />
    </div>
    <Footer/>
</template>

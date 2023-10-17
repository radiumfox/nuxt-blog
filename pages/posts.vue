<script setup lang="ts">
import {inject} from "vue";

const postsList = inject("postsList");

</script>
<template>
<div>
    <template v-for="(post, index) in postsList" :key="index">
        <div >
            <p>{{post.date}}</p>
            <p>{{post.text}}</p>
        </div>
    </template>
</div>
</template>
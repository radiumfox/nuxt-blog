<script setup lang="ts">
import Burger from "./icons/burger.vue";
import {ref} from "vue";

const isMenuOpened = ref(false);
const toggleMenu = function() {
    console.log('click')
    isMenuOpened.value = !isMenuOpened.value;
}
</script>
<template>
    <header class="header">
        <div class="header__logo logo">
            <img class="logo__img" srs="" alt="logo"/>
        </div>
        <div class="header__button-wrapper">
            <button @click="toggleMenu()" class="header__button" >
<!--                <Burger/>-->
            </button>
        </div>
        <nav :class="['header__nav nav', {'nav--show':isMenuOpened}]">
            <ul class="nav__list">
                <li><NuxtLink to="/">Main page</NuxtLink></li>
                <li><NuxtLink to="/posts">Posts</NuxtLink></li>
                <li><NuxtLink to="/create-post">Add post</NuxtLink></li>
            </ul>
        </nav>
    </header>
</template>
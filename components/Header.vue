<script setup lang="ts">
import Burger from "./icons/burger.vue";
import ButtonPrimary from "./buttons/ButtonPrimary.vue";
import InputSearch from "./forms/InputSearch.vue";
import {ref} from "vue";

const isMenuOpened = ref(false);
const toggleMenu = function() {
    console.log('click')
    isMenuOpened.value = !isMenuOpened.value;
}
</script>
<template>
    <header class="header">
        <div class="header__wrapper">
          <div class="header__logo logo">
              <img class="logo__img" srs="" alt="logo"/>
          </div>
          <div class="header__button-wrapper">
              <button @click="toggleMenu()" class="header__button" >
                  <Burger/>
              </button>
          </div>
          <transition name="slide-down">
              <nav v-show="isMenuOpened" :class="['header-nav']">
                  <div class="header-nav__wrapper">
                      <ul class="header-nav__list">
                          <li class="header-nav__item">
                              <NuxtLink class="header-nav__link" to="/">Main page</NuxtLink>
                          </li>
                          <li class="header-nav__item">
                              <NuxtLink class="header-nav__link" to="/posts">Posts</NuxtLink>
                          </li>
                          <li class="header-nav__item">
                              <NuxtLink class="header-nav__link" to="/create-post">Add post</NuxtLink>
                          </li>
                      </ul>
                      <div class="header-nav__search">
                          <InputSearch id="header-search"/>
                      </div>
                      <div class="header-nav__button">
                          <ButtonPrimary text="Subscribe"/>
                      </div>
                  </div>
              </nav>
          </transition>

        </div>
    </header>
</template>

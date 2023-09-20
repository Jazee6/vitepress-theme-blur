<script setup lang="ts">
import {useData} from 'vitepress'
import NavBar from "./components/NavBar.vue";
import Hero from "./components/Hero.vue";
import PostList from "./components/PostList.vue";
import Footer from "./components/Footer.vue";
import NotFound from "./components/NotFound.vue";
import Article from "./components/Article.vue";

// https://vitepress.dev/reference/runtime-api#usedata
let vitePressData = useData();
const {site, frontmatter, page} = vitePressData
</script>

<template>
  <NavBar/>
  <div class="flex flex-col min-h-screen">
    <Hero v-if="frontmatter.home"/>
    <PostList v-if="frontmatter.home"/>
    <NotFound v-else-if="page.isNotFound"/>
    <Article v-else/>
    <Footer/>
  </div>
</template>

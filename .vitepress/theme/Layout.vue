<script setup lang="ts">
import {useData} from 'vitepress'
import NavBar from "./components/NavBar.vue";
import Hero from "./components/Hero.vue";
import PostList from "./components/PostList.vue";
import Footer from "./components/Footer.vue";
import NotFound from "./components/NotFound.vue";
import Article from "./components/Article.vue";
import Page from "./components/Page.vue";

const {site, frontmatter, page} = useData()
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <NavBar/>
    <NotFound v-if="page.isNotFound"/>

    <template v-else>
      <template v-if="frontmatter.home">
        <Hero/>
        <PostList/>
      </template>

      <template v-else>
        <Page v-if="frontmatter.page"/>
        <Article v-else/>
      </template>
    </template>
    <Footer/>
  </div>
</template>

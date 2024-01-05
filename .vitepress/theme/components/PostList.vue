<script setup>
import {data as posts} from '../posts.data'
import PostCard from "./PostCard.vue";

</script>

<template>
  <div class="container mx-auto pb-8 px-4 max-w-screen-lg">
    <PostCard v-for="post in posts" :key="post.url" :post="post"/>
  </div>
</template>

<style scoped>

</style>

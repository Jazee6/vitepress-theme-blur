<script setup>
import {data as posts} from '../posts.data'
import PostCard from "./PostCard.vue";
</script>

<template>
  <div class="container mx-auto columns-md px-4 mb-8">
    <PostCard v-for="post in posts" :key="post.url" :post="post"/>
  </div>
</template>

<style scoped>

</style>
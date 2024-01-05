<script setup lang="ts">
import {Post as postType} from '../posts.data'

defineProps<{
  post: postType,
}>()
</script>

<template>
  <a
      class="flex flex-col shadow hover:shadow-2xl transition-all rounded mb-4"
      :href="post.url">
    <div class="p-4 flex flex-col space-y-2">
      <div class="text-xl font-bold ">{{ post.title }}</div>
      <div class="text-gray-500 line-clamp-5" v-if="post.excerpt" v-html="post.excerpt"></div>
      <div class="font-light text-gray-500 text-sm">{{ post.date.string }}</div>
    </div>
  </a>
</template>

<style scoped>

</style>
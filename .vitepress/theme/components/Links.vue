<script setup lang="ts">
import {useData} from "vitepress";

const {frontmatter} = useData()
</script>

<template>
  <div class="container mx-auto max-w-screen-lg px-4">
    <ul class="md:columns-3 sm:columns-2">
      <li v-for="i in frontmatter.links" :key="i.url" id="card-link">
        <a :href="i.url" target="_blank" class="flex p-2 h-full">
          <img v-if="i.avatar" :src="i.avatar" alt="link image" class="h-20 w-20 rounded-full shrink-0">
          <div class="flex flex-col ml-4">
            <div class="text-lg font-bold mt-1">{{ i.title }}</div>
            <div class="text-sm font-normal line-clamp-2">{{ i.description }}</div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
#card-link {
  @apply rounded-lg shadow hover:shadow-xl transition-all mb-4 h-24 break-inside-avoid
}
</style>
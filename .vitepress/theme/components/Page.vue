<script setup lang="ts">
import {useData} from "vitepress";
import Links from "./Links.vue";

const {frontmatter} = useData()
</script>

<template>
  <template v-if="frontmatter.links">
    <Links class="mt-24"/>
  </template>
  <div v-else class="mt-24">

  </div>
  <div class="container mx-auto max-w-screen-lg px-4 prose prose-img:rounded md:prose-img:max-w-3xl prose-img:max-h-screen
      prose-pre:text-neutral-900 dark:prose-invert">
    <Content/>
  </div>
</template>

<style scoped>

</style>
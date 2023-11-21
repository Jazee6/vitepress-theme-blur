<script setup lang="ts">
import {useData} from "vitepress";

const {frontmatter} = useData()
</script>

<template>
  <div class="container mx-auto max-w-screen-lg px-4">
    <ul>
      <li v-for="i in frontmatter.links" :key="i">
        {{ i }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
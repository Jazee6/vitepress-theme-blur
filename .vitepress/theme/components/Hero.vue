<script setup>
import {useData} from 'vitepress'

const {theme} = useData()
</script>

<template>
  <div class="container mx-auto flex flex-col py-8 md:py-16 pl-4 mt-16">
    <img :src="theme.avatar.src" alt="avatar" class="w-32 h-32 rounded-full shadow-2xl mb-4"/>
    <img v-if="theme.avatar.shadow" :src="theme.avatar.src" alt="avatar"
         class="w-32 h-32 rounded-full blur-2xl absolute -z-10"/>
    <div class="text-2xl font-bold mb-2">{{ theme.line1 }}</div>
    <div class="mb-2">{{ theme.line2 }}</div>
    <div class="flex space-x-2">
      <a v-for="item in theme.socialLinks" :key="item.link" :aria-label="item.ariaLabel" v-html="item.icon.svg"
         :href="item.link" target="_blank" class="hover:text-gray-500 h-6 w-6">
      </a>
    </div>
  </div>
</template>

<style scoped>

</style>
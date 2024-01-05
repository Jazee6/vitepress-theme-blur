<script setup>
import {useData} from 'vitepress'

const {site, theme} = useData()
</script>

<template>
  <div id="navbar">
    <div class="w-full max-w-screen-xl mx-auto px-4 flex items-center">
      <a id="nav-title" :href=site.base class="text-lg font-semibold">{{ theme.siteTitle }}</a>
      <div class="flex-1 flex justify-end items-center">
        <ul class="flex">
          <li v-for="item in theme.nav" :key="item.text">
            <a :href="item.link" class="px-4 text-sm text-gray-500 hover:text-gray-900">
              {{ item.text }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
#navbar {
  background: rgba(245, 245, 247, 0.72);
  backdrop-filter: saturate(180%) blur(20px);
  @apply shadow fixed w-full h-16 flex z-10 rounded-b-lg
}
</style>
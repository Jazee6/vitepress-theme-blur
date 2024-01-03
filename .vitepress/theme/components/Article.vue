<script setup lang="ts">
import {useData} from 'vitepress'
import {onMounted} from "vue";
import {formDate} from "../utils/utils.js";

const {frontmatter, page} = useData()

onMounted(() => {
  window.onscroll = () => {
    const backToTopButton = document.getElementById("back-to-top-button");
    if (backToTopButton) {
      if (document.documentElement.scrollTop > 100) {
        backToTopButton.style.visibility = "visible";
      } else {
        backToTopButton.style.visibility = "hidden";
      }
    }
  }
})

const handleToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
</script>

<template>
  <div
      class="container mx-auto max-w-screen-lg px-4 prose prose-img:rounded md:prose-img:max-w-3xl prose-img:max-h-screen
      prose-pre:text-neutral-900 dark:prose-invert">
    <Content/>
    <p v-if="!frontmatter.home">
      上次更新:
      {{ formDate(page.lastUpdated) }}
    </p>
  </div>
  <div id="back-to-top" v-if="!frontmatter.home">
    <div class="w-full flex">
      <button id="back-to-top-button" @click="handleToTop"/>
    </div>
  </div>
</template>

<style scoped>
#back-to-top {
  @apply max-w-screen-xl w-full mx-auto sticky bottom-4 mb-4 px-4
}

#back-to-top-button {
  background: rgba(245, 245, 247, 0.72) url("/back-to-top.svg");
  backdrop-filter: saturate(180%) blur(20px);
  @apply rounded-full shadow ml-auto w-16 h-16 cursor-pointer hover:shadow-xl transition-all invisible
}
</style>
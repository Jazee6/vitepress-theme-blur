<script setup>
import {useData} from 'vitepress'
import {formDate} from "../utils/utils.ts";
import {onMounted} from "vue";

const {frontmatter, page, theme} = useData()

onMounted(() => {
  window.onscroll = () => {
    const backToTopButton = document.getElementById("back-to-top-button");
    if (document.documentElement.scrollTop > 100) {
      backToTopButton.style.visibility = "visible";
    } else {
      backToTopButton.style.visibility = "hidden";
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
  <img v-if="frontmatter['img']" :src="frontmatter['img']" alt="Head Image"
       class="h-[32rem] object-cover brightness-75 blur-sm rounded-b-lg"/>
  <div v-else class="h-[32rem] from-indigo-200 to-cyan-200 bg-gradient-to-r brightness-75 rounded-b-lg"/>
  <div class="absolute w-full top-1/4 flex flex-col items-center space-y-1">
    <p class="font-bold text-3xl text-white">{{ page.title }}</p>
    <p class="text-gray-300">lastUpdated: {{ formDate(page.lastUpdated) }}</p>
  </div>
  <div
      class="container mx-auto max-w-screen-lg px-4 prose prose-img:rounded md:prose-img:max-w-3xl prose-img:max-h-screen
      prose-pre:text-neutral-900 dark:prose-invert lg:shadow-xl rounded-lg py-4 relative -top-16 bg-white">
    <Content/>
  </div>
  <div id="back-to-top">
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
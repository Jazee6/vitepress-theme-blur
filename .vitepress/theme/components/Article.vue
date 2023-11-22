<script setup lang="ts">
import {useData} from 'vitepress'

const {frontmatter} = useData()

window.onscroll = function () {
  if (document.documentElement.scrollTop > 128) {
    document.getElementById("back-to-top").style.visibility = "visible";
  } else {
    document.getElementById("back-to-top").style.visibility = "hidden";
  }
}

const handleToTop = () => {
  document.documentElement.scrollTop = 0;
}
</script>

<template>
  <div class="container mx-auto max-w-screen-lg px-4 prose prose-img:rounded dark:prose-invert">
    <Content/>
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
  @apply rounded-full shadow ml-auto w-16 h-16 cursor-pointer hover:shadow-xl transition-all
}
</style>
<script setup>
import {data} from '../posts.data'
import PostCard from "./PostCard.vue";
import {onMounted, ref, watch} from "vue";
import {breakpointsTailwind, useBreakpoints} from "@vueuse/core";

const bp = useBreakpoints(breakpointsTailwind)

let posts = ref()

function re() {
  const column1 = []
  const column2 = []
  data.forEach((post, index) => {
    if (index % 2 === 0) {
      column1.push(post)
    } else {
      column2.push(post)
    }
  })
  posts.value = [...column1, ...column2]
}

onMounted(() => {
  if (bp.greater('md')) re()
  else posts.value = data
})

watch(bp.greater('md'), (is) => {
  if (is) re()
  else posts.value = data
})
</script>

<template>
  <div class="container mx-auto md:columns-2 pb-8 px-2">
    <PostCard v-for="post in posts" :key="post.url" :post="post"/>
  </div>
</template>

<style scoped>

</style>

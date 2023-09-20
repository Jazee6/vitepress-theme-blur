<script setup>
import {version} from '../../../package.json';

const v = version;
</script>

<template>
  <footer class="h-16 mt-auto shrink-0 bg-gray-100 rounded-t ">
    <div class="container mx-auto px-4 py-2 flex justify-end">
      Theme : &nbsp;<a class="text-gray-500 hover:underline" href="https://github.com/Jazee6/vitepress-theme-blur"
                       target="_blank">Blur</a>
      &nbsp;by Jazee V{{ v }}
    </div>
  </footer>
</template>

<style scoped>

</style>
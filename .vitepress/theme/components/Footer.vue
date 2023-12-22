<script setup>
import {version} from '../../../package.json';
import {useData} from "vitepress";

const v = version;

const {theme} = useData()
</script>

<template>
  <footer class="h-24 mt-auto shrink-0 bg-gray-100 rounded-t">
    <div class="max-w-screen-xl mx-auto px-4 py-2 flex flex-col h-full text-gray-500 text-sm">
      <div class="flex-1 flex justify-center items-center">
        <div>{{ theme.footer.message }}</div>
        <div v-if="theme.footer.message" class="m-2">|</div>
        <div>{{ theme.footer.copyright }}</div>
      </div>
      <div class="flex">
        <div>
          Theme: <a class="hover:underline text-gray-700" href="https://github.com/Jazee6/vitepress-theme-blur"
                    target="_blank">Blur</a> V{{ v }}
        </div>
        <a class="ml-auto hover:text-black" href="https://beian.miit.gov.cn/"
           target="_blank">{{ theme.footer.beiAn }}</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>
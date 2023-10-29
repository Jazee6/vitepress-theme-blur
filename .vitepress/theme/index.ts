// https://vitepress.dev/guide/custom-theme
// @ts-ignore
import Layout from './Layout.vue'
import './style.css'
import {inject} from '@vercel/analytics';

inject()

export default {
    Layout,
    // enhanceApp({ app, router, siteData }) {
    //   // ...
    // }
}


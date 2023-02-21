# vue-X6-components
vue3+ts+vite+Antv-X6 的一个思维导图组件 安装了东西就能渲染出来 并且吧各种功能做了区分

使用的vue页面
```
<!--  -->
<template>
  <div class="test-container">
    <X6 ref="x6Ref" />
  </div>
</template>
<script setup lang="ts">
import X6 from './components/x6/index.vue';

/**
 * 禁用浏览器缩放
 */
// 覆盖鼠标滑动
document.body.addEventListener('wheel', (e) => {
  if (e.ctrlKey) {
    if (e.deltaY < 0) {
      e.preventDefault();
      return false;
    }
    if (e.deltaY > 0) {
      e.preventDefault();
      return false;
    }
  }
}, { passive: false });
</script>
<style scoped lang="scss">
  .test-container {
    width: 100%;
    height: 100%;
    .g6 {
      width: 100%;
      height: 100%;
    }
  }
</style>
```
依赖列表
```
{
  "name": "vue3-vite-element-plus-pinia",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --host --mode development",
    "pro": "vite --host --mode production",
    "build": "vue-tsc --noEmit && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@antv/hierarchy": "^0.6.10",
    "@antv/x6": "^2.3.0",
    "@antv/x6-plugin-clipboard": "^2.1.4",
    "@antv/x6-plugin-export": "^2.1.5",
    "@antv/x6-plugin-history": "^2.1.2",
    "@antv/x6-plugin-keyboard": "^2.2.0",
    "@antv/x6-plugin-scroller": "^2.0.8",
    "@antv/x6-plugin-selection": "^2.1.5",
    "@antv/x6-plugin-snapline": "^2.1.6",
    "@antv/x6-vue-shape": "^2.0.9",
    "@element-plus/icons-vue": "^2.0.6",
    "@tinymce/tinymce-vue": "^5.0.0",
    "axios": "^0.27.2",
    "echarts": "^5.4.1",
    "element-plus": "^2.2.28",
    "js-cookie": "^3.0.1",
    "nprogress": "^0.2.0",
    "path-to-regexp": "^6.2.1",
    "pinia": "^2.0.17",
    "tinymce": "^5.10.6",
    "vue": "^3.2.37",
    "vue-router": "^4.1.3"
  },
  "devDependencies": {
    "@types/node": "^18.6.3",
    "@vitejs/plugin-vue": "^3.0.0",
    "sass": "^1.54.0",
    "sass-loader": "^13.0.2",
    "typescript": "^4.6.4",
    "unplugin-auto-import": "^0.10.3",
    "unplugin-icons": "^0.14.8",
    "unplugin-vue-components": "^0.21.2",
    "vite": "^3.0.0",
    "vue-tsc": "^0.38.4"
  }
}


```

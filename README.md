# vue-X6--
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

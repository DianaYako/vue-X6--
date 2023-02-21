<!-- G6 container -->
<template>
  <div class="x6-container">
    <div class="x6-dom" ref="x6DomRef" id="x6Dom"></div>
    <TeleportContainer />
  </div>
</template>
<script setup lang="ts">
import { DataUri, Graph } from '@antv/x6';
import { clearGraph, graph } from './hooks/graph';
import { renderCells } from './hooks/graph/hooks/operate';
import { initGraph } from './hooks/graph/index';
import { register, getTeleport } from '@antv/x6-vue-shape'
const TeleportContainer = getTeleport();

const x6DomRef = ref<HTMLElement>()

onMounted(() => {
  init()
})
// 初始化
const init = () => {
  if (x6DomRef.value) {
    // 初始化G6
    initGraph(x6DomRef.value).then((res: boolean) => {
      if (res) {
        graph && renderCells(graph)
      }
    })
  } else {
    init()
  }
}
onUnmounted(() => {
  clearGraph()
})

</script>
<style scoped lang="scss">
  .x6-container {
    width: 100%;
    height: 100%;
    > .x6-dom {
      width: 100%;
      height: 100%;
    }
  }
</style>
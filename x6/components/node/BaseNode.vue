<!--  -->
<template>
  <div class="main base-node">
    <div class="base-node-text">
      {{ getNode().data.label }}
    </div>
  </div>
</template>
<script setup lang="ts">
const getNode: any | undefined = inject(`getNode`)
</script>
<style scoped lang="scss">
  .main {
    width: 100%;
    height: 100%;
    background: rgb(242, 246, 255);
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

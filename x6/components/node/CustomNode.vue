<!--  -->
<template>
  <div class="custom-node">{{ getNode().data.label }}</div>
</template>
<script setup lang="ts">
const getNode: any | undefined = inject(`getNode`)
</script>
<style scoped lang="scss">
  .custom-node {
    background-color: red;
    width: 100%;
    height: 100%;
  }
</style>
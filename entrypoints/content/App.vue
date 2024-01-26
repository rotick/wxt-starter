<script setup lang="ts">
onMounted(() => {
  console.log(document.body)
})
</script>

<template>
  <div>Hello world {{ $t('extensionName') }}</div>
</template>

<style scoped>

</style>

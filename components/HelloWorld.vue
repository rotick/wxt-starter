<script lang="ts" setup>
defineProps({
  msg: {
    type: String,
    default: ''
  }
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }} {{ $t('extensionName') }}</h1>

  <div class="card w-[264px]">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the WXT and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

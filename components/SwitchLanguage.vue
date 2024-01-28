<script setup lang="ts">
import locales from '~/locale'
import DropDown from './DropDown.vue'

console.log(locales)
const { locale } = useI18n()
const currentLocale = computed(() => {
  return locales.find((i: any) => i.code === locale.value)
})
const rtl = computed(() => ['ar', 'he'].includes(locale.value))
async function switchLanguage (code, close) {
  locale.value = code
  await storage.setItem('sync:lang', code)
  close()
}
</script>

<template>
  <DropDown
    class="flex items-center relative border-r border-gray-200/80 dark:border-gray-700/80 cursor-default shrink-0 z-10"
    :class="rtl ? 'flex-row-reverse pr-2 pl-2' : 'pl-4'"
    :top="30"
    :left="0"
  >
    <template #default="{ active }">
      <i class="icon-[ph--translate-bold] text-xl color-action shrink-0" :class="rtl ? 'ml-1' : 'mr-1'" role="img" aria-hidden="true" />
      <span class="color-action shrink-0 select-none">{{ currentLocale?.name }}</span>
      <i
        class="icon-[material-symbols--arrow-drop-down-rounded] text-2xl color-action transition-all shrink-0"
        role="img"
        :class="{ 'rotate-180': active }"
        aria-hidden="true"
      />
    </template>
    <template #content="{ close }">
      <div class="card w-[264px] p-2 rounded-2xl flex flex-wrap">
        <div
          v-for="l in locales"
          :key="l.code"
          class="h-8 px-2 rounded-xl w-[122px] line-clamp-1 break-all leading-8 cursor-pointer"
          :class="l.code === locale ? 'color-disable cursor-default' : 'hover:bg-gray-100 dark:hover:bg-gray-700 hover:color-action'"
          @click="switchLanguage(l.code, close)"
        >
          {{ l.name }}
        </div>
      </div>
    </template>
  </DropDown>
</template>

<style scoped>

</style>

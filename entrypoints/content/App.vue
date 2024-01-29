<script setup lang="ts">
import { computePosition, offset, flip, shift } from '@floating-ui/dom'
import { useResizeObserver } from '@vueuse/core'

let button: HTMLElement
let tooltip: HTMLElement
const position = ref({})
function update () {
  computePosition(button, tooltip, {
    placement: 'top-start',
    middleware: [offset(4), flip(), shift({ padding: 16 })]
  }).then(({ x, y, placement, middlewareData }) => {
    position.value = {
      left: `${x}px`,
      top: `${y}px`
    }
  })
}

function showTooltip () {
  tooltip.style.display = 'block'
  update()
}

function hideTooltip () {
  tooltip.style.display = 'none'
}
onMounted(async () => {
  await nextTick()
  button = document.querySelector('#SIvCob')!
  tooltip = document.querySelector('wxt-starter')!.shadowRoot!.querySelector('#extension-popover')!
  button.addEventListener('click', showTooltip)
})
onUnmounted(() => {
  hideTooltip()
  button.removeEventListener('click', showTooltip)
})
useResizeObserver(document.documentElement, update)
</script>

<template>
  <div id="extension-popover" class="fixed hidden bg-body" :style="position">Hello world {{ $t('extensionName') }}</div>
</template>

<style scoped></style>

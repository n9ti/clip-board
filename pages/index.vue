<script setup lang="ts">
const { clipboards, removeClipboard } = useClipboardStore()

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
}
</script>

<template>
  <NuxtLink class="btn" to="/add"> + </NuxtLink>

  <div>
    <div class="mt-4" v-for="clipboard in clipboards" :key="clipboard.id">
      <div class="flex">
        <div class="grow text-xs">{{ clipboard.name }}</div>
        <button @click="removeClipboard(clipboard.id)" class="btn btn-xs btn-square">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div @click="copyToClipboard(clipboard.text)" class="p-2 text-xl border ">{{ clipboard.text }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { addClipboard } = useClipboardStore()
const router = useRouter()

const newClipboardName = defineModel('newClipboardName', { default: '' })
const newClipboardText = defineModel('newClipboardText', { default: '' })

const addNewClipboard = () => {
  if (newClipboardName.value !== '' && newClipboardText.value !== '') {
    addClipboard({ id: Date.now(), name: newClipboardName.value, text: newClipboardText.value });
    router.back();
  }
}
const cancel = () => {
  router.back();
}

</script>

<template>

  <div class="label">
    <span class="label-text">Label</span>
  </div>
  <input v-model="newClipboardName" type="text" class="input input-bordered w-full max-w-xs" placeholder="" />


  <!-- <label class="input input-bordered flex items-center gap-2">
    Label
    <input v-model="newClipboardName" type="text" class="grow" placeholder="" />
  </label> -->

  <!--  -->

  <label class="form-control">
    <div class="label">
      <span class="label-text">Text</span>
    </div>
    <textarea v-model="newClipboardText" class="textarea textarea-bordered h-48 w-96" placeholder=""></textarea>
  </label>

  <!--  -->

  <div class="mt-4">
    <button class="btn" @click="cancel">Cancel</button>
    <button class="ml-4 btn" @click="addNewClipboard">Add</button>
  </div>
</template>
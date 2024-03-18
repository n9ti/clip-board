import { defineStore } from "pinia";

export interface Clipboard {
  id: number;
  name: string;
  text: string;
}

export const useClipboardStore = defineStore("clipboards", {
  state: () => ({
    clipboards: [] as Clipboard[],
  }),
  actions: {
    addClipboard(clipboard: Clipboard) {
      this.clipboards.push(clipboard);
    },
    removeClipboard(id: number) {
      const index = this.clipboards.findIndex(
        (clipboard) => clipboard.id === id
      );
      this.clipboards.splice(index, 1);
    },
  },
  persist: true,
});

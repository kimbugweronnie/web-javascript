import { defineStore } from "pinia"
import { ref } from "vue"

export const useToastStore = defineStore('toasts', () => {
  const toasts = ref([]);

  function push(msg, type = 'info') {
    const id = Date.now();
    toasts.value.push({ id, msg, type });
    setTimeout(() => { toasts.value = toasts.value.filter(t => t.id !== id); }, 3000);
  }

  return { toasts, push };
});

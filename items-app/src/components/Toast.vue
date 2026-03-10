<template>
     <div class="toast-container">
      <div v-for="t in toastStore.toasts" :key="t.id" :class="['toast', t.type]">
        <span class="dot"></span>{{ t.msg }}
      </div>
    </div>


</template>
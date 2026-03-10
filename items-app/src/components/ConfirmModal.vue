<template>
    <div class="modal-overlay" v-if="confirmStore.show" @click.self="confirmStore.close()">
      <div class="modal">
        <h2>⚠ Confirm Delete</h2>
        <p class="confirm-msg">You're about to delete <strong>{{ confirmStore.name }}</strong>. This action cannot be undone.</p>
        <div class="confirm-actions">
          <button class="btn btn-ghost" @click="confirmStore.close()">Cancel</button>
          <button class="btn btn-danger" @click="doDelete">Delete</button>
        </div>
      </div>
    </div>

</template>
<template>

<Navbar />

<!-- <Toast />

<ConfirmModal /> -->

<main>
 <router-view />
</main>

</template>

<script setup>

import Navbar from "./components/Navbar.vue"
import Toast from "./components/Toast.vue"
import ConfirmModal from "./components/ConfirmModal.vue"

</script>
<script setup>
import { ref } from "vue";
import { useEmployeeStore } from "../store/employeeStore";

const store = useEmployeeStore();
const name = ref("");
const role = ref("");

const addEmployee = () => {
  if (name.value && role.value) {
    store.addEmployee({ name: name.value, role: role.value });
    name.value = "";
    role.value = "";
  }
};
</script>

<template>
  <form @submit.prevent="addEmployee" class="p-4 bg-white shadow rounded">
    <input v-model="name" placeholder="Name" class="border p-2 mr-2" />
    <input v-model="role" placeholder="Role" class="border p-2 mr-2" />
    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
  </form>
</template>

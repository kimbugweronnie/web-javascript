<script setup>
import { useEmployeeStore } from "../store/employeeStore";

const store = useEmployeeStore();
</script>

<template>
  <div>
    <h2 class="text-xl font-bold">Employees</h2>
    <ul class="bg-white shadow p-4 rounded">
      <li v-for="emp in store.employees" :key="emp.id" class="flex justify-between p-2 border-b">
        <span>{{ emp.name }} - {{ emp.role }}</span>
        <button @click="store.removeEmployee(emp.id)" class="text-red-500">Delete</button>
      </li>
    </ul>
  </div>
</template>

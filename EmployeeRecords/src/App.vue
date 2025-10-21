<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <nav class="flex space-x-4 mb-6">
      <router-link to="/employees" class="text-blue-500">Employees</router-link>
      <router-link to="/tasks" class="text-blue-500">Tasks</router-link>
    </nav>
    <router-view />
  </div>
</template>

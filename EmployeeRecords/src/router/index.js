import { createRouter, createWebHistory } from "vue-router";
import EmployeesView from "../views/EmployeesView.vue";
import TasksView from "../views/TasksView.vue";

const routes = [
  { path: "/", redirect: "/employees" },
  { path: "/employees", component: EmployeesView },
  { path: "/tasks", component: TasksView },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});

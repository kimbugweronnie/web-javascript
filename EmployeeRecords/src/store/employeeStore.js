import { defineStore } from "pinia";

export const useEmployeeStore = defineStore("employeeStore", {
  state: () => ({
    employees: [],
    tasks: [],
  }),
  actions: {
    addEmployee(employee) {
      this.employees.push({ id: Date.now(), ...employee });
    },
    removeEmployee(id) {
      this.employees = this.employees.filter(emp => emp.id !== id);
    },
    addTask(task) {
      this.tasks.push({ id: Date.now(), ...task });
    },
  },
});

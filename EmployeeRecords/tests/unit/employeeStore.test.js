import { describe, expect, it, beforeEach } from "vitest";
import { createPinia } from "pinia";
import { useEmployeeStore } from "../../src/store/employeeStore.js";
import { setActivePinia } from "pinia";

describe("Employee Store", () => {
  let store;

  beforeEach(() => {
    // Initialize Pinia and set it as active
    const pinia = createPinia();
    setActivePinia(pinia);

    // Access the store
    store = useEmployeeStore();
  });

  it("adds an employee", () => {
    store.addEmployee({ name: "John Doe", role: "Developer" });

    expect(store.employees.length).toBe(1);
    expect(store.employees[0].name).toBe("John Doe");
  });

  it("removes an employee", () => {
    store.addEmployee({ id: 1, name: "Jane Doe", role: "Designer" });
    store.removeEmployee(1);

    expect(store.employees.length).toBe(0);
  });
});

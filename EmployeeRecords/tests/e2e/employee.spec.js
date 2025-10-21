// import { describe, expect, it, vi } from "vitest";
// import { mount } from "@vue/test-utils";
// import { createApp } from 'vue';
// import { createPinia } from 'pinia';
// import EmployeeForm from "../../src/components/EmployeeForm.vue";
// import EmployeeList from "../../src/components/EmployeeList.vue";

// describe("Employee CRUD", () => {
//   it("Adds an employee", async () => {

//     const app = createApp(EmployeeList);

//     // Initialize Pinia and use it with the app
//     const pinia = createPinia();
//     app.use(pinia);
//     // Mount the component
//     const wrapper = mount(EmployeeForm);
    
//     // Find the input fields and simulate user input
//     await wrapper.find("input[placeholder='Name']").setValue("John Doe");
//     await wrapper.find("input[placeholder='Role']").setValue("Developer");
//     await wrapper.find("button").trigger(); // Assuming the "Add" button is a <button>

//     // Assert the employee was added (you'll need to adjust this based on how the UI updates)
//     expect(wrapper.text()).toContain("John Doe - Developer");
//   });

//   it("Deletes an employee", async () => {
//     // Mount the component

//     const app = createApp(EmployeeList);

//     // Initialize Pinia and use it with the app
//     const pinia = createPinia();
//     app.use(pinia);
//     const wrapper = mount(EmployeeList);
    
//     // Add an employee
//     await wrapper.find("input[placeholder='Name']").setValue("John Doe");
//     await wrapper.find("input[placeholder='Role']").setValue("Developer");
//     await wrapper.find("button").trigger();

//     // Now delete the employee
//     await wrapper.find("button.delete").trigger(); // Adjust based on your delete button

//     // Assert the employee is deleted
//     expect(wrapper.text()).not.toContain("John Doe - Developer");
//   });
// });
describe("Employee CRUD", () => {
  it("Adds an employee", () => {
    cy.visit("/employees");
    cy.get("input[placeholder='Name']").type("John Doe");
    cy.get("input[placeholder='Role']").type("Developer");
    cy.contains("Add").click();
    cy.contains("John Doe - Developer");
  });

  it("Deletes an employee", () => {
    cy.contains("Delete").click();
    cy.contains("John Doe - Developer").should("not.exist");
  });
});

import { createRouter, createWebHistory } from "vue-router"

import Dashboard from "../pages/Dashboard.vue"
import ItemList from "../pages/ItemList.vue"
import ItemDetail from "../pages/ItemDetail.vue"
import ItemForm from "../pages/ItemForm.vue"
import ItemEdit from "../pages/ItemEdit.vue"
import About from "../pages/About.vue"

const routes = [
 { path: "/", component: Dashboard },
 { path: "/items", component: ItemList },
 { path: "/items/new", component: ItemForm },
 { path: "/items/:id", component: ItemDetail },
 { path: "/items/:id/edit", component: ItemEdit },
 { path: "/about", component: About },
]

export default createRouter({
 history: createWebHistory(),
 routes
})
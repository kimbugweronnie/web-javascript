import { defineStore } from "pinia"
import { ref,computed } from "vue"
import api from "../services/api"

export const useItemsStore = defineStore("items", () => {

 const items = ref([])
 const loading = ref(false)
 const total = computed(() => items.value.length);

 async function fetchItems(){
   loading.value = true
   const res = await api.get("/posts")
   items.value = res.data.slice(0,10)
   loading.value = false
 }

 async function getItem(id){
   const res = await api.get(`/posts/${id}`)
   return res.data
 }

 async function createItem(data){
   const res = await api.post("/posts", data)
   items.value.unshift(res.data)
 }

 async function updateItem(id,data){
   const res = await api.put(`/posts/${id}`,data)
   const index = items.value.findIndex(i => i.id === id)
   if(index !== -1) items.value[index] = res.data
 }

 async function deleteItem(id){
   await api.delete(`/posts/${id}`)
   items.value = items.value.filter(i => i.id !== id)
 }

 return {
   items,
   loading,
   total,
   fetchItems,
   getItem,
   createItem,
   updateItem,
   deleteItem
 }

})
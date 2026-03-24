<template>

<div>
    <div class="detail-back"><router-link class="btn btn-ghost btn-sm" to="/items">← Back</router-link></div>
    <div class="page-header">
      <!-- <div :class="['badge', isEdit ? 'badge-pink' : 'badge-teal']">{{ isEdit ? 'Edit' : 'Create' }}</div> -->
      <h1>Edit Item</h1>
    </div>
    <div class="card" style="max-width:600px">
      <div class="form-group">
        <label class="form-label">Title *</label>
        <input class="form-input" v-model="form.title" placeholder="Item title..."/>
      </div>
      <div class="form-group">
        <label class="form-label">Description</label>
        <textarea class="form-textarea" v-model="form.desc" placeholder="Describe the item..."></textarea>
      </div>
      <!-- <div class="form-row">
        <div class="form-group">
          <label class="form-label">Category</label>
          <select class="form-select" v-model="form.category">
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="idea">Idea</option>
            <option value="urgent">Urgent</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Status</label>
          <select class="form-select" v-model="form.status">
            <option value="pending">Pending</option>
            <option value="active">Active</option>
            <option value="done">Done</option>
          </select>
        </div>
      </div> -->
      <!-- <div class="form-group">
        <label class="form-label">Priority</label>
        <select class="form-select" v-model="form.priority">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div> -->
      <div class="form-actions">
        <button class="btn btn-primary" @click="save" :disabled="!form.title.trim()">
          {{ isEdit ? 'Save Changes' : 'Create Item' }}
        </button>
        <router-link class="btn btn-ghost" to="/items">Cancel</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>

import { reactive,computed,onMounted } from "vue"
import { useRoute,useRouter } from "vue-router"
import { useItemsStore } from "../store/itemsStore"

const store = useItemsStore()
const route = useRoute()    
const router = useRouter()
const item = reactive({
 title:'',
 body:''
})


// const isEdit = computed(()=>!!route.params.id)

onMounted(async ()=>{
 item.value = await store.getItem(route.params.id)
})


const form = reactive({
 title:item.title,
 body:item.body
})

async function save(){

 if(isEdit.value){
   await store.updateItem(route.params.id,form)
 }else{
   await store.createItem(form)
 }

 router.push("/items")

}

</script>
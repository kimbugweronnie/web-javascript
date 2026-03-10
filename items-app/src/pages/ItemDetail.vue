<template>
    <div v-if="store.loading">Loading...</div>

<div v-if="item">
    <div class="detail-back"><router-link class="btn btn-ghost btn-sm" to="/items">← Back</router-link></div>
    <div class="detail-header">
      <div>
        <div class="item-id">#{{ String(item.id).padStart(4,'0') }}</div>
        <div class="detail-title">{{ item.title }}</div>
        <div class="detail-meta">
           <!-- <span :class="['tag','tag-'+item.category]">{{ item.category }}</span>  -->
          <!-- <span class="tag" :style="statusStyle(item.status)">{{ item.status }}</span> -->
          <!-- <span class="tag" style="background:rgba(255,210,77,0.1);color:var(--warn);border:1px solid rgba(255,210,77,0.25)">{{ item.priority }}</span> -->
        </div>
      </div>
      <div style="display:flex;gap:10px">
        <router-link :to="'/items/'+item.id+'/edit'" class="btn btn-primary">Edit</router-link>
        <button class="btn btn-danger" @click="confirmStore.ask(item, '/items')">Delete</button>
      </div>
    </div>
    <div class="detail-body">
      <div class="detail-desc">{{ item.body }}</div>
      <div class="detail-props">
        <div class="detail-prop"><label>Created</label><span>{{ item.created }}</span></div>
        <div class="detail-prop"><label>ID</label><span>{{ item.id }}</span></div>
      </div>
    </div>
  </div>
  <div class="empty" v-else>
    <div class="empty-icon">◎</div>
    <h3>Loading...</h3>
    
    <router-link class="btn btn-primary" to="/items">Back to list</router-link>
  </div>

</template>

<script setup>

import { ref,onMounted } from "vue"
import { useRoute } from "vue-router"
import { useItemsStore } from "../store/itemsStore"

const route = useRoute()
const store = useItemsStore()

const item = ref(null)

onMounted(async ()=>{
 item.value = await store.getItem(route.params.id)
})

</script>
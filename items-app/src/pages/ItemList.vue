<template>

    <div>

        <h1>Items</h1>
                    <div v-if="itemsStore.loading">Loading...</div>

        <div class="toolbar">
            <div class="search-wrap">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                </svg>
                <input class="form-input" v-model="q" placeholder="Search items..." />
            </div>

            <div class="filter-group">
                <button></button>
            </div>
            <router-link class="btn btn-primary" to="/items/new">+ New Item</router-link>
        </div>
        <div class="items-grid" v-if="filteredItems.length">
            <div class="item-card" v-for="item in filteredItems" :key="item.id">
                <div class="item-id">#{{ String(item.id).padStart(4, '0') }}</div>
                <div class="item-title">{{ item.title }}</div>
                <div class="item-desc">{{ item.body.slice(0, 90) }}{{ item.body.length > 90 ? '…' : '' }}</div>
                <div class="item-meta">
                    <div class="item-actions">
                        <router-link :to="'/items/' + item.id" class="btn btn-ghost btn-sm">View</router-link>
                        <router-link :to="'/items/' + item.id + '/edit'" class="btn btn-ghost btn-sm">Edit</router-link>
                        <button class="btn btn-danger btn-sm" @click.stop="confirmStore.ask(item)">Del</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="empty" v-else>
            <div class="empty-icon">◎</div>
            <h3>Nothing found</h3>
            <p>Try a different search or filter.</p>
            <router-link class="btn btn-primary" to="/items/new">Create an item</router-link>
        </div>

    </div>

</template>

<script setup>

import { onMounted,computed,ref } from "vue"
import { useItemsStore } from "../store/itemsStore"

const itemsStore = useItemsStore()
const q = ref("")
const filteredItems = computed(() => {

    if (!q.value) {
         return itemsStore.items
    }

    return itemsStore.items.filter(item =>
        item.title.toLowerCase().includes(q.value.toLowerCase()) ||
        item.body.toLowerCase().includes(q.value.toLowerCase())
    )
})

onMounted(() => {
    itemsStore.fetchItems()
})

</script>
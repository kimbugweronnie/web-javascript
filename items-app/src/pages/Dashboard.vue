<template>

    <div>
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-label">Total Items</div>
                <div class="stat-value purple">{{ itemsStore.total }}</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Active</div>
                <div class="stat-value teal">{{ itemsStore.total }}</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Pending</div>
                <div class="stat-value pink">{{ itemsStore.total }}</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Done</div>
                <div class="stat-value" style="color:var(--success)">{{ itemsStore.total }}</div>
            </div>
        </div>
        <div class="page-header">
            <div class="badge badge-purple">Overview</div>
            <h1>Dashboard</h1>
            <p>Recent items across all categories.</p>
        </div>
        <div class="items-grid">
            <div class="item-card" v-for="item in itemsStore.items" :key="item.id" @click="go(item.id)">
                <div class="item-id">#{{ String(item.id).padStart(4, '0') }}</div>
                <div class="item-title">{{ item.title }}</div>
                <div class="item-desc">{{ item.body }}</div>
                <div class="item-meta">
                    <span :class="['tag', 'tag-' + item.category]">{{ item.userId }}</span>
                    <span style="font-size:0.72rem;color:var(--text-muted)">{{ item.userId }}</span>
                </div>
            </div>
        </div>
        <div style="margin-top:28px;display:flex;justify-content:flex-end">
            <router-link class="btn btn-ghost" to="/items">View all →</router-link>
        </div>
    </div>

</template>

<script setup>

import { onMounted } from "vue"
import { useRouter } from "vue-router"
import { useItemsStore } from "../store/itemsStore"

const router = useRouter()
const itemsStore = useItemsStore()

onMounted(() => {
    itemsStore.fetchItems()
})

function go(id) {
    router.push(`/items/${id}`)
}

</script>
<script setup>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
    <div class="w-full h-screen flex flex-col">
        <Navbar />
        <div class="flex flex-row flex-1">
        <Sidebar />
        <div class="flex-1 bg-gray-200">
            <RouterView />
        </div>
        </div>
    </div>
</template>
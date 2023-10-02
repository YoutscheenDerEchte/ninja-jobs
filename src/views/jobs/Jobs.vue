<template>
    <div>
        <h1>Jobs</h1>
        <div v-for="job in jobs" :key="job.id">
            <router-link :to="{ name: 'JobsDetails', params: {id: job.id}}"><h2>{{ job.title }}</h2></router-link>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import JobsDetails from './JobsDetails.vue';

const jobs = ref([
    {title: 'Ninja UX Desinger', id: 1, details: 'lorem'},
    {title: 'Ninja Web Dev', id: 2, details: 'lorem'},
    {title: 'Ninja Vue Dev', id: 3, details: 'lorem'},
])
</script>

<style lang="scss" scoped>

</style>
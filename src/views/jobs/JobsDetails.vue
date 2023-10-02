<template>
    <div>
        <h1>Jobs Detail Page</h1>
        <p>THe Job Id is {{ id }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const id = ref(route.params.id)
</script>

<style lang="scss" scoped>

</style>
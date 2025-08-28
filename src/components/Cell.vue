<script setup lang="ts">
    defineProps<{
        cellState: boolean
    }>()
</script>

<template>
    <td class="cell-state" :class="{alive: cellState}"></td>
</template>

<style scoped>
.cell-state {
    border: 1px solid black;
}

.cell-state.alive {
    background-color: green;
}
</style>
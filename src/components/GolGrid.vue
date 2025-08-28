<script setup lang="ts">
    import { useCellStateStore } from '@/stores/cell-state-store';
    import Cell from '@/components/Cell.vue';
    const cellStateStore = useCellStateStore()
    const cellStateGridFlat = cellStateStore.cellStateGrid.flat()
</script>

<template>
    <div class="cell-grid">
        <Cell 
            v-for="(cellState, index) in cellStateStore.cellStateGrid.flat()" 
            :cell-state="cellState" :key="index"/>
    </div>
</template>

<style scoped>
.cell-grid {
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-rows: repeat(20, 3vmin);
    grid-template-columns: repeat(20, 3vmin);
}
</style>
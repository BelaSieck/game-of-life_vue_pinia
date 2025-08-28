<script setup lang="ts">
    import { useCellStateStore } from '@/stores/cell-state-store';
    import Cell from '@/components/Cell.vue';
    const cellStateStore = useCellStateStore()
</script>

<template>
    <table class="cell-grid">
        <tr class="cell-state-row" 
            v-for="(cellRow, rowKey) in cellStateStore.cellStateGrid"
            :key="rowKey">
             <Cell 
                v-for="(cellState, cellKey) in cellRow"
                :cellState
                :key="`${rowKey}-${cellKey}`"/>
        </tr>
    </table>
</template>

<style scoped>
.cell-grid {
   /*  margin-left: auto;
    margin-right: auto; */
}
</style>
<script setup lang="ts">
    import { useCellStateStore } from '@/stores/cell-state-store';
    import ShapeInfo from './ShapeInfo.vue';
    import { lifePatterns } from '@/constants/lifePatterns';
    const cellStateStore = useCellStateStore()
    function addShape(shape: boolean[][]) {
        const row = Math.floor(cellStateStore.rows / 2 - (shape.length / 2))
        const col = Math.floor(cellStateStore.columns / 2 - (shape[0].length / 2))
        cellStateStore.clearGrid()
        cellStateStore.addShape(shape, row, col)
    }
</script>

<template>
    <div class="state-selection">
        <ShapeInfo
            v-for="shape in lifePatterns" 
            :shape="shape"
            @click="addShape(shape.pattern)"/>
    </div>
</template>

<style lang="css" scoped>
    .state-selection {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
</style>
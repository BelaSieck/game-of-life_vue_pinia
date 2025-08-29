<script setup lang="ts">
    import { useCellStateStore } from '@/stores/cell-state-store';
import ShapeInfo from './ShapeInfo.vue';
import { parsedShapes } from '@/constants/parsedShapes';
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
            v-for="shape in parsedShapes" 
            :shape="shape"
            @click="addShape(shape.pattern)"/>
        <!-- <div class="red" @click="addShape([[true]])"></div>
        <div class="blue" @click="addShape([[true, false, false], [false, true, false], [false, false, true] ])"></div>
        <div class="green" @click="addShape([[true, true], [true, true]])"></div>
        <div class="yellow"></div> -->
    </div>
</template>

<style lang="css" scoped>
    .state-selection {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    /* .red { background-color: red;}
    .blue { background-color: blue;} 
    .green { background-color: green;}
    .yellow { background-color: yellow;} */
</style>
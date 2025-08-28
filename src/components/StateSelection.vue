<script setup lang="ts">
    import { useCellStateStore } from '@/stores/cell-state-store';
    const cellStateStore = useCellStateStore()
    function addShape(shape: boolean[][]) {
        cellStateStore.clearGrid()
        cellStateStore.addShape(shape, 0, 0)
    }
</script>

<template>
    <div class="state-selection">
        <div class="red" @click="addShape([[true]])"></div>
        <div class="blue" @click="addShape([[true, false, false], [false, true, false], [false, false, true] ])"></div>
        <div class="green"></div>
        <div class="yellow"></div>
    </div>
</template>

<style lang="css" scoped>
    .state-selection {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .red { background-color: red;}
    .blue { background-color: blue;} 
    .green { background-color: green;}
    .yellow { background-color: yellow;}
</style>
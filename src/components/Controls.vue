<script setup lang="ts">
    import { nextGridState } from '@/functions/grid-functions';
import { useCellStateStore } from '@/stores/cell-state-store';
    import { isPlusToken } from 'typescript';
    import { ref } from 'vue';
    const CellState = useCellStateStore()
    const isPLaying = ref(false)
    let playIntervall = 333
    let playHandler: number;
    function togglePlay() {
        if(!isPLaying.value) {
            isPLaying.value = true
            playHandler = setInterval(CellState.nextCellStateGrid, playIntervall)
        } else {
            isPLaying.value = false
            clearInterval(playHandler)
        }
    }
</script>

<template>
    <div class="controls">
        <button class="control-button" @click="CellState.newRandomGrid">New Random Grid</button>
        <button class="control-button" @click="CellState.nextCellStateGrid">Next State</button>
        <button class="control-button" @click="togglePlay">{{ isPLaying ? 'Stop' : 'Start' }}</button>
    </div>
</template>

<style lang="css" scoped>
    .controls {
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 1em;
    }

    .control-button {
        font-size: 1.5em;
    }
</style>
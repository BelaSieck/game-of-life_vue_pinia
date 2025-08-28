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
    <button @click="CellState.newRandomGrid">New Random Grid</button>
    <button @click="CellState.nextCellStateGrid">Next State</button>
    <button @click="togglePlay">{{ isPLaying ? 'Stop' : 'Start' }}</button>
</template>
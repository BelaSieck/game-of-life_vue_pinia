import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { randomGrid } from '@/functions/grid-functions'
import { gridStateToString } from '@/functions/grid-functions'
import { nextGridState } from '@/functions/grid-functions'

export const useCellStateStore = defineStore('cell-state-grid', () => {
    const size = ref(20);
    const cellStateGrid = ref(randomGrid(20))
    function newRandomGrid() {
        cellStateGrid.value = randomGrid(size.value)
    }
    function nextCellStateGrid() {
        cellStateGrid.value = nextGridState(cellStateGrid.value)
    }
    return { cellStateGrid, newRandomGrid, nextCellStateGrid }
})
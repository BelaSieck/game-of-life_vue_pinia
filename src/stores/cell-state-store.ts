import { ref, computed, toRaw } from 'vue'
import { defineStore } from 'pinia'
import { createEmptyGrid, createGridWithShape, randomGrid } from '@/functions/grid-functions'
import { gridStateToString } from '@/functions/grid-functions'
import { nextGridState } from '@/functions/grid-functions'

export const useCellStateStore = defineStore('cell-state-grid', () => {
    const size = ref(20)
    const rows = ref(size.value)
    const columns = ref(size.value)
    const cellStateGrid = ref(randomGrid(20))
    function newRandomGrid() {
        cellStateGrid.value = randomGrid(size.value)
    }
    function nextCellStateGrid() {
        cellStateGrid.value = nextGridState(cellStateGrid.value)
    }
    function addShape(shape: boolean[][], row: number, col: number) {
       cellStateGrid.value = createGridWithShape(toRaw(cellStateGrid.value), shape, row, col)
    }
    function clearGrid() {
        cellStateGrid.value = createEmptyGrid(size.value, size.value)
    }
    return { cellStateGrid, rows, columns, newRandomGrid, nextCellStateGrid, addShape, clearGrid }
})
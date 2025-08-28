<script setup lang="ts">
  import GolGrid from './components/GolGrid.vue';
  import { useCellStateStore } from './stores/cell-state-store';
  const CellState = useCellStateStore()
</script>

<template>
  <gol-grid/>
  <button @click="CellState.newRandomGrid">New Random Grid</button>
  <button @click="CellState.nextCellStateGrid">Next State</button>
</template>

<style scoped></style>
<script setup lang="ts">
  import Controls from './components/Controls.vue';
  import GolGrid from './components/GolGrid.vue';
  import StateSelection from './components/StateSelection.vue';
</script>

<template>
  <div class="main">
    <h1 class="title">Game of Life</h1>
    <gol-grid class="gol-grid"/>
    <Controls class="controls"></Controls>
    <state-selection class="sidebar"></state-selection>
  </div>
</template>

<style scoped>
.main {
  display: grid; 
  grid-template-columns: 20vw 20vw 20vw 20vw 20vw; 
  grid-template-rows: 20vh 20vh 20vh 20vh 20vh; 
  gap: 0px 0px; 
  grid-template-areas: 
    ". t t t s"
    ". g g g s"
    ". g g g s"
    ". g g g s"
    ". c c c s"; 
}
.gol-grid { grid-area: g; }
.controls { grid-area: c; }
.title { 
  grid-area: t;
  text-align: center; 
}
.sidebar {
  grid-area: s;
}
</style>
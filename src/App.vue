<script setup lang="ts">
  import Controls from './components/Controls.vue';
  import GolGrid from './components/GolGrid.vue';
</script>

<template>
  <div class="main">
    <gol-grid class="g"/>
    <Controls class="c"></Controls>
  </div>
</template>

<style scoped>
.main {
  display: grid; 
  grid-template-columns: 20vw 20vw 20vw 20vw 20vw; 
  grid-template-rows: 20vh 20vh 20vh 20vh 20vh; 
  gap: 0px 0px; 
  grid-template-areas: 
    ". . . . ."
    ". g g g ."
    ". g g g ."
    ". g g g ."
    ". c c c ."; 
}
.g { grid-area: g; }
.c { grid-area: c; }
</style>
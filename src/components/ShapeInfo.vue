<script setup lang="ts">
import type { Shape } from '@/constants/parsedShapes';

const props = defineProps<{
    shape: Shape
}>()
const rows = props.shape.pattern.length
const cols = props.shape.pattern[0].length
const style = `
    grid-template-rows: repeat(${rows}, 10px);
    grid-template-columns: repeat(${cols}, 10px);
`
</script>

<template>
    <div class="shape-info">
        <h3>{{ shape.name }}</h3>
        <!-- <div class="description">{{ shape.description }}</div> -->
        <div class="shape-grid" :style="style">
            <div
                v-for="cellState in shape.pattern.flat()" 
                class="cell-state"
                :class="{alive: cellState}"
                ></div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.shape-grid {
    margin-left: auto;
    margin-right: auto;
    display: grid;
}

.cell-state {
    border: 1px solid black;
}

.cell-state.alive {
    background-color: green;
}
</style>
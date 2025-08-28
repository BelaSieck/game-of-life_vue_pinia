export function randomGrid(size: number): boolean[][] {
    return Array.from({length: size}, 
        () => Array.from({length: size}, () => Math.random() > 0.5))
}

export function gridStateToString(gridState: boolean[][]): string {
    let output = '[\n'
    for(let row = 0; row < gridState.length; row++) {
        output += (gridState[row].map(cell => cell ? 'T' : 'F')).join(',') + '\n'
    }
    output += '\n]\n'
    return output
}

export function nextGridState(gridState: boolean[][]): boolean[][] {
    let nextState: boolean[][] = []
    for(let row = 0; row < gridState.length; row++) {
        nextState.push([])
        for(let col = 0; col < gridState[row].length; col++) {
            const cellNext = nextCellState(row, col, gridState)
            nextState[row].push(cellNext)
        }
    }
    return nextState
}

export function nextCellState(row: number, col: number, gridState: boolean[][]): boolean {
    const numberLivingNeighbors = countLivingNeighbors(row, col, gridState)
    switch(numberLivingNeighbors) {
        case 0: case 1: return false;
        case 2: return gridState[row][col]
        case 3: return true
        //if more than 3 neighbors: cell is dead
        default: return false
    }
}

export function countLivingNeighbors(row: number, col: number, gridState: boolean[][]): number {
    let count = 0
    for(let r = row - 1; r <= row + 1; r++) {
        for(let c = col - 1; c <= col + 1; c++) {
            if(r == row && c == col) {//dont count the cell itself
                continue
            }
            if(r < 0 || r == gridState.length || c < 0 || c == gridState[0].length) {//if checked position would be outside the grid: don't do anything.
                continue
            }
            if(gridState[r][c]) {//if neighbor at grid[r][c] is alive: increase count.
                count++
            }
        }
    }
    return count
}

export function createEmptyGrid(rows: number, columns: number): boolean[][] {
    let grid: boolean[][] = []
    for(let r = 0; r < rows; r++) {
        grid.push([])
        for(let c = 0; c < columns; c++) {
            grid[r][c] = false
        }
    }
    return grid
}

export function createGridWithShape(gridState: boolean[][], shape: boolean[][], row: number, col: number): boolean[][] {
    const newGrid = structuredClone(gridState)
    const shapeRows = shape.length
    const shapeCols = shape[0].length
    for(let r = 0; r < shapeRows; r++) {
        for(let c = 0; c < shapeCols; c++) {
            newGrid[row + r][col + c] = shape[r][c]
        }
    }
    return newGrid
}
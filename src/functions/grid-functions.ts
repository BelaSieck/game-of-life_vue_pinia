export function randomGrid(size: number): boolean[][] {
    return Array.from({length: size}, 
        () => Array.from({length: size}, () => Math.random() > 0.5))
}

export function gridStateToString(gridState: boolean[][]) {
    let output = '[\n'
    for(let row = 0; row < gridState.length; row++) {
        output += (gridState[row].map(cell => cell ? 'T' : 'F')).join(',') + '\n'
    }
    output += '\n]\n'
    return output
}

export function nextGridState(gridState: boolean[][]) {
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

export function nextCellState(row: number, col: number, gridState: boolean[][]) {
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
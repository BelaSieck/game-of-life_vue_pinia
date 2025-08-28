import { expect, test } from 'vitest'
import { countLivingNeighbors } from '@/functions/grid-functions'

//tests every possible combination of neighbors
for(let combination = 0; combination < Math.pow(2, 8); combination++) {
    const binaryChars = combination.toString(2).padStart(8, "0").split('')
    let boolCombination = binaryChars.map(char => char == '1' ? true : false)
    boolCombination.splice(4, 0, true)
    let gridState: boolean[][] = []
    for(let row = 0; row < 3; row++) {
        gridState.push([])
        for(let col = 0; col < 3; col++) {
            gridState[row][col] = boolCombination[3 * row + col]
        }
    }
    test('countLivingNeighbors of: ' + gridState.toString(), () => {
        const count = boolCombination.filter(isAlive => isAlive).length - 1
        expect(countLivingNeighbors(1, 1, gridState)).toBe(count)
    })
}
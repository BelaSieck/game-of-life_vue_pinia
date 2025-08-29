export interface shapeDefinition {
    name: string,
    description: string,
    pattern: string
}

export const shapeDefinitions: shapeDefinition[] = [
    {
        name: 'acorn ',
        description: `(stabilizes at time 5206) A methuselah found by Charles Corderman. 
        It has a final population of 633 and covers an area of 215 by 168 cells, not counting the 13 gliders it produces. 
        Its ash consists of typical stable objects and blinkers, along with the relatively rare mango and a temporary`,
        pattern: 
        `
        .O.....\n
	    ...O...\n
	    OO..OOO\n`
    },
    {
        name: ':aircraft carrier',
        description: 'This is the smallest still life that has more than one island.',
        pattern: `
        OO..
	    O..O
	    ..OO
        `
    }
]
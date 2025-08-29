import { parseShape } from "@/functions/grid-functions"
import { shapeDefinitions } from "./shapeDefinitions"

export interface Shape {
    name: string,
    description: string,
    pattern: boolean[][]
}

export const parsedShapes: Shape[] = shapeDefinitions.map(shapeDef => {
    return {
        name: shapeDef.name,
        description: shapeDef.description,
        pattern: parseShape(shapeDef.pattern)
    }
})
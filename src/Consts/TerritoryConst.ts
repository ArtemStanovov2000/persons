/**
 * Параметры территории
 */
interface Territory {
    // Параметр размера территории
    [U: string]: number
}

export const TerritoryConst: Territory = {
    countCellInString: 25,
    countStringInSpace: 15
}
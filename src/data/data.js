import { cellTypeList, infrastructureType } from "./consts"

export const createRandomType = function () {
    const randomNumber = Math.random()
    let cellType
    if (randomNumber > 0.99) {
        cellType = {
            texture: cellTypeList.grass,
            infrastructure: infrastructureType.none
        }
    } else if (randomNumber > 0.75) {
        cellType = {
            texture: cellTypeList.bush,
            infrastructure: infrastructureType.none
        }
    } else {
        cellType = {
            texture: cellTypeList.forest,
            infrastructure: infrastructureType.none
        }
    }
    return cellType
}

import { TerritoryConst } from "../../Consts/TerritoryConst"
import { GroundTypeList } from "../../Consts/cellType/groundType"
import { InfrastructureType } from "../../Consts/cellType/infrastructureType"
import InfrastructureTypeInstance from "../../Consts/cellType/infrastructureType"
import GroundTypeInstance from "../../Consts/cellType/groundType"

interface CellType {
    texture: GroundTypeInstance,
    infrastructure: InfrastructureTypeInstance
}

export default CellType

const createRandomType = function () {
    const randomNumber = Math.random()
    let cellType: CellType
    if (randomNumber > 0.99) {
        cellType = {
            texture: GroundTypeList.grass,
            infrastructure: InfrastructureType.none
        }
    } else if (randomNumber > 0.75) {
        cellType = {
            texture: GroundTypeList.bush,
            infrastructure: InfrastructureType.none
        }
    } else {
        cellType = {
            texture: GroundTypeList.forest,
            infrastructure: InfrastructureType.none
        }
    }
    return cellType
}


export const territory: Array<Array<CellType>> = []
for (let i = 0; i < TerritoryConst.countStringInSpace; i++) {
    const string = []
    for (let j = 0; j < TerritoryConst.countCellInString; j++) {
        string.push(createRandomType())
    }
    territory.push(string)
}

territory[7][13] = {
    texture: GroundTypeList.asphalt,
    infrastructure: InfrastructureType.goverment
}
territory[7][12] = {
    texture: GroundTypeList.grass,
    infrastructure: InfrastructureType.oilWachturm
}


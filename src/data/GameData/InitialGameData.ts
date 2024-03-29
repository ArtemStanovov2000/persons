import { TerritoryConst } from "../../Consts/TerritoryConst"
import { GroundTypeList } from "../../Consts/cellType/groundType"
import GroundTypeInstance from "../../Consts/cellType/groundType"
import { InfrastructureTypeInstance } from "../../Consts/cellType/infrastructureType/baseInfrastructure"
import { BusinessType } from "../../Consts/cellType/infrastructureType/business"
import { FinanceType } from "../../Consts/cellType/infrastructureType/finance"
import { IndustryType } from "../../Consts/cellType/infrastructureType/industry"
import { ManufacturingType } from "../../Consts/cellType/infrastructureType/manufacturIngIndustry"
import { MiningIndustryType } from "../../Consts/cellType/infrastructureType/miningIndustry"
import { SocialStructureType } from "../../Consts/cellType/infrastructureType/socialStructure"
import { GovermentType } from "../../Consts/cellType/infrastructureType/goverment"

interface CellType {
    texture: GroundTypeInstance,
    infrastructure: InfrastructureTypeInstance
}

export default CellType

const createRandomType = function () {
    const randomNumber = Math.random()
    let cellType: CellType
    if (randomNumber > 0.98) {
        cellType = {
            texture: GroundTypeList.grass,
            infrastructure: GovermentType.none
        }
    } else if (randomNumber > 0.75) {
        cellType = {
            texture: GroundTypeList.bush,
            infrastructure: GovermentType.none
        }
    } else {
        cellType = {
            texture: GroundTypeList.forest,
            infrastructure: GovermentType.none
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

// Дом правительства
territory[7][13] = {
    texture: GroundTypeList.asphalt,
    infrastructure: GovermentType.goverment
}

// Нефтяные вышки
territory[10][4] = {
    texture: GroundTypeList.grass,
    infrastructure: MiningIndustryType.oilRig
}
territory[11][4] = {
    texture: GroundTypeList.grass,
    infrastructure: MiningIndustryType.oilRig
}

// Сельскохозяйственная земля
for (let i = 1; i < 6; i++) {
    for (let j = 1; j < 5; j++) {
        territory[i][j] = {
            texture: GroundTypeList.ground,
            infrastructure: GovermentType.none
        }
    }
}

// Нефтеперерабатывающий завод
territory[10][5] = {
    texture: GroundTypeList.asphalt,
    infrastructure: ManufacturingType.refineryPlant
}

// Ферма
territory[6][4] = {
    texture: GroundTypeList.grass,
    infrastructure: MiningIndustryType.farm
}

// Магазин
territory[7][12] = {
    texture: GroundTypeList.asphalt,
    infrastructure: BusinessType.shop
}

// ТЭЦ
territory[11][5] = {
    texture: GroundTypeList.asphalt,
    infrastructure: ManufacturingType.powerPlant
}

// Жилые дома
for (let i = 1; i < 6; i++) {
    for (let j = 7; j < 15; j++) {
        territory[i][j] = {
            texture: GroundTypeList.asphalt,
            infrastructure: SocialStructureType.home
        }
    }
}

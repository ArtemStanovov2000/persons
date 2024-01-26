import { countCellInString, countStringInSpace, cellTypeList, infrastructureType } from "../consts"
import { createRandomType } from "../data"

export const space = []
for (let i = 0; i < countStringInSpace; i++) {
    const string = []
    for (let j = 0; j < countCellInString; j++) {
        string.push(createRandomType())
    }
    space.push(string)
}

space[7][13] = {
    texture: cellTypeList.asphalt,
    infrastructure: infrastructureType.goverment
}
space[7][12] = {
    texture: cellTypeList.grass,
    infrastructure: infrastructureType.oilWachturm
}


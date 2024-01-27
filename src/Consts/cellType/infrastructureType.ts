import { imagesInfrastructure } from "../../img/imageAssets"

interface InfrastructureTypeInstance {
    backgroundImage: string
}

export default InfrastructureTypeInstance;

interface InfrastructureTypeList {
    [U: string]: InfrastructureTypeInstance
}

export const InfrastructureType: InfrastructureTypeList = {
    none: {
        backgroundImage: ""
    },
    goverment: {
        backgroundImage: imagesInfrastructure.goverment
    },
    oilWachturm: {
        backgroundImage: imagesInfrastructure.oilWachturm
    }
}
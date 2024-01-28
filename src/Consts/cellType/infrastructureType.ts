import { imagesInfrastructure } from "../../img/imageAssets"

interface InfrastructureTypeInstance {
    backgroundImage: string,
    humanResources: number
}

export default InfrastructureTypeInstance;

interface InfrastructureTypeList {
    [U: string]: InfrastructureTypeInstance
}

export const InfrastructureType: InfrastructureTypeList = {
    none: {
        backgroundImage: "",
        humanResources: 0
    },
    goverment: {
        backgroundImage: imagesInfrastructure.goverment,
        humanResources: 10
    },
    oilWachturm: {
        backgroundImage: imagesInfrastructure.oilWachturm,
        humanResources: 3
    }
}
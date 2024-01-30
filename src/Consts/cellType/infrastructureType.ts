import { imagesInfrastructure } from "../../img/imageAssets"

interface InfrastructureTypeInstance {
    backgroundImage: string,
    humanResources: number,
    maintenanceCosts: number
}

export default InfrastructureTypeInstance;

interface InfrastructureTypeList {
    [U: string]: InfrastructureTypeInstance
}

export const InfrastructureType: InfrastructureTypeList = {
    none: {
        backgroundImage: "",
        humanResources: 0,
        maintenanceCosts: 0
    },
    goverment: {
        backgroundImage: imagesInfrastructure.goverment,
        humanResources: 10,
        maintenanceCosts: -0.25
    },
    oilWachturm: {
        backgroundImage: imagesInfrastructure.oilWachturm,
        humanResources: 3,
        maintenanceCosts: -0.04
    },
    oilFactory: {
        backgroundImage: imagesInfrastructure.oilFactory,
        humanResources: 7,
        maintenanceCosts: -0.04
    },
    shop: {
        backgroundImage: imagesInfrastructure.shop,
        humanResources: 3,
        maintenanceCosts: 0
    },
    farm: {
        backgroundImage: imagesInfrastructure.farm,
        humanResources: 10,
        maintenanceCosts: 0
    }
}
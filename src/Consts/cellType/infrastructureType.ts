import { imagesInfrastructure } from "../../img/imageAssets"

interface InfrastructureTypeInstance {
    name: string,
    backgroundImage: string,
    humanResources: number,
    maintenanceCosts: number,
    oilProduction: number,
    electricityProduction: number,
    fuelProduction: number,
    capacityPeople: number
}

export default InfrastructureTypeInstance;

interface InfrastructureTypeList {
    [U: string]: InfrastructureTypeInstance
}

export const InfrastructureType: InfrastructureTypeList = {
    none: {
        name: "Пустая клетка",
        backgroundImage: "",
        humanResources: 0,
        maintenanceCosts: 0,
        oilProduction: 0,
        electricityProduction: 0,
        fuelProduction: 0,
        capacityPeople: 0
    },
    goverment: {
        name: "Дом правительства",
        backgroundImage: imagesInfrastructure.goverment,
        humanResources: 10,
        maintenanceCosts: -0.25,
        oilProduction: 0,
        electricityProduction: 0,
        fuelProduction: 0,
        capacityPeople: 0
    },
    oilWachturm: {
        name: "Нефтяная вышка",
        backgroundImage: imagesInfrastructure.oilWachturm,
        humanResources: 3,
        maintenanceCosts: -0.04,
        oilProduction: 1,
        electricityProduction: 0,
        fuelProduction: 0,
        capacityPeople: 0
    },
    oilFactory: {
        name: "Нефтеперерабатывающий завод",
        backgroundImage: imagesInfrastructure.oilFactory,
        humanResources: 7,
        maintenanceCosts: -0.04,
        oilProduction: 0,
        electricityProduction: 0,
        fuelProduction: 3,
        capacityPeople: 0
    },
    shop: {
        name: "Магазин",
        backgroundImage: imagesInfrastructure.shop,
        humanResources: 3,
        maintenanceCosts: 0,
        oilProduction: 0,
        electricityProduction: 0,
        fuelProduction: 0,
        capacityPeople: 0
    },
    farm: {
        name: "Ферма",
        backgroundImage: imagesInfrastructure.farm,
        humanResources: 10,
        maintenanceCosts: 0,
        oilProduction: 0,
        electricityProduction: 0,
        fuelProduction: 0,
        capacityPeople: 0
    },
    powerPlant: {
        name: "ТЭЦ",
        backgroundImage: imagesInfrastructure.powerPlant,
        humanResources: 10,
        maintenanceCosts: 0,
        oilProduction: 0,
        electricityProduction: 3,
        fuelProduction: 0,
        capacityPeople: 0
    },
    home: {
        name: "Жилой дом",
        backgroundImage: imagesInfrastructure.home,
        humanResources: 0,
        maintenanceCosts: 0,
        oilProduction: 0,
        electricityProduction: 0,
        fuelProduction: 0,
        capacityPeople: 50
    }
}
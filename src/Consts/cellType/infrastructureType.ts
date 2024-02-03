import { imagesInfrastructure } from "../../img/imageAssets"

/**
 * Тип инфтраструктуры
 */
interface InfrastructureTypeInstance {
    // Название инфраструктуры
    name: string,
    // Изображение Инфтраструктуры
    backgroundImage: string
}

export default InfrastructureTypeInstance;

interface InfrastructureTypeList {
    [U: string]: InfrastructureTypeInstance
}

export const InfrastructureType: InfrastructureTypeList = {
    none: {
        name: "Пустая клетка",
        backgroundImage: "",
    },
    goverment: {
        name: "Дом правительства",
        backgroundImage: imagesInfrastructure.goverment,
    },
    oilWachturm: {
        name: "Нефтяная вышка",
        backgroundImage: imagesInfrastructure.oilWachturm,
    },
    oilFactory: {
        name: "НПЗ",
        backgroundImage: imagesInfrastructure.oilFactory,
    },
    shop: {
        name: "Магазин",
        backgroundImage: imagesInfrastructure.shop,
    },
    farm: {
        name: "Ферма",
        backgroundImage: imagesInfrastructure.farm,
    },
    powerPlant: {
        name: "ТЭЦ",
        backgroundImage: imagesInfrastructure.powerPlant
    },
    home: {
        name: "Жилой дом",
        backgroundImage: imagesInfrastructure.home,
    }
}
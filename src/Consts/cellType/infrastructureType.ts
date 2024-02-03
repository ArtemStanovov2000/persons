import { imagesInfrastructure } from "../../img/imageAssets"

interface Parameter {
    // Название параметра
    name: string,
    // Значение параметра
    value: number | string
}

interface InfrastructureTypeInstance {
    // Название инфраструктуры
    name: Parameter,
    // Изображение Инфтраструктуры
    backgroundImage: string
}

export default InfrastructureTypeInstance;

interface InfrastructureTypeList {
    [U: string]: InfrastructureTypeInstance
}

export const InfrastructureType: InfrastructureTypeList = {
    none: {
        name: {
            name: "Тип",
            value: "Пусто"
        },
        backgroundImage: "",
    },
    goverment: {
        name: {
            name: "Тип",
            value: "Дом правительства"
        },
        backgroundImage: imagesInfrastructure.goverment,
    },
    oilWachturm: {
        name: {
            name: "Тип",
            value: "Нефтяная вышка"
        },
        backgroundImage: imagesInfrastructure.oilWachturm,
    },
    oilFactory: {
        name: {
            name: "Тип",
            value: "НПЗ"
        },
        backgroundImage: imagesInfrastructure.oilFactory,
    },
    shop: {
        name: {
            name: "Тип",
            value: "Магазин"
        },
        backgroundImage: imagesInfrastructure.shop,
    },
    farm: {
        name: {
            name: "Тип",
            value: "Ферма"
        },
        backgroundImage: imagesInfrastructure.farm,
    },
    powerPlant: {
        name: {
            name: "Тип",
            value: "ТЭЦ"
        },
        backgroundImage: imagesInfrastructure.powerPlant
    },
    home: {
        name: {
            name: "Тип",
            value: "Жилой дом"
        },
        backgroundImage: imagesInfrastructure.home,
    }
}
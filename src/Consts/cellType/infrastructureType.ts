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
    backgroundImage: Parameter
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
        backgroundImage: {
            name: "Изображение",
            value: ""
        },
    },
    goverment: {
        name: {
            name: "Тип",
            value: "Дом правительства"
        },
        backgroundImage: {
            name: "Изображение",
            value: imagesInfrastructure.goverment
        },
    },
    oilWachturm: {
        name: {
            name: "Тип",
            value: "Нефтяная вышка"
        },
        backgroundImage: {
            name: "Изображение",
            value: imagesInfrastructure.oilWachturm,
        },
    },
    oilFactory: {
        name: {
            name: "Тип",
            value: "НПЗ"
        },
        backgroundImage: {
            name: "Изображение",
            value: imagesInfrastructure.oilFactory,
        },
    },
    shop: {
        name: {
            name: "Тип",
            value: "Магазин"
        },
        backgroundImage: {
            name: "Изображение",
            value: imagesInfrastructure.shop,
        },
    },
    farm: {
        name: {
            name: "Тип",
            value: "Ферма"
        },
        backgroundImage: {
            name: "Изображение",
            value: imagesInfrastructure.farm,
        },
    },
    powerPlant: {
        name: {
            name: "Тип",
            value: "ТЭЦ"
        },
        backgroundImage: {
            name: "Изображение",
            value: imagesInfrastructure.powerPlant
        },
    },
    home: {
        name: {
            name: "Тип",
            value: "Жилой дом"
        },
        backgroundImage: {
            name: "Изображение",
            value: imagesInfrastructure.home,
        },
    }
}
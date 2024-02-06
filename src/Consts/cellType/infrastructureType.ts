import { imagesInfrastructure } from "../../img/imageAssets"

interface Parameter {
    // Название параметра
    label: string,
    // Значение параметра
    value: number | string
    // Видимость объекта
    isVisible: boolean
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
            label: "Тип",
            value: "Пусто",
            isVisible: true
        },
        backgroundImage: {
            label: "Изображение",
            value: "",
            isVisible: false
        },
    },
    goverment: {
        name: {
            label: "Тип",
            value: "Дом правительства",
            isVisible: true
        },
        backgroundImage: {
            label: "Изображение",
            value: imagesInfrastructure.goverment,
            isVisible: false
        },
    },
    oilWachturm: {
        name: {
            label: "Тип",
            value: "Нефтяная вышка",
            isVisible: true
        },
        backgroundImage: {
            label: "Изображение",
            value: imagesInfrastructure.oilWachturm,
            isVisible: false
        },
    },
    oilFactory: {
        name: {
            label: "Тип",
            value: "НПЗ",
            isVisible: true
        },
        backgroundImage: {
            label: "Изображение",
            value: imagesInfrastructure.oilFactory,
            isVisible: false
        },
    },
    shop: {
        name: {
            label: "Тип",
            value: "Магазин",
            isVisible: true
        },
        backgroundImage: {
            label: "Изображение",
            value: imagesInfrastructure.shop,
            isVisible: false
        },
    },
    farm: {
        name: {
            label: "Тип",
            value: "Ферма",
            isVisible: true
        },
        backgroundImage: {
            label: "Изображение",
            value: imagesInfrastructure.farm,
            isVisible: false
        },
    },
    powerPlant: {
        name: {
            label: "Тип",
            value: "ТЭЦ",
            isVisible: true
        },
        backgroundImage: {
            label: "Изображение",
            value: imagesInfrastructure.powerPlant,
            isVisible: false
        },
    },
    home: {
        name: {
            label: "Тип",
            value: "Жилой дом",
            isVisible: true
        },
        backgroundImage: {
            label: "Изображение",
            value: imagesInfrastructure.home,
            isVisible: false
        },
    }
}
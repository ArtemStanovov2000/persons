import { imagesTexture } from "../../img/imageAssets"

interface Parameter {
    // Название параметра
    label: string,
    // Значение параметра
    value: number | string
    // Видимость объекта
    isVisible: boolean
}

interface GroundTypeInstance {
    // Название типа поверхности
    name: Parameter,
    // Стоимость разрушения
    destroyCost: Parameter,
    // Изображение поверхности
    backgroundImage: Parameter,
    // Затраты на содержание
    maintenanceCosts: Parameter
}

export default GroundTypeInstance

interface GroundType {
    [U: string]: GroundTypeInstance
}

export const GroundTypeList: GroundType = {
    bush: {
        name: {
            label: "Тип",
            value: "кусты",
            isVisible: true
        },
        destroyCost: {
            label: "Строимость разрушения",
            value: 3,
            isVisible: true
        },
        backgroundImage: {
            label: "Изображение",
            value: imagesTexture.bush,
            isVisible: false
        },
        maintenanceCosts: {
            label: "Госрасходы",
            value: 0,
            isVisible: true
        }
    },
    forest: {
        name: {
            label: "Тип",
            value: "Лес",
            isVisible: true
        },
        destroyCost: {
            label: "Строимость разрушения",
            value: 3,
            isVisible: true
        },
        backgroundImage: {
            label: "Изображение",
            value: imagesTexture.forest,
            isVisible: false
        },
        maintenanceCosts: {
            label: "Госрасходы",
            value: 0,
            isVisible: true
        }
    },
    grass: {
        name: {
            label: "Тип",
            value: "Трава",
            isVisible: true
        },
        destroyCost: {
            label: "Строимость разрушения",
            value: 3,
            isVisible: true
        },
        backgroundImage: {
            label: "Изображение",
            value: imagesTexture.grass,
            isVisible: false
        },
        maintenanceCosts: {
            label: "Госрасходы",
            value: 0,
            isVisible: true
        }
    },
    ground: {
        name: {
            label: "Тип",
            value: "Земля",
            isVisible: true
        },
        destroyCost: {
            label: "Строимость разрушения",
            value: 3,
            isVisible: true
        },
        backgroundImage: {
            label: "Изображение",
            value: imagesTexture.ground,
            isVisible: false
        },
        maintenanceCosts: {
            label: "Госрасходы",
            value: 0.005,
            isVisible: true
        }

    },
    undergrowth: {
        name: {
            label: "Тип",
            value: "кусты",
            isVisible: true
        },
        destroyCost: {
            label: "Строимость разрушения",
            value: 3,
            isVisible: true
        },
        backgroundImage: {
            label: "Изображение",
            value: imagesTexture.undergrowth,
            isVisible: false
        },
        maintenanceCosts: {
            label: "Госрасходы",
            value: 0,
            isVisible: true
        }
    },
    paving: {
        name: {
            label: "Тип",
            value: "Брусчатка",
            isVisible: true
        },
        destroyCost: {
            label: "Строимость разрушения",
            value: 3,
            isVisible: true
        },
        backgroundImage: {
            label: "Изображение",
            value: imagesTexture.paving,
            isVisible: false
        },
        maintenanceCosts: {
            label: "Госрасходы",
            value: 0.02,
            isVisible: true
        }
    },
    asphalt: {
        name: {
            label: "Тип",
            value: "Асфальт",
            isVisible: true
        },
        destroyCost: {
            label: "Строимость разрушения",
            value: 3,
            isVisible: true
        },
        backgroundImage: {
            label: "Изображение",
            value: imagesTexture.asphalt,
            isVisible: false
        },
        maintenanceCosts: {
            label: "Госрасходы",
            value: 0.01,
            isVisible: true
        }
    },
}
import { imagesTexture } from "../../img/imageAssets"

interface Parameter {
    // Название параметра
    label: string,
    // Значение параметра
    value: number | string
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
        },
        destroyCost: {
            label: "Строимость разрушения",
            value: 3,
        },
        backgroundImage: {
            label: "Изображение",
            value: imagesTexture.bush,
        },
        maintenanceCosts: {
            label: "Госрасходы",
            value: 0,
        }
    },
    forest: {
        name: {
            label: "Тип",
            value: "Лес",
        },
        destroyCost: {
            label: "Строимость разрушения",
            value: 3,
        },
        backgroundImage: {
            label: "Изображение",
            value: imagesTexture.forest,
        },
        maintenanceCosts: {
            label: "Госрасходы",
            value: 0,
        }
    },
    grass: {
        name: {
            label: "Тип",
            value: "Трава",
        },
        destroyCost: {
            label: "Строимость разрушения",
            value: 3,
        },
        backgroundImage: {
            label: "Изображение",
            value: imagesTexture.grass,
        },
        maintenanceCosts: {
            label: "Госрасходы",
            value: 0,
        }
    },
    ground: {
        name: {
            label: "Тип",
            value: "Земля",
        },
        destroyCost: {
            label: "Строимость разрушения",
            value: 3,
        },
        backgroundImage: {
            label: "Изображение",
            value: imagesTexture.ground,
        },
        maintenanceCosts: {
            label: "Госрасходы",
            value: 0.005,
        }

    },
    undergrowth: {
        name: {
            label: "Тип",
            value: "кусты",
        },
        destroyCost: {
            label: "Строимость разрушения",
            value: 3,
        },
        backgroundImage: {
            label: "Изображение",
            value: imagesTexture.undergrowth,
        },
        maintenanceCosts: {
            label: "Госрасходы",
            value: 0,
        }
    },
    paving: {
        name: {
            label: "Тип",
            value: "Брусчатка",
        },
        destroyCost: {
            label: "Строимость разрушения",
            value: 3,
        },
        backgroundImage: {
            label: "Изображение",
            value: imagesTexture.paving,
        },
        maintenanceCosts: {
            label: "Госрасходы",
            value: 0.02,
        }
    },
    asphalt: {
        name: {
            label: "Тип",
            value: "Асфальт",
        },
        destroyCost: {
            label: "Строимость разрушения",
            value: 3,
        },
        backgroundImage: {
            label: "Изображение",
            value: imagesTexture.asphalt,
        },
        maintenanceCosts: {
            label: "Госрасходы",
            value: 0.01,
        }
    },
}
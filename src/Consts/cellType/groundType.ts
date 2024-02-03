import { imagesTexture } from "../../img/imageAssets"

interface Parameter {
    // Название параметра
    name: string,
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
            name: "Тип",
            value: "кусты"
        },
        destroyCost: {
            name: "Строимость разрушения",
            value: 3
        },
        backgroundImage: {
            name: "Изображение",
            value: imagesTexture.bush
        },
        maintenanceCosts: {
            name: "Госрасходы",
            value: 0
        }
    },
    forest: {
        name: {
            name: "Тип",
            value: "Лес"
        },
        destroyCost: {
            name: "Строимость разрушения",
            value: 3
        },
        backgroundImage: {
            name: "Изображение",
            value: imagesTexture.forest
        },
        maintenanceCosts: {
            name: "Госрасходы",
            value: 0
        }
    },
    grass: {
        name: {
            name: "Тип",
            value: "Трава"
        },
        destroyCost: {
            name: "Строимость разрушения",
            value: 3
        },
        backgroundImage: {
            name: "Изображение",
            value: imagesTexture.grass
        },
        maintenanceCosts: {
            name: "Госрасходы",
            value: 0
        }
    },
    ground: {
        name: {
            name: "Тип",
            value: "Земля"
        },
        destroyCost: {
            name: "Строимость разрушения",
            value: 3
        },
        backgroundImage: {
            name: "Изображение",
            value: imagesTexture.ground
        },
        maintenanceCosts: {
            name: "Госрасходы",
            value: 0.005
        }

    },
    undergrowth: {
        name: {
            name: "Тип",
            value: "кусты"
        },
        destroyCost: {
            name: "Строимость разрушения",
            value: 3
        },
        backgroundImage: {
            name: "Изображение",
            value: imagesTexture.undergrowth
        },
        maintenanceCosts: {
            name: "Госрасходы",
            value: 0
        }
    },
    paving: {
        name: {
            name: "Тип",
            value: "Брусчатка"
        },
        destroyCost: {
            name: "Строимость разрушения",
            value: 3
        },
        backgroundImage: {
            name: "Изображение",
            value: imagesTexture.paving
        },
        maintenanceCosts: {
            name: "Госрасходы",
            value: 0.02
        }
    },
    asphalt: {
        name: {
            name: "Тип",
            value: "Асфальт"
        },
        destroyCost: {
            name: "Строимость разрушения",
            value: 3
        },
        backgroundImage: {
            name: "Изображение",
            value: imagesTexture.asphalt
        },
        maintenanceCosts: {
            name: "Госрасходы",
            value: 0.01
        }
    },
}
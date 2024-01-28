import { imagesTexture } from "../../img/imageAssets"

interface GroundTypeInstance {
    name: string,
    destroyCost: number,
    backgroundImage: string,
    maintenanceCosts: number
}

export default GroundTypeInstance

interface GroundType {
    [U: string]: GroundTypeInstance
}

export const GroundTypeList: GroundType = {
    bush: {
        name: "кусты",
        destroyCost: 3,
        backgroundImage: imagesTexture.bush,
        maintenanceCosts: 0
    },
    forest: {
        name: "лес",
        destroyCost: 3,
        backgroundImage: imagesTexture.forest,
        maintenanceCosts: 0
    },
    grass: {
        name: "трава",
        destroyCost: 3,
        backgroundImage: imagesTexture.grass,
        maintenanceCosts: 0
    },
    ground: {
        name: "земля",
        destroyCost: 3,
        backgroundImage: imagesTexture.ground,
        maintenanceCosts: -0.005

    },
    undergrowth: {
        name: "подлесок",
        destroyCost: 3,
        backgroundImage: imagesTexture.undergrowth,
        maintenanceCosts: 0
    },
    paving: {
        name: "брусчатка",
        destroyCost: 3,
        backgroundImage: imagesTexture.paving,
        maintenanceCosts: -0.02
    },
    asphalt: {
        name: "асфальт",
        destroyCost: 3,
        backgroundImage: imagesTexture.asphalt,
        maintenanceCosts: -0.01
    },
}
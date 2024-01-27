import { imagesTexture } from "../../img/imageAssets"

interface GroundTypeInstance {
    name: string,
    destroyCost: number,
    backgroundImage: string
}

export default GroundTypeInstance

interface GroundType {
    [U: string]: GroundTypeInstance
}

export const GroundTypeList: GroundType = {
    bush: {
        name: "bush",
        destroyCost: 3,
        backgroundImage: imagesTexture.bush
    },
    forest: {
        name: "forest",
        destroyCost: 3,
        backgroundImage: imagesTexture.forest
    },
    grass: {
        name: "grass",
        destroyCost: 3,
        backgroundImage: imagesTexture.grass
    },
    ground: {
        name: "ground",
        destroyCost: 3,
        backgroundImage: imagesTexture.ground

    },
    undergrowth: {
        name: "undergrowth",
        destroyCost: 3,
        backgroundImage: imagesTexture.undergrowth
    },
    paving: {
        name: "paving",
        destroyCost: 3,
        backgroundImage: imagesTexture.paving
    },
    asphalt: {
        name: "asphalt",
        destroyCost: 3,
        backgroundImage: imagesTexture.asphalt
    },
}
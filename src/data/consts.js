import { imagesTexture, imagesInfrastructure } from "../img/imageAssets"

export const countCellInString = 25
export const countStringInSpace = 15

export const cellTypeList = {
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
        expenses: 3,
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

export const infrastructureType = {
    none: {
        backgroundImage: ""
    },
    goverment: {
        backgroundImage: imagesInfrastructure.goverment
    },
    oilWachturm: {
        backgroundImage: imagesInfrastructure.oilWachturm
    }
}
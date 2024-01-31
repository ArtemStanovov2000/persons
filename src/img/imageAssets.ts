interface Image {
    [U: string]: string
}

export const imagesTexture: Image = {
    bush: require("./bush.png"),
    forest: require("./forest.png"),
    grass: require("./grass.png"),
    ground: require("./ground.png"),
    undergrowth: require("./undergrowth.png"),
    paving: require("./paving.png"),
    asphalt: require("./asphalt.png")
}

export const imagesIcons: Image = {
    coin: require("./coin.png"),
    oil: require("./oil.png"),
    people: require("./people.png"),
    worker: require("./worker.png"),
}

export const imagesInfrastructure: Image = {
    goverment: require("./goverment.png"),
    oilWachturm: require("./oilWachturm.png"),
    oilFactory: require("./oilFactory.png"),
    farm: require("./farm.png"),
    shop: require("./shop.png"),
    powerPlant: require("./powerPlant.png"),
    home: require("./home.png"),
}
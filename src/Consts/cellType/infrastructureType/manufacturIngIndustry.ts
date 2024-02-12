import { imagesInfrastructure } from "../../../img/imageAssets"
import { BaseInfrastructure, Parameter } from "./baseInfrastructure"

type BaseManufacturingIndustry = BaseInfrastructure & {
    // Стоимость содержания
    costMaintenance: Parameter<number>
    level: Parameter<number>
}

export type PowerPlant = BaseManufacturingIndustry & {
    type: {
        label: "Тип",
        value: "Электростанция"
    },
    // Потребляет топлива
    fuelConsumption: Parameter<number>,
    // Производство электричества
    generatesEnergy: Parameter<number>,
}

export type RefineryPlant = BaseManufacturingIndustry & {
    type: {
        label: "Тип",
        value: "Топливозавод"
    },
    // Потребляет нефти
    oilConsumption: Parameter<number>,
    // Производство топлива
    generatesFuel: Parameter<number>
}

export type BlastFurnace = BaseManufacturingIndustry & {
    type: {
        label: "Тип",
        value: "Доменная печь"
    },
    // Потребляет руды
    oreConsumption: Parameter<number>,
    // Потребляет топлива
    fuelConsumption: Parameter<number>,
    // Производит стали
    steelGenerates: Parameter<number>
}

type Manufacturing = {
    [U: string]: PowerPlant | RefineryPlant | BlastFurnace
}

export const ManufacturingType: Manufacturing = {
    powerPlant: {
        id: {
            label: "id",
            value: 0
        },
        type: {
            label: "Тип",
            value: "Электростанция"
        },
        image: {
            label: "Изображение",
            value: imagesInfrastructure.powerPlant,
        },
        countEmployees: {
            label: "Рабочих мест",
            value: 6
        },
        costMaintenance: {
            label: "Стоимость содержания",
            value: 0.2
        },
        energyConsumption: {
            label: "Потребляет энергии",
            value: 1
        },
        fuelConsumption: {
            label: "Потребляет топлива",
            value: 3
        },
        generatesEnergy: {
            label: "Выработка энергии",
            value: 3
        },
        level: {
            label: "Уровень",
            value: 0
        }
    },
    refineryPlant: {
        id: {
            label: "id",
            value: 0
        },
        type: {
            label: "Тип",
            value: "Топливозавод"
        },
        image: {
            label: "Изображение",
            value: imagesInfrastructure.oilFactory,
        },
        countEmployees: {
            label: "Рабочих мест",
            value: 6
        },
        costMaintenance: {
            label: "Стоимость содержания",
            value: 0.2
        },
        energyConsumption: {
            label: "Потребляет энергии",
            value: 1
        },
        level: {
            label: "Уровень",
            value: 0
        },
        oilConsumption: {
            label: "Потребляет нефти",
            value: 2
        },
        generatesFuel: {
            label: "Выработка топлива",
            value: 2
        }
    },
    blastFurnace: {
        id: {
            label: "id",
            value: 0
        },
        type: {
            label: "Тип",
            value: "Доменная печь"
        },
        image: {
            label: "Изображение",
            value: imagesInfrastructure.blastFurnace,
        },
        countEmployees: {
            label: "Рабочих мест",
            value: 6
        },
        costMaintenance: {
            label: "Стоимость содержания",
            value: 0.2
        },
        level: {
            label: "Уровень",
            value: 0
        },
        oreConsumption: {
            label: "Потребляет руды",
            value: 4
        },
        energyConsumption: {
            label: "Потребляет энергии",
            value: 1
        },
        fuelConsumption: {
            label: "Потребляет топлива",
            value: 4
        },
        steelGenerates: {
            label: "Производит стали",
            value: 3
        }
    },
}
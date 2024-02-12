import { imagesInfrastructure } from "../../../img/imageAssets"
import { BaseInfrastructure, Parameter } from "./baseInfrastructure"

type BaseMiningIndustry = BaseInfrastructure & {
    level: Parameter<number>,
    // Стоимость содержания
    costMaintenance: Parameter<number>
}

export type OilRig = BaseMiningIndustry & {
    type: {
        label: "Тип",
        value: "Нефтяная вышка"
    },
    // Производство нефти
    oilProduction: Parameter<number>,
}

export type OreMine = BaseMiningIndustry & {
    type: {
        label: "Тип",
        value: "Шахта руды"
    },
    // Производство руды
    oreProduction: Parameter<number>
}

export type Farm = BaseMiningIndustry & {
    type: {
        label: "Тип",
        value: "Ферма"
    },
    // Производство овощей
    vegetablesProduction: Parameter<number>,
    // отпускна цена
    sellingPrice: Parameter<number>
}

type MiningIndustry = {
    [U: string]: OilRig | OreMine | Farm
}

export const MiningIndustryType: MiningIndustry = {
    oilRig: {
        id: {
            label: "id",
            value: 4
        },
        type: {
            label: "Тип",
            value: "Нефтяная вышка"
        },
        image: {
            label: "Изображение",
            value: imagesInfrastructure.oilWachturm,
        },
        level: {
            label: "Уровень",
            value: 0
        },
        countEmployees: {
            label: "Рабочих мест",
            value: 6
        },
        energyConsumption: {
            label: "Потребляет энергии",
            value: 1
        },
        oilProduction: {
            label: "Скорость добычи",
            value: 0.2
        },
        costMaintenance: {
            label: "Стоимость содержания",
            value: 0.1
        }
    },
    oreMine: {
        id: {
            label: "id",
            value: 4
        },
        type: {
            label: "Тип",
            value: "Шахта руды"
        },
        image: {
            label: "Изображение",
            value: imagesInfrastructure.oreMine,
        },
        level: {
            label: "Уровень",
            value: 0
        },
        energyConsumption: {
            label: "Потребляет энергии",
            value: 1
        },
        countEmployees: {
            label: "Рабочих мест",
            value: 6
        },
        oreProduction: {
            label: "Скорость добычи",
            value: 0.2
        },
        costMaintenance: {
            label: "Стоимость содержания",
            value: 0.1
        }
    },
    farm: {
        id: {
            label: "id",
            value: 4
        },
        type: {
            label: "Тип",
            value: "Ферма"
        },
        image: {
            label: "Изображение",
            value: imagesInfrastructure.farm,
        },
        level: {
            label: "Уровень",
            value: 0
        },
        countEmployees: {
            label: "Рабочих мест",
            value: 6
        },
        energyConsumption: {
            label: "Потребляет энергии",
            value: 1
        },
        vegetablesProduction: {
            label: "Добыча овощей",
            value: 0.2
        },
        costMaintenance: {
            label: "Стоимость содержания",
            value: 0.1
        },
        sellingPrice: {
            label: "Отпускная цена",
            value: 0.1
        }
    }
}
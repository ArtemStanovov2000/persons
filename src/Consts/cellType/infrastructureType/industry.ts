import { imagesInfrastructure } from "../../../img/imageAssets"
import { BaseInfrastructure, Parameter } from "./baseInfrastructure"

type BaseFactory = BaseInfrastructure & {
    // Время производства
    productionTime: Parameter<number>

}

export type TankFactory = BaseFactory & {
    type: {
        label: "Тип",
        value: "Танкозавод"
    },
    // Уровень танка
    tankLevel: Parameter<number>
    // Потребляет стали
    steelConsumption: Parameter<number>,
}

type Industry = {
    [U: string]: TankFactory
}

export const IndustryType: Industry = {
    tankFactory: {
        id: {
            label: "id",
            value: 0
        },
        type: {
            label: "Тип",
            value: "Танкозавод"
        },
        countEmployees: {
            label: "Рабочих мест",
            value: 6
        },
        image: {
            label: "Изображение",
            value: imagesInfrastructure.tankFactory,
        },
        energyConsumption: {
            label: "Потребляет энергии",
            value: 6
        },
        steelConsumption: {
            label: "Потребляет стали",
            value: 6
        },
        productionTime: {
            label: "Время производства",
            value: 6
        },
        tankLevel: {
            label: "Уровень танка",
            value: 2
        }
    }
  }
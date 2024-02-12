import { imagesInfrastructure } from "../../../img/imageAssets"
import { BaseInfrastructure, Parameter } from "./baseInfrastructure"

type BaseBusiness = BaseInfrastructure & {
    // Товары
    goods: Parameter<Array<object>>,
    // Бюджет
    budget: Parameter<number>,
    // Название бизнеса
    nameBusiness: Parameter<string>
}

export type Shop = BaseBusiness & {
    type: {
        label: "Тип",
        value: "Магазин"
    }
}

type Business = {
    [U: string]: Shop
}

export const BusinessType: Business = {
  shop: {
    id: {
        label: "id",
        value: 0
    },
    type: {
        label: "Тип",
        value: "Магазин"
    },
    image: {
        label: "Изображение",
        value: imagesInfrastructure.shop,
    },
    countEmployees: {
        label: "Рабочих мест",
        value: 6
    },
    goods: {
        label: "Товары",
        value: []
    },
    energyConsumption: {
        label: "Потребляет энергии",
        value: 1
    },
    budget: {
        label: "Бюджет",
        value: 20
    },
    nameBusiness: {
        label: "Название сети",
        value: "Семёрочка"
    },
  }
}


import { imagesInfrastructure } from "../../../img/imageAssets"
import { BaseInfrastructure, Parameter } from "./baseInfrastructure"

type BaseFinance = BaseInfrastructure & {
    // Собственный капитал
    equityCapital: Parameter<number>
    // Процентная ставка
    percentRate: Parameter<number>
}

export type Bank = BaseFinance & {
    type: {
        label: "Тип",
        value: "Банк"
    }
}

type Finance = {
    [U: string]: Bank
}

export const FinanceType: Finance = {
    bank: {
        id: {
            label: "id",
            value: 0
        },
        type: {
            label: "Тип",
            value: "Банк"
        },
        image: {
            label: "Изображение",
            value: imagesInfrastructure.bank,
        },
        countEmployees: {
            label: "Рабочих мест",
            value: 6
        },
        energyConsumption: {
            label: "Потребляет энергии",
            value: 1
        },
        equityCapital: {
            label: "Капитал",
            value: 120
        },
        percentRate: {
            label: "Ставка % годовых",
            value: 2
        },
    }
  }
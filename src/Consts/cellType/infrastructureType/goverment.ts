import { imagesInfrastructure } from "../../../img/imageAssets"
import { BaseInfrastructure } from "./baseInfrastructure"

export type Goverment = BaseInfrastructure & {
    type: {
        label: "Тип",
        value: "Правительство"
    }
}

export type None = BaseInfrastructure & {
    type: {
        label: "Тип",
        value: "Пусто"
    }
}

type GovermentsType = {
    [U: string]: Goverment | None
}

export const GovermentType: GovermentsType = {
    goverment: {
        id: {
            label: "id",
            value: 1
        },
        type: {
            label: "Тип",
            value: "Правительство"
        },
        image: {
            label: "Изображение",
            value: imagesInfrastructure.goverment,
        },
        countEmployees: {
            label: "Рабочих мест",
            value: 6
        },
        energyConsumption: {
            label: "Потребляет энергии",
            value: 1
        }
    },
    none: {
        id: {
            label: "id",
            value: 0
        },
        type: {
            label: "Тип",
            value: "Пусто"
        },
        image: {
            label: "Изображение",
            value: "",
        },
        countEmployees: {
            label: "Рабочих мест",
            value: 0
        },
        energyConsumption: {
            label: "Потребляет энергии",
            value: 0
        }
    }
}

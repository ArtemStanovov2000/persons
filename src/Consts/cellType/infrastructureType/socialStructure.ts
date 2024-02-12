import { imagesInfrastructure } from "../../../img/imageAssets"
import { BaseInfrastructure, Parameter } from "./baseInfrastructure"

type BaseSocialStructure = BaseInfrastructure & {
    // Вместимость
    capacity: Parameter<number>
    level: Parameter<number>
    // Стоимость содержания
    costMaintenance: Parameter<number>
}

export type Hospital = BaseSocialStructure & {
    type: {
        label: "Тип",
        value: "Больница"
    },
    upHealth: Parameter<number>
}

export type Home = BaseSocialStructure & {
    type: {
        label: "Тип",
        value: "Жилой дом"
    },
}

export type School = BaseSocialStructure & {
    type: {
        label: "Тип",
        value: "Школа"
    },
    upQualification: Parameter<number>
}

export type MilitaryUnit = BaseSocialStructure & {
    type: {
        label: "Тип",
        value: "Военная часть"
    },
    // Вооружение
    armament: Parameter<Array<object>>
}

export type PoliceDepartment = BaseSocialStructure & {
    type: {
        label: "Тип",
        value: "Отдел полиции"
    },
}

export type Prison = BaseSocialStructure & {
    type: {
        label: "Тип",
        value: "Тюрьма"
    },
    // Вероятность побега
    probabilityEscape: Parameter<number>
}

type SocialStructure = {
    [U: string]: Hospital | Home | School | MilitaryUnit | PoliceDepartment | Prison
}

export const SocialStructureType: SocialStructure = {
    hospital: {
        id: {
            label: "id",
            value: 0
        },
        type: {
            label: "Тип",
            value: "Больница"
        },
        image: {
            label: "Изображение",
            value: imagesInfrastructure.hospital,
        },
        countEmployees: {
            label: "Рабочих мест",
            value: 6
        },
        energyConsumption: {
            label: "Потребляет энергии",
            value: 2
        },
        capacity: {
            label: "Вместимость",
            value: 40
        },
        level: {
            label: "Уровень",
            value: 0
        },
        costMaintenance: {
            label: "Стоимость содержания",
            value: 0.2
        },
        upHealth: {
            label: "Возвращает здроровья",
            value: 0.1
        }
    },
    home: {
        id: {
            label: "id",
            value: 0
        },
        type: {
            label: "Тип",
            value: "Жилой дом"
        },
        image: {
            label: "Изображение",
            value: imagesInfrastructure.home,
        },
        countEmployees: {
            label: "Рабочих мест",
            value: 3
        },
        energyConsumption: {
            label: "Потребляет энергии",
            value: 2
        },
        capacity: {
            label: "Вместимость",
            value: 50
        },
        level: {
            label: "Уровень",
            value: 0
        },
        costMaintenance: {
            label: "Стоимость содержания",
            value: 0.2
        }
    },
    school: {
        id: {
            label: "id",
            value: 0
        },
        type: {
            label: "Тип",
            value: "Школа"
        },
        image: {
            label: "Изображение",
            value: imagesInfrastructure.school,
        },
        countEmployees: {
            label: "Рабочих мест",
            value: 10
        },
        energyConsumption: {
            label: "Потребляет энергии",
            value: 2
        },
        capacity: {
            label: "Вместимость",
            value: 50
        },
        level: {
            label: "Уровень",
            value: 0
        },
        costMaintenance: {
            label: "Стоимость содержания",
            value: 0.2
        },
        upQualification: {
            label: "Рост Квалификации",
            value: 0.02
        },
    },
    militaryUnit: {
        id: {
            label: "id",
            value: 0
        },
        type: {
            label: "Тип",
            value: "Военная часть"
        },
        image: {
            label: "Изображение",
            value: imagesInfrastructure.militaryUnit,
        },
        countEmployees: {
            label: "Рабочих мест",
            value: 0
        },
        energyConsumption: {
            label: "Потребляет энергии",
            value: 2
        },
        capacity: {
            label: "Вместимость",
            value: 50
        },
        level: {
            label: "Уровень",
            value: 0
        },
        costMaintenance: {
            label: "Стоимость содержания",
            value: 0.2
        },
        armament: {
            label: "Вооружение",
            value: []
        }
    },
    policeDepartment: {
        id: {
            label: "id",
            value: 0
        },
        type: {
            label: "Тип",
            value: "Отдел полиции"
        },
        image: {
            label: "Изображение",
            value: imagesInfrastructure.policeDepartment,
        },
        countEmployees: {
            label: "Рабочих мест",
            value: 9
        },
        energyConsumption: {
            label: "Потребляет энергии",
            value: 2
        },
        capacity: {
            label: "Вместимость",
            value: 0
        },
        level: {
            label: "Уровень",
            value: 0
        },
        costMaintenance: {
            label: "Стоимость содержания",
            value: 0.2
        }
    },
    prison: {
        id: {
            label: "id",
            value: 0
        },
        type: {
            label: "Тип",
            value: "Тюрьма"
        },
        image: {
            label: "Изображение",
            value: imagesInfrastructure.prison,
        },
        countEmployees: {
            label: "Рабочих мест",
            value: 9
        },
        energyConsumption: {
            label: "Потребляет энергии",
            value: 2
        },
        capacity: {
            label: "Вместимость",
            value: 20
        },
        level: {
            label: "Уровень",
            value: 0
        },
        costMaintenance: {
            label: "Стоимость содержания",
            value: 0.2
        },
        probabilityEscape: {
            label: "Вероятность побега",
            value: 0.0002
        }
    },
}
import { Shop } from "./business"
import { Bank } from "./finance"
import { Goverment, None } from "./goverment"
import { TankFactory } from "./industry"
import { PowerPlant, BlastFurnace, RefineryPlant } from "./manufacturIngIndustry"
import { OilRig, OreMine, Farm } from "./miningIndustry"
import { Hospital, Home, School, MilitaryUnit, PoliceDepartment, Prison } from "./socialStructure"

export type Parameter<T> = {
    // Название параметра
    label: string,
    // Значение параметра
    value: T
}

export type BaseInfrastructure = {
    id: Parameter<number>,
    type: Parameter<string>,
    image: Parameter<string>
    // Количество рабочих мест
    countEmployees: Parameter<number>
    // Потребляет энергии
    energyConsumption: Parameter<number>,
}

export type InfrastructureTypeInstance = Shop | Bank | Goverment | None | TankFactory |
PowerPlant | BlastFurnace | RefineryPlant | OilRig | OreMine | Farm | Hospital | Home | School | MilitaryUnit | PoliceDepartment | Prison
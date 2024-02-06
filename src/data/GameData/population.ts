import { peopleParameters } from "../../Consts/govermentParameters"

const createRandomAge = (): number => {
    const age = Number((peopleParameters.maxAge * Math.random()).toFixed(0))
    return age
}

const createRandomBudget = (): number => {
    const budget = Number((peopleParameters.maxBudget * Math.random()).toFixed(2))
    return budget
}

const createRandomSkill = (): number => {
    const skill = Number((peopleParameters.maxSkill * Math.random()).toFixed(0))
    return skill
}

const population = []

for (let i = 0; i < peopleParameters.populationSize; i++) {
    const people = {
        age: createRandomAge(),
        budget: createRandomBudget(),
        index: i,
        skill: createRandomSkill()
    }

    population.push(people)
}

export const countWorkerPeoples = (): number => {
    let workerPeoples = 0
    for (let i = 0; i < peopleParameters.populationSize; i++) {
        if (population[i].age >= peopleParameters.minWorkAge && population[i].age <= peopleParameters.maxWorkAge) {
            workerPeoples += 1
        }
    }
    return workerPeoples
}

export const countChildrens = (): number => {
    let childrens = 0
    for (let i = 0; i < peopleParameters.populationSize; i++) {
        if (population[i].age < peopleParameters.minWorkAge) {
            childrens += 1
        }
    }
    return childrens
}

export const countPensioners = (): number => {
    let pensioners = 0
    for (let i = 0; i < peopleParameters.populationSize; i++) {
        if (population[i].age > peopleParameters.maxWorkAge) {
            pensioners += 1
        }
    }
    return pensioners
}

export default population

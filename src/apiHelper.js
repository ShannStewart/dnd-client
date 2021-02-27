
export const findRace = (races=[], raceId) =>
races.find(race => race.id === raceId)

export const findJob = (jobs=[], jobId) =>
jobs.find(job => job.id === jobId)

export const findBonus = (abilities=[], abilityName) =>
abilities.find(ability => ability.name === abilityName)
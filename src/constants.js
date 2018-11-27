// Baseball can have more than 9 innings, and other sports can have
// overtime
const BASEBALL_LEAGUES = ["MLB"]
const FOOTBALL_LEAGUES = ["NFL"]
const HOCKEY_LEAGUES = ["NHL"]
const BASKETBALL_LEAGUES = ["NBA"]

export const getSportByAbbreviation = (abbr) => {
    return {
        [BASEBALL_LEAGUES.includes(abbr)]: "baseball",
        [FOOTBALL_LEAGUES.includes(abbr)]: "football",
        [HOCKEY_LEAGUES.includes(abbr)]: "hockey",
        [BASKETBALL_LEAGUES.includes(abbr)]: "basketball"
    }.true
}

export const minNumPeriodsPerSport = {
    "baseball": 9,
    "football": 4,
    "hockey": 3,
    "basketball": 4
}

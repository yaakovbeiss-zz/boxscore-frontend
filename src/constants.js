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

// TODO: Use library for this
export const periodNames = {
    "1": "1ST",
    "2": "2ND",
    "3": "3RD",
    "4": "4TH",
    "5": "5TH",
    "6": "6TH",
    "7": "7TH",
    "8": "8TH",
    "9": "9TH",
    "10": "10TH",
    "11": "11TH",
    "12": "12TH",
    "13": "13TH"
}

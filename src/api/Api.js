import config from '../config'

const baseUrl = config.backendUrl

const fetcher = async function(url) {
    try {
        const response = await fetch(url)
        const json = await response.json()
        return json
    } catch (err) {
        console.log("Error while fetching data: ", err)
    }
}

export const fetchGameBoxscore = (game) => fetcher(`${baseUrl}/${game}`)

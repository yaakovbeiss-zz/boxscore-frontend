import React from 'react'
import PropTypes from 'prop-types'
import { minNumPeriodsPerSport, getSportByAbbreviation } from '../constants'

import * as Api from '../api/Api'

import ScoreDetails from './ScoreDetails'
import TeamsAndPeriod from './TeamsAndPeriod'

class Boxscore extends React.Component {
    static propTypes = {
        gameId: PropTypes.string.isRequired,
    }

    state = {
        boxscore: null
    }

    componentWillMount() {
        this.fetchGameBoxscore(this.props.gameId)

        // check for new feed every 5 seconds
        this.timer = setInterval(() => this.fetchGameBoxscore(this.props.gameId), 5000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    componentDidUpdate(prevProps) {
        const { gameId: prevGameId } = prevProps
        const { gameId: currGameId } = this.props
        if (prevGameId !== currGameId) {
            this.fetchGameBoxscore(currGameId)
        }
    }

    fetchGameBoxscore = (gameId) => {
        Api.fetchGameBoxscore(gameId)
            .then( boxscore => {
                this.setState({ boxscore })
            })
    }

    render() {
        const { boxscore } = this.state
        if (!boxscore) { return null }

        // should provide as many static details about sport as possible

        const leagueAbbr = boxscore.league.alias
        const sport = getSportByAbbreviation(leagueAbbr)
        const minPeriods = minNumPeriodsPerSport[sport]
        const awayTeamAbbreviation = boxscore.awayTeam.abbr
        const homeTeamAbbreviation = boxscore.homeTeam.abbr
        const { awayTeamDetails: awayTeamScoreDetails,
                homeTeamDetails: homeTeamScoreDetails,
                awayTeam: awayTeamDetails,
                homeTeam: homeTeamDetails,
                currentPeriod,
                currentPeriodHalf,
                status } = boxscore

        return (
            <div className="boxscore">
                <ScoreDetails
                    minPeriods={minPeriods}
                    sport={sport}
                    awayTeamAbbreviation={awayTeamAbbreviation}
                    homeTeamAbbreviation={homeTeamAbbreviation}
                    awayTeamScoreDetails={awayTeamScoreDetails}
                    homeTeamScoreDetails={homeTeamScoreDetails}
                />
              <TeamsAndPeriod
                    status={status}
                    sport={sport}
                    currentPeriod={currentPeriod}
                    currentPeriodHalf={currentPeriodHalf}
                    awayTeamDetails={awayTeamDetails}
                    homeTeamDetails={homeTeamDetails}
              />
            </div>
        )
    }
}

export default Boxscore

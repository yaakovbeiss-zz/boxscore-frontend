import React from 'react'
import PropTypes from 'prop-types'
import { minNumPeriodsPerSport, getSportByAbbreviation } from '../constants'

import * as Api from '../api/Api'

import ScoreDetails from './ScoreDetails'
import TeamDetails from './TeamDetails'

class Boxscore extends React.Component {
    static propTypes = {
        gameId: PropTypes.string.isRequired,
    }

    state = {
        boxscore: null
    }

    componentWillMount() {
        Api.fetchGameBoxscore(this.props.gameId)
            .then( boxscore => {
                console.log(boxscore)
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
              <TeamDetails
                    status={status}
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

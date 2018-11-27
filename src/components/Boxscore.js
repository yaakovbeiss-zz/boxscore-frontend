import React from 'react'
import PropTypes from 'prop-types'
import { minNumPeriodsPerSport, getSportByAbbreviation } from '../constants'

import * as Api from '../api/Api'

import ScoreDetails from './ScoreDetails'

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
        const { awayTeamDetails, homeTeamDetails } = boxscore

        return (
            <div className="boxscore">
                <ScoreDetails
                    minPeriods={minPeriods}
                    sport={sport}
                    awayTeamAbbreviation={awayTeamAbbreviation}
                    homeTeamAbbreviation={homeTeamAbbreviation}
                    awayTeamDetails={awayTeamDetails}
                    homeTeamDetails={homeTeamDetails}
                />
            </div>
        )
    }
}

export default Boxscore

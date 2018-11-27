import React from 'react'
import PropTypes from 'prop-types'

import PeriodDetails from './PeriodDetails'
import FinalScoreDetails from './FinalScoreDetails'

class ScoreDetails extends React.Component {
    static propTypes = {
        sport: PropTypes.string.isRequired,
        minPeriods: PropTypes.number.isRequired,
        awayTeamAbbreviation: PropTypes.string.isRequired,
        homeTeamAbbreviation: PropTypes.string.isRequired,
        awayTeamDetails: PropTypes.array.isRequired,
        homeTeamDetails: PropTypes.array.isRequired
    }

    // get number of game periods. Game may have gone longer than min,
    // like overtime or extra innings in baseball
    getNumPeriods = () => Math.max(this.props.awayTeamDetails.length, this.props.homeTeamDetails.length, this.props.minPeriods)

    getPeriodDetails = (period, allDetails) => {
        return allDetails.find( detail => (detail.number === period) || (detail.sequence === period) )
    }

    renderPeriodDetails = (period) => {
        const { awayTeamDetails, homeTeamDetails, sport } = this.props
        const awayTeamPeriodDetails = this.getPeriodDetails(period, awayTeamDetails)
        const homeTeamPeriodDetails = this.getPeriodDetails(period, homeTeamDetails)

        return (<PeriodDetails
                    key={period}
                    sport={sport}
                    period={period}
                    awayTeamPeriodDetails={awayTeamPeriodDetails}
                    homeTeamPeriodDetails={homeTeamPeriodDetails}
                />)
    }

    render() {
        const numPeriods = this.getNumPeriods()

        return (
            <div className="row">
                <div className="col team-abbreviations">
                    <div className="box grey-background score-box border-bottom">&nbsp;</div>
                    <div className="box grey-background">{this.props.awayTeamAbbreviation}</div>
                    <div className="box grey-background">{this.props.homeTeamAbbreviation}</div>
                </div>
                <div className="row period-scores">
                    {
                      [...Array(numPeriods).keys()].map(period => (
                          // arrays start at 0 so need to + 1
                          this.renderPeriodDetails(period + 1)
                      ))
                    }
                </div>
                <div className="row final-scores">
                    <FinalScoreDetails
                          sport={this.props.sport}
                          awayTeamDetails={this.props.awayTeamDetails}
                          homeTeamDetails={this.props.homeTeamDetails}
                    />
                </div>
            </div>
        )
    }
}

export default ScoreDetails

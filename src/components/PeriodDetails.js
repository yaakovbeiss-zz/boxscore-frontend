import React from 'react'
import PropTypes from 'prop-types'

class PeriodDetails extends React.Component {
    static propTypes = {
        period: PropTypes.number.isRequired,
        sport: PropTypes.string.isRequired,
        awayTeamPeriodDetails: PropTypes.object.isRequired,
        homeTeamPeriodDetails: PropTypes.object.isRequired
    }

    static defaultProps = {
        // possibly initiate with empty data for periods not played yet
        awayTeamPeriodDetails: {},
        homeTeamPeriodDetails: {}
    }

    render() {
        const { period, awayTeamPeriodDetails, homeTeamPeriodDetails } = this.props
        return (
            <div className="col">
                <div className="box score-box border-bottom">{period}</div>
                <div className="box score-box">{awayTeamPeriodDetails.runs}</div>
                <div className="box score-box">{homeTeamPeriodDetails.runs}</div>
            </div>
        )
    }
}

export default PeriodDetails

import React from 'react'
import PropTypes from 'prop-types'

import TeamBox from './TeamBox'
import CurrentPeriod from './CurrentPeriod'

class TeamsAndPeriod extends React.Component {
    static propTypes = {
        sport: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        awayTeamDetails: PropTypes.object.isRequired,
        homeTeamDetails: PropTypes.object.isRequired,
        currentPeriod: PropTypes.number.isRequired,
        currentPeriodHalf: PropTypes.string,
    }

    render() {
        return (
            <div className="teams-and-period row space-between">
                <TeamBox teamDetails={this.props.awayTeamDetails} />

                <CurrentPeriod
                    status={this.props.status}
                    sport={this.props.sport}
                    currentPeriod={this.props.currentPeriod}
                    currentPeriodHalf={this.props.currentPeriodHalf}
                />

                <TeamBox teamDetails={this.props.homeTeamDetails} />
            </div>
        )
    }
}

export default TeamsAndPeriod

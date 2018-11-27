import React from 'react'
import PropTypes from 'prop-types'

class TeamDetails extends React.Component {
    static propTypes = {
        status: PropTypes.string.isRequired,
        awayTeamDetails: PropTypes.object.isRequired,
        homeTeamDetails: PropTypes.object.isRequired,
        currentPeriod: PropTypes.string.number,
        currentPeriodHalf: PropTypes.string,
    }

    renderTeam = (teamDetails) => {
        const { teamColor, textColor, name } = teamDetails
        const style = {backgroundColor: `#${teamColor}`, color: `#${textColor}`}

        return (
            <div className="team-box" style={style}>
                {name}
            </div>
        )
    }

    render() {
        return (
            <div className="row space-between">
                { this.renderTeam(this.props.awayTeamDetails) }
                <div>{ this.props.currentPeriod }</div>
                { this.renderTeam(this.props.homeTeamDetails) }
            </div>
        )
    }
}

export default TeamDetails

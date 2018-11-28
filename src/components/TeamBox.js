import React from 'react'
import PropTypes from 'prop-types'

class TeamBox extends React.Component {
    static propTypes = {
        teamDetails: PropTypes.object.isRequired,
    }

    render() {
        const { teamColor, textColor, name } = this.props.teamDetails
        const style = {backgroundColor: `#${teamColor}`, color: `#${textColor}`}

        return (
            <div className="team-box" style={style}>
                {name}
            </div>
        )
    }
}

export default TeamBox

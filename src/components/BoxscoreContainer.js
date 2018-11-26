import React from 'react'
import PropTypes from 'prop-types'

import * as Api from '../api/Api'

class BoxscoreContainer extends React.Component {
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

        return (
            <div>

            </div>
        )
    }
}

export default BoxscoreContainer

import React from 'react'
import PropTypes from 'prop-types'

import { periodNames } from '../constants'

class CurrentPeriod extends React.Component {
    static propTypes = {
        sport: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        currentPeriod: PropTypes.number.isRequired,
        currentPeriodHalf: PropTypes.string,
    }

    renderPeriod = () => {
        const { status, sport, currentPeriod, currentPeriodHalf } = this.props
        const periodName = periodNames[currentPeriod]
        if (status === "CLOSED") {
            return "FINAL"
        }

        if (status === "PREGAME") {
            return "PREGAME"
        }

        if (sport === "basketball" || sport === "football") {
            return (
                <div>
                    <div>{periodName}</div>
                    <div>QTR</div>
                </div>
            )
        }

        if (sport === "hockey") {
            return (
                <div>
                    <div>{periodName}</div>
                    <div>Period</div>
                </div>
            )
        }

        if (sport === "baseball") {
            const topOrBottom = currentPeriodHalf === 'B' ? "BTM" : "TOP"
            return (
                <div>
                    <div>{topOrBottom}</div>
                    <div>{periodName}</div>
                </div>
            )
        }

    }

    render() {
        return (
            <div className="current-period grey-background bold">
                { this.renderPeriod() }

            </div>
        )
    }
}

export default CurrentPeriod

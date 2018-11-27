import React from 'react'
import PropTypes from 'prop-types'

class FinalScoreDetails extends React.Component {
    static propTypes = {
        sport: PropTypes.string.isRequired,
        awayTeamScoreDetails: PropTypes.array.isRequired,
        homeTeamScoreDetails: PropTypes.array.isRequired
    }

    getTotalScoreForTeam = (teamDetails) => {

    }

    accumStats = (el) => {

    }

    getRunsHitsErrorsForTeam = (teamDetails) => {
        const runs = teamDetails.reduce((acc, val) => (acc + val.runs), 0)
        const hits = teamDetails.reduce((acc, val) => (acc + val.hits), 0)
        const errors = teamDetails.reduce((acc, val) => (acc + val.errors), 0)

        return [runs, hits, errors]
    }

    render() {
        const { awayTeamScoreDetails, homeTeamScoreDetails, sport } = this.props
        // only baseball displays score differently
        if (sport === "baseball") {
            const awayTeamStats = this.getRunsHitsErrorsForTeam(awayTeamScoreDetails)
            const homeTeamStats = this.getRunsHitsErrorsForTeam(homeTeamScoreDetails)

            return (
                <div className="row">
                    <div>
                        <div className="box grey-background bold border-bottom">R</div>
                        <div className="box grey-background bold">{awayTeamStats[0]}</div>
                        <div className="box grey-background bold">{homeTeamStats[0]}</div>
                    </div>
                    <div>
                        <div className="box grey-background bold border-bottom">H</div>
                        <div className="box grey-background bold">{awayTeamStats[1]}</div>
                        <div className="box grey-background bold">{homeTeamStats[1]}</div>
                    </div>
                    <div>
                        <div className="box grey-background bold border-bottom">E</div>
                        <div className="box grey-background bold">{awayTeamStats[2]}</div>
                        <div className="box grey-background bold">{homeTeamStats[2]}</div>
                    </div>
                </div>
            )
        }

        return (
            <div>
                <div className="box">Total</div>
                <div className="box">{this.getTotalScoreForTeam(awayTeamScoreDetails)}</div>
                <div className="box">{this.getTotalScoreForTeam(homeTeamScoreDetails)}</div>
            </div>
        )
    }
}

export default FinalScoreDetails

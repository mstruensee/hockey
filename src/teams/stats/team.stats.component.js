import React, { Fragment } from "react"
import "./team.stats.scss"

export const TeamStatsComponent = ({ team = {} }) => {
	const {
		id,
		name,
		teamStats: [ { splits: [ { stat = {} } = {} ] = [] } = {} ] = [],
		conference: { name: conferenceName } = {},
		division: { name: divisionName } = {},
	} = team

	const {
		gamesPlayed,
		wins,
		losses,
		ot,
		pts,
		powerPlayGoals,
		powerPlayPercentage,
		powerPlayGoalsAgainst,
		powerPlayOpportunities,
	} = stat

	return (
		<Fragment>
			<div className="stats-container">
				<div className="stats">
					<div className="logo">
						<img
							src={ `http://www-league.nhlstatic.com/nhl.com/builds/site-core/d1b262bacd4892b22a38e8708cdb10c8327ff73e_1579810224/images/logos/team/current/team-${ id }-light.svg` }
							alt={ "Logo" }
						/>
					</div>
					<div className="info">
						<h2>{ name }</h2>
						<div className={ "details" }>
							<div>
								<h6>Conference: { conferenceName }</h6>
								<h6>Division: { divisionName }</h6>
							</div>
							<div>
								<h6>Games Played: { gamesPlayed }</h6>
								<h6>Wins: { wins }</h6>
								<h6>Losses: { losses }</h6>
								<h6>OT: { ot }</h6>
								<h6>Points: { pts }</h6>
							</div>
							<div>
								<h6>Power Plays</h6>
								<h6>Goals: { powerPlayGoals }</h6>
								<h6>Percentage: { powerPlayPercentage }</h6>
								<h6>Goals Against: { powerPlayGoalsAgainst }</h6>
								<h6>Opportunities: { powerPlayOpportunities }</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}
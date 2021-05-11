import React, { Fragment } from "react"
import "./team.stats.scss"

export const TeamStatsComponent = ({ team = {} }) => {
	const {
		abbreviation,
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
			<div className={ "stats-container" }>
				<div className={ "stats" }>
					<div className={ `logo ${ abbreviation }` }>
						<img
							src={ `http://www-league.nhlstatic.com/nhl.com/builds/site-core/d1b262bacd4892b22a38e8708cdb10c8327ff73e_1579810224/images/logos/team/current/team-${ id }-light.svg` }
							alt={ "Logo" }
						/>
					</div>
					<div className={ "info" }>
						<h2 data-cy={ "team name" }>{ name }</h2>
						<div className={ "details" }>
							<div>
								<h6 data-cy={ "conference" }>Conference: { conferenceName }</h6>
								<h6 data-cy={ "division" }>Division: { divisionName }</h6>
							</div>
							<div>
								<h6 data-cy={ "games played" }>Games Played: { gamesPlayed }</h6>
								<h6 data-cy={ "wins" }>Wins: { wins }</h6>
								<h6 data-cy={ "losses" }>Losses: { losses }</h6>
								<h6 data-cy={ "ot" }>OT: { ot }</h6>
								<h6 data-cy={ "points" }>Points: { pts }</h6>
							</div>
							<div>
								<h6>Power Plays</h6>
								<h6 data-cy={ "goals" }>Goals: { powerPlayGoals }</h6>
								<h6 data-cy={ "percentage" }>Percentage: { powerPlayPercentage }</h6>
								<h6 data-cy={ "goals against" }>Goals Against: { powerPlayGoalsAgainst }</h6>
								<h6 data-cy={ "opportunities" }>Opportunities: { powerPlayOpportunities }</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}
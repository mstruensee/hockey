import React, { useMemo } from "react"
import { useDispatch } from "react-redux"
import { goToTeamProfilePageAction } from "./profile/team.profile.actions"
import "./teams.card.scss"

export const TeamsCardComponent = ({ team }) => {
	const {
		abbreviation,
		name,
		officialSiteUrl,
		teamName,
	} = team
	const dispatch = useDispatch()
	const onClick = () => dispatch(goToTeamProfilePageAction(teamName))

	return useMemo(
		() => (
			<article
				className={ "team-card" }
				data-cy={ name }
			>
				<span className={ "title" }> { name }</span>
				<figure
					className={ `thumbnail ${ abbreviation }` }
					onClick={ onClick }
				>
					<img
						src={ `http://www-league.nhlstatic.com/nhl.com/builds/site-core/d1b262bacd4892b22a38e8708cdb10c8327ff73e_1579810224/images/logos/team/current/team-${ team.id }-light.svg` }
						alt={ "Logo" }
					/>
				</figure>
				<main className={ "website" }>
					<a
						href={ officialSiteUrl }
						target={ "_blank" }
					>
						Official Website
					</a>
				</main>
			</article>
		),
		[ teamName ]
	)
}

import React, {
	useEffect,
	useMemo,
	Fragment,
} from "react"
import {
	useDispatch,
	useSelector
} from "react-redux"
import { useParams } from "react-router-dom"
import { goToTeamRosterPageAction } from "../../roster/team.roster.actions"
import { teamByTeamNameSelector } from "../teams.selectors"
import { fetchTeamProfileAction } from "./team.profile.actions"

export const TeamProfileComponent = () => {
	const dispatch = useDispatch()
	const { teamName } = useParams()
	const team = useSelector(state => teamByTeamNameSelector(state, { teamName }))

	const onClick = () => dispatch(goToTeamRosterPageAction(teamName))

	useEffect(
		() => {
			if (!team) {
				dispatch(fetchTeamProfileAction(teamName))
			}
		},
		[ team?.id ]
	)
	//todo handle loading
	return useMemo(() => (
			team ? (
				<Fragment>
					<div>TODO</div>
					<ul>
						<li>
							<img
								style={ { height: "25px", width: "25px" } }
								//todo make relative?
								src={ `http://www-league.nhlstatic.com/nhl.com/builds/site-core/d1b262bacd4892b22a38e8708cdb10c8327ff73e_1579810224/images/logos/team/current/team-${ team.id }-light.svg` }
								alt={ "Logo" }
							/>
							{ team.name }
						</li>
						<li>Conference: { team.conference.name }</li>
						<li>Division: { team.division.name }</li>
						<li onClick={ onClick }>View Roster</li>
					</ul>
				</Fragment>
			) : null
		),
		[ team?.id ]
	)
}
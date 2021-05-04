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
import { goToPlayerProfilePageAction } from "../player/profile/player.profile.actions"
import { rosterByTeamNameSelector } from "../teams/teams.selectors"
import { fetchTeamRosterAction } from "./team.roster.actions"

export const TeamRosterComponent = () => {
	const dispatch = useDispatch()
	const { teamName } = useParams()

	const roster = useSelector(state => rosterByTeamNameSelector(state, { teamName }))

	const onClick = id => dispatch(goToPlayerProfilePageAction(id))

	useEffect(
		() => {
			if (!roster) {
				dispatch(fetchTeamRosterAction(teamName))
			}
		},
		[ roster ]
	)

	return useMemo(() => (
			roster ? (
				<Fragment>
					<ul>
						{
							roster.map(player => (
								<li
									key={ player.person.id }
									onClick={ () => onClick(player.person.id) }
								>
									{ player.person.fullName }
								</li>
							))
						}
					</ul>
				</Fragment>
			) : null
		),
		[ roster ]
	)
}
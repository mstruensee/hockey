import React, {
	useEffect,
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
import "./team.roster.scss"

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
		[]
	)

	return (
		roster ? (
			<Fragment>
				<table className={ "roster-table" }>
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Position</th>
						</tr>
					</thead>
					<tbody>
						{
							roster.map(player => (
								<tr
									key={ player.person.id }
									onClick={ () => onClick(player.person.id) }
								>
									<td>{ player.jerseyNumber }</td>
									<td>{ player.person.fullName }</td>
									<td>{ player.position.name }</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</Fragment>
		) : null
	)
}
import React, {
	useEffect,
	useState,
	Fragment,
} from "react"
import {
	useDispatch,
	useSelector
} from "react-redux"
import { useParams } from "react-router-dom"
import { ModalComponent } from "../player/modal/modal.component"
import { rosterByTeamNameSelector } from "../teams/teams.selectors"
import { fetchTeamRosterAction } from "./team.roster.actions"
import "./team.roster.scss"

const initialState = {
	player: null,
	isOpen: false
}

export const TeamRosterComponent = () => {
	const dispatch = useDispatch()
	const { teamName } = useParams()

	const [ { isOpen = false, player }, setState ] = useState(initialState)
	const closeModal = () => setState(initialState)

	const roster = useSelector(state => rosterByTeamNameSelector(state, { teamName }))

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
				{ isOpen && (
					<ModalComponent
						onCloseHandler={ closeModal }
						player={ player }
					/>
				) }
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
									onClick={
										() => setState({
											isOpen: true,
											player
										})
									}
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
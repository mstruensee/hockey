import React, {
	useState,
	Fragment,
} from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { ModalComponent } from "../player/modal/modal.component"
import { rosterByTeamNameSelector } from "../teams/teams.selectors"
import "./team.roster.scss"

const initialState = {
	player: null,
	isOpen: false
}

export const TeamRosterComponent = () => {
	// const dispatch = useDispatch()
	const { teamName } = useParams()

	const [ { isOpen = false, player }, setState ] = useState(initialState)
	const closeModal = () => setState(initialState)

	const roster = useSelector(state => rosterByTeamNameSelector(state, { teamName }))

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
							<th>Player Info</th>
						</tr>
					</thead>
					<tbody data-cy={ "team-roster" }>
						{
							roster.map(player => (
								<tr key={ player.person.id }>
									<td>{ player.jerseyNumber }</td>
									<td>{ player.person.fullName }</td>
									<td>{ player.position.name }</td>
									<td
										onClick={
											() => setState({
												isOpen: true,
												player
											})
										}
										className={ "view-player-info" }
										data-cy={ "view-player-info" }
									>
										View
									</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</Fragment>
		) : null
	)
}
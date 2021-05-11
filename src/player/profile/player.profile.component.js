import React, {
	useEffect,
	Fragment,
} from "react"
import {
	useDispatch,
	useSelector,
} from "react-redux"
import { useParams } from "react-router-dom"
import { teamAbbreviationByTeamNameSelector } from "../../teams/teams.selectors"
import { fetchPlayerProfileAction } from "./player.profile.actions"
import { playerSelector } from "./player.profile.selectors"
import "./player.profile.scss"

export const PlayerProfileComponent = ({ id }) => {
	const dispatch = useDispatch()
	const { teamName } = useParams()
	const player = useSelector(playerSelector)
	const teamAbbreviation = useSelector(state => teamAbbreviationByTeamNameSelector(state, { teamName }))

	useEffect(
		() => {
			dispatch(fetchPlayerProfileAction(id))
		},
		[]
	)

	return (
		player ? (
			<Fragment>
				<div className={ "player-profile" }>
					<div className={ "profile-image" }>
						<img
							src={ `https://assets.nhle.com/mugs/nhl/20192020/${ teamAbbreviation }/${ id }.png` }
							alt={ "profile-picture" }
						/>
					</div>
					<div>
						{ player.captain && <h5 data-cy={ "captain" }>Captain</h5> }
						{ player.rookie && <h5 data-cy={ "rookie" }>Rookie</h5> }
						<article>
							<ul>
								<li data-cy={ "team" }>Team: { player.currentTeam?.name }</li>
								<li data-cy={ "age" }>Age: { player.currentAge }</li>
								<li data-cy={ "position" }>Position: { player.primaryPosition?.name } ({ player.primaryPosition?.abbreviation })</li>
								<li data-cy={ "handed" }>Handed: { player.shootsCatches }</li>
								<li data-cy={ "nationality" }>Nationality: { player.nationality }</li>
							</ul>
						</article>
					</div>
				</div>
			</Fragment>
		) : null
	)
}
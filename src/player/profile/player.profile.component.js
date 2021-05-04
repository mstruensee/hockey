import React, { useEffect } from "react"
import {
	useDispatch,
	useSelector,
} from "react-redux"
import { useParams } from "react-router-dom"
import { fetchPlayerProfileAction } from "./player.profile.actions"
import { playerSelector } from "./player.profile.selectors"

export const PlayerProfileComponent = () => {
	const dispatch = useDispatch()
	const { id } = useParams() //wish i could use player.fullName
	const player = useSelector(playerSelector)

	//go to stats page
	// const onClick = () => dispatch(goToTeamRosterPageAction(teamName))

	useEffect(
		() => {
			dispatch(fetchPlayerProfileAction(id))
		},
		[]
	)
	//todo handle loading
	// return useMemo(() => (
	// 		team ? (
	// 			<Fragment>
	// 				<div>TODO</div>
	// 				<ul>
	// 					<li>
	// 						<img
	// 							style={ { height: "25px", width: "25px" } }
	// 							//todo make relative?
	// 							src={ `http://www-league.nhlstatic.com/nhl.com/builds/site-core/d1b262bacd4892b22a38e8708cdb10c8327ff73e_1579810224/images/logos/team/current/team-${ team.id }-light.svg` }
	// 							alt={ "Logo" }
	// 						/>
	// 						{ team.name }
	// 					</li>
	// 					<li>Conference: { team.conference.name }</li>
	// 					<li>Division: { team.division.name }</li>
	// 					<li onClick={ onClick }>View Roster</li>
	// 				</ul>
	// 			</Fragment>
	// 		) : null
	// 	),
	// 	[ team?.id ]
	// )

	return <pre>{ JSON.stringify(player, undefined, 2) }</pre>
}
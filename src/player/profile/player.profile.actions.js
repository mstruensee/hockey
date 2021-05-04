import {
	setObjectAction
} from "@wecreatesoftware/redux-higher-order-reducers"
import { TEAMS_FETCH } from "../../teams/teams.types"
import {
	PLAYER_FETCH,
	PLAYER_REDUCER
} from "./player.types"
import { push } from "connected-react-router"

export const fetchPlayerProfileAction = id => ({
	type: PLAYER_FETCH,
	payload: { id }
})

// export const fetchPlayerProfileAction = (teamName, playerId) => ({
// 	type: TEAMS_FETCH,
// 	payload: {
// 		teamName,
// 		playerId,
// 	},
// 	meta: { expand: "team.roster" }
// })

export const goToPlayerProfilePageAction = id => push(`/players/${ id }`)

export const setPlayerAction = player => (
	setObjectAction({
		reducerName: PLAYER_REDUCER,
		payload: player,
	})
)

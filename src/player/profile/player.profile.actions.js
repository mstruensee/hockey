import { setObjectAction } from "@wecreatesoftware/redux-higher-order-reducers"
import {
	PLAYER_FETCH,
	PLAYER_REDUCER,
} from "./player.types"

export const fetchPlayerProfileAction = id => ({
	type: PLAYER_FETCH,
	payload: { id }
})

export const setPlayerAction = player => (
	setObjectAction({
		reducerName: PLAYER_REDUCER,
		payload: player,
	})
)

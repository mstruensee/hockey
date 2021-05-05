import { PLAYER_SEARCH_TERM_REDUCER } from "./player.search.types"
import { setStringAction } from "@wecreatesoftware/redux-higher-order-reducers"

export const setPlayerSearchTermAction = playerSearchTerm => (
	setStringAction({
		reducerName: PLAYER_SEARCH_TERM_REDUCER,
		string: playerSearchTerm,
	})
)

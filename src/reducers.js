import {
	objectReducer,
	listReducer,
	stringReducer,
} from "@wecreatesoftware/redux-higher-order-reducers"
import { combineReducers } from "redux"
import {
	PLAYER_INITIAL_STATE,
	PLAYER_REDUCER,
} from "./player/profile/player.types"
import {
	PLAYER_SEARCH_TERM_INITIAL_STATE,
	PLAYER_SEARCH_TERM_REDUCER,
} from "./player/search/player.search.types"
import {
	TEAMS_SEARCH_TERM_INITIAL_STATE,
	TEAMS_SEARCH_TERM_REDUCER,
} from "./teams/search/teams.search.types"
import {
	TEAMS_INITIAL_STATE,
	TEAMS_REDUCER,
} from "./teams/teams.types"
import { connectRouter } from "connected-react-router"
import { history } from "./history"

export const reducers = combineReducers({
	router: connectRouter(history),
	[ TEAMS_REDUCER ]: listReducer({
		reducerName: TEAMS_REDUCER,
		initialState: TEAMS_INITIAL_STATE
	}),
	[ PLAYER_REDUCER ]: objectReducer({
		reducerName: PLAYER_REDUCER,
		initialState: PLAYER_INITIAL_STATE
	}),
	[ TEAMS_SEARCH_TERM_REDUCER ]: stringReducer({
		reducerName: TEAMS_SEARCH_TERM_REDUCER,
		initialState: TEAMS_SEARCH_TERM_INITIAL_STATE
	}),
	[ PLAYER_SEARCH_TERM_REDUCER ]: stringReducer({
		reducerName: PLAYER_SEARCH_TERM_REDUCER,
		initialState: PLAYER_SEARCH_TERM_INITIAL_STATE
	}),
})

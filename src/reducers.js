import {
	objectReducer,
	listReducer,
} from "@wecreatesoftware/redux-higher-order-reducers"
import { combineReducers } from "redux"
import {
	APPLICATION_INITIAL_STATE,
	APPLICATION_REDUCER,
} from "./application/application.types"
import {
	PLAYER_INITIAL_STATE,
	PLAYER_REDUCER
} from "./player/profile/player.types"
import {
	TEAMS_INITIAL_STATE,
	TEAMS_REDUCER,
} from "./teams/teams.types"
import { connectRouter } from "connected-react-router"
import { history } from "./history"

export const reducers = combineReducers({
	router: connectRouter(history),
	[ APPLICATION_REDUCER ]: objectReducer({
		reducerName: APPLICATION_REDUCER,
		initialState: APPLICATION_INITIAL_STATE,
	}),
	[ TEAMS_REDUCER ]: listReducer({
		reducerName: TEAMS_REDUCER,
		initialState: TEAMS_INITIAL_STATE
	}),
	[ PLAYER_REDUCER ]: objectReducer({
		reducerName: PLAYER_REDUCER,
		initialState: PLAYER_INITIAL_STATE
	}),
})

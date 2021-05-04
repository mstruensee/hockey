import {
	TEAMS_SEARCH,
	TEAMS_SEARCH_REDUCER
} from "./teams.search.types"
import {
	setStringAction
} from "@wecreatesoftware/redux-higher-order-reducers"
import { push } from "connected-react-router"

// export const goToTeamsPageAction = push("/teams")
//
// export const fetchTeamsAction = searchTerm => ({
// 	type: TEAMS_SEARCH,
// 	payload: searchTerm
// })

export const setTeamsSearchTermAction = searchTerm => (
	setStringAction({
		reducerName: TEAMS_SEARCH_REDUCER,
		string: searchTerm,
	})
)

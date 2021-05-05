import { TEAMS_SEARCH_TERM_REDUCER } from "./teams.search.types"
import { setStringAction } from "@wecreatesoftware/redux-higher-order-reducers"

export const setTeamsSearchTermAction = teamsSearchTerm => (
	setStringAction({
		reducerName: TEAMS_SEARCH_TERM_REDUCER,
		string: teamsSearchTerm,
	})
)

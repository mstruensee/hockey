import { createSelector } from "reselect"
import { TEAMS_SEARCH_REDUCER } from "./teams.search.types"

const teamsSearchReducer = state => state[ TEAMS_SEARCH_REDUCER ]

export const teamsSearchTermSelector = createSelector(
	teamsSearchReducer,
	teamsSearch => teamsSearch
)

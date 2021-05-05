import { createSelector } from "reselect"
import { TEAMS_SEARCH_TERM_REDUCER } from "./teams.search.types"

const teamsSearchTermReducer = state => state[ TEAMS_SEARCH_TERM_REDUCER ]

export const teamsSearchTermSelector = createSelector(
	teamsSearchTermReducer,
	teamsSearchTerm => teamsSearchTerm
)

import { createSelector } from "reselect"
import { PLAYER_SEARCH_TERM_REDUCER } from "./player.search.types"

const playerSearchTermReducer = state => state[ PLAYER_SEARCH_TERM_REDUCER ]

export const playerSearchTermSelector = createSelector(
	playerSearchTermReducer,
	playerSearchTerm => playerSearchTerm
)
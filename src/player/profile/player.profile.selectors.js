import { createSelector } from "reselect"
import { PLAYER_REDUCER } from "./player.types"

const playerReducer = state => state[ PLAYER_REDUCER ]

export const playerSelector = createSelector(
	playerReducer,
	player => player
)
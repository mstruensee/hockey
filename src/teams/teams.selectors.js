import { createSelector } from "reselect"
import { TEAMS_REDUCER } from "./teams.types"

const teamsReducer = state => state[ TEAMS_REDUCER ]

export const teamsSelector = createSelector(
	teamsReducer,
	teams => teams
)

const getTeamName = (_, { teamName }) => teamName

export const teamByTeamNameSelector = createSelector(
	[
		teamsSelector,
		getTeamName
	],
	(teams = [], teamName) => (
		teams.find(team => team.teamName === teamName)
	)
)
export const rosterByTeamNameSelector = createSelector(
	[ teamByTeamNameSelector ],
	team => (
		team?.roster?.roster
	)
)

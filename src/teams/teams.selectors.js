import { createSelector } from "reselect"
import { teamsSearchTermSelector } from "./search/teams.search.selectors"
import { TEAMS_SEARCH_INITIAL_STATE } from "./search/teams.search.types"
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

export const teamsBySearchTermSelector = createSelector(
	[
		teamsSelector,
		teamsSearchTermSelector
	],
	(teams, searchTerm) => (
		searchTerm === TEAMS_SEARCH_INITIAL_STATE ? teams : teams.filter(team => team.name.toLowerCase().includes(searchTerm.toLowerCase()))
	)
)
export const teamsAbbreviationByNameSelector = createSelector(
	[
		teamsSelector,
		getTeamName
	],
	(teams, teamName) => {
		debugger
	}
)


import { createSelector } from "reselect"
import { playerSearchTermSelector } from "../player/search/player.search.selectors"
import { PLAYER_SEARCH_TERM_INITIAL_STATE } from "../player/search/player.search.types"
import { teamsSearchTermSelector } from "./search/teams.search.selectors"
import { TEAMS_SEARCH_TERM_INITIAL_STATE } from "./search/teams.search.types"
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
	[
		teamByTeamNameSelector,
		playerSearchTermSelector
	],
	(team, playerSearchTerm) => (
		playerSearchTerm === PLAYER_SEARCH_TERM_INITIAL_STATE
			? team?.roster?.roster
			: team?.roster?.roster?.filter(player => (
				player.person.fullName.toLowerCase().includes(playerSearchTerm.toLowerCase()) ||
				player.position.name.toLowerCase().includes(playerSearchTerm.toLowerCase()) ||
				player.jerseyNumber.toString().includes(playerSearchTerm)
			))
	)
)

export const teamsBySearchTermSelector = createSelector(
	[
		teamsSelector,
		teamsSearchTermSelector
	],
	(teams, searchTerm) => (
		searchTerm === TEAMS_SEARCH_TERM_INITIAL_STATE ? teams : teams.filter(team => team.name.toLowerCase().includes(searchTerm.toLowerCase()))
	)
)


import { TEAMS_FETCH } from "../teams/teams.types"
import { push } from "connected-react-router"

export const fetchTeamRosterAction = teamName => ({
	type: TEAMS_FETCH,
	payload: { teamName },
	meta: { expand: "team.roster" }
})

export const goToTeamRosterPageAction = teamName => push(`/teams/${ teamName }/roster`)
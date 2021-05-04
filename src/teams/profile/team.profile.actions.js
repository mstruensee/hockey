import { TEAMS_FETCH } from "../teams.types"
import { push } from "connected-react-router"

export const fetchTeamProfileAction = teamName => ({
	type: TEAMS_FETCH,
	payload: { teamName }
})

export const goToTeamProfilePageAction = teamName => push(`/teams/${ teamName }`)
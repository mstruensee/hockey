import { TEAMS_FETCH } from "../teams.types"
import { push } from "connected-react-router"

export const fetchTeamProfileAction = teamName => ({
	type: TEAMS_FETCH,
	payload: { teamName },
	meta: { expand: "team.roster,team.schedule.next,team.schedule.previous,team.stats" }
})

export const goToTeamProfilePageAction = teamName => push(`/teams/${ teamName }`)
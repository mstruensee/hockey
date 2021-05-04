import { combineEpics } from "redux-observable"
import { fetchPlayerProfileEpic } from "./player/profile/player.profile.epic"
import { fetchTeamsEpic } from "./teams/teams.epic"

export const epics = combineEpics(
	fetchTeamsEpic,
	fetchPlayerProfileEpic,
)

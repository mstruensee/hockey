import {
	forkJoin,
	of,
} from "rxjs"
import { setTeamsAction } from "./teams.actions"
import { TEAMS_FETCH } from "./teams.types"
import { ofType } from "redux-observable"
import {
	map,
	mergeMap,
} from "rxjs/operators"

export const teamsSearchEpic = (action$, state$, { getJSON }) =>
	action$.pipe(
		ofType(TEAMS_FETCH),
		mergeMap(action => {
			const { meta: { expand } = {} } = action

			return forkJoin({
				response: getJSON(`/api/v1/teams${ expand ? `?expand=${ expand } ` : "" }`),
				action: of(action),
			})
		}),
		map(({ response, action }) => {
			const { payload: { teamName } = {} } = action
			const { teams } = response

			return teamName ? teams.filter(team => team.teamName === teamName) : teams
		}),
		map(setTeamsAction),
	)

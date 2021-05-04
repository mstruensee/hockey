import { ofType } from "redux-observable"
import {
	map,
	mergeMap,
} from "rxjs/operators"
import { setPlayerAction } from "./player.profile.actions"
import { PLAYER_FETCH } from "./player.types"

export const fetchPlayerProfileEpic = (action$, state$, { getJSON }) =>
	action$.pipe(
		ofType(PLAYER_FETCH),
		mergeMap(action => getJSON(`/api/v1/people/${ action.payload.id }`)),
		map(({ people = [] }) => {
			const [ player ] = people
			return player
		}),
		map(setPlayerAction),
	)

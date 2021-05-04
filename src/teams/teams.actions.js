import {
	TEAMS_FETCH,
	TEAMS_REDUCER
} from "./teams.types"
import { setListAction } from "@wecreatesoftware/redux-higher-order-reducers"
import { push } from "connected-react-router"

export const goToTeamsPageAction = push("/teams")

export const fetchTeamsAction = () => ({
	type: TEAMS_FETCH,
})

export const setTeamsAction = teams => (
	setListAction({
		reducerName: TEAMS_REDUCER,
		payload: teams,
	})
)

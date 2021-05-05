import React, { useEffect } from "react"
import {
	useDispatch,
	useSelector,
} from "react-redux"
import { SearchComponent } from "../../search/search.component"
import { setTeamsSearchTermAction } from "./teams.search.actions"
import { teamsSearchTermSelector } from "./teams.search.selectors"
import { TEAMS_SEARCH_TERM_INITIAL_STATE } from "./teams.search.types"

export const TeamsSearchComponent = () => {
	const dispatch = useDispatch()
	const onChange = event => dispatch(setTeamsSearchTermAction(event.target.value))
	const teamsSearchTerm = useSelector(teamsSearchTermSelector)

	useEffect(
		() => {
			dispatch(setTeamsSearchTermAction(TEAMS_SEARCH_TERM_INITIAL_STATE))
		},
		[]
	)

	return (
		<SearchComponent
			onChange={ onChange }
			value={ teamsSearchTerm }
		/>
	)
}
import React, { Fragment } from "react"
import {
	useDispatch,
	useSelector
} from "react-redux"
import { SearchComponent } from "../../search/search.component"
import { setTeamsSearchTermAction } from "./teams.search.actions"
import { teamsSearchTermSelector } from "./teams.search.selectors"

export const TeamsSearchComponent = () => {
	const dispatch = useDispatch()
	const onChange = event => dispatch(setTeamsSearchTermAction(event.target.value))
	const teamsSearchTerm = useSelector(teamsSearchTermSelector)

	return (
		<SearchComponent
			onChange={ onChange }
			value={ teamsSearchTerm }
		/>
	)
}
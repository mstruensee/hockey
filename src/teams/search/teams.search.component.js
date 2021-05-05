import React, { Fragment } from "react"
import "./teams.search.scss"
import {
	useDispatch,
	useSelector
} from "react-redux"
import { setTeamsSearchTermAction } from "./teams.search.actions"
import { teamsSearchTermSelector } from "./teams.search.selectors"

export const TeamsSearchComponent = () => {
	const dispatch = useDispatch()
	const onChange = event => dispatch(setTeamsSearchTermAction(event.target.value))
	const searchTerm = useSelector(teamsSearchTermSelector)

	return (
		<Fragment>
			<div className={ "search-container" }>
				<input
					className={ "input" }
					type={ "text" }
					placeholder={ "Search" }
					onChange={ onChange }
					value={ searchTerm }
				/>
			</div>
		</Fragment>
	)
}
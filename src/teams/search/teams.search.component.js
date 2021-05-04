import React, { Fragment } from "react"
import "./teams.search.scss"
import { useDispatch } from "react-redux"
import { setTeamsSearchTermAction } from "./teams.search.actions"

export const TeamsSearchComponent = () => {
	const dispatch = useDispatch()
	const onChange = event => dispatch(setTeamsSearchTermAction(event.target.value))

	return (
		<Fragment>
			<div className={ "search-container" }>
				<input
					className={ "input" }
					type={ "text" }
					placeholder={ "Search" }
					onChange={ onChange }
				/>
			</div>
		</Fragment>
	)
}
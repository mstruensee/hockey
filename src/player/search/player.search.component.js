import React, { Fragment } from "react"
import {
	useDispatch,
	useSelector
} from "react-redux"
import { SearchComponent } from "../../search/search.component"
import { setPlayerSearchTermAction } from "./player.search.actions"
import { playerSearchTermSelector } from "./player.search.selectors"

export const PlayerSearchComponent = () => {
	const dispatch = useDispatch()
	const onChange = event => dispatch(setPlayerSearchTermAction(event.target.value))
	const playerSearchTerm = useSelector(playerSearchTermSelector)

	return (
		<SearchComponent
			onChange={ onChange }
			value={ playerSearchTerm }
		/>
	)
}
import React, { useEffect } from "react"
import {
	useDispatch,
	useSelector,
} from "react-redux"
import { SearchComponent } from "../../search/search.component"
import { setPlayerSearchTermAction } from "./player.search.actions"
import { playerSearchTermSelector } from "./player.search.selectors"
import { PLAYER_SEARCH_TERM_INITIAL_STATE } from "./player.search.types"

export const PlayerSearchComponent = () => {
	const dispatch = useDispatch()
	const onChange = event => dispatch(setPlayerSearchTermAction(event.target.value))
	const playerSearchTerm = useSelector(playerSearchTermSelector)

	useEffect(
		() => {
			dispatch(setPlayerSearchTermAction(PLAYER_SEARCH_TERM_INITIAL_STATE))
		},
		[]
	)

	return (
		<SearchComponent
			onChange={ onChange }
			value={ playerSearchTerm }
		/>
	)
}
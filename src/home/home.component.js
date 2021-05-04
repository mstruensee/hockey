import React from "react"
import { useDispatch } from "react-redux"
import { goToTeamsPageAction } from "../teams/team.actions"

export const HomeComponent = () => {
	const dispatch = useDispatch()
	const onClick = () => dispatch(goToTeamsPageAction)

	return (
		<div onClick={ onClick }>Teams</div>
	)
}

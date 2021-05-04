import React, { useMemo } from "react"
import { useDispatch } from "react-redux"
import { goToTeamProfilePageAction } from "./profile/team.profile.actions"

export const TeamsItemComponent = ({ team }) => {
	const { teamName, name } = team
	const dispatch = useDispatch()
	const onClick = () => dispatch(goToTeamProfilePageAction(teamName))

	return useMemo(
		() => (
			<li>
				<div onClick={ onClick }>{ name }</div>
			</li>
		),
		[ teamName ]
	)
}

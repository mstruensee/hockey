import React, {
	useEffect,
	Fragment,
} from "react"
import {
	useDispatch,
	useSelector,
} from "react-redux"
import { useParams } from "react-router-dom"
import { TeamStatsComponent } from "../stats/team.stats.component"
import { teamByTeamNameSelector } from "../teams.selectors"
import { fetchTeamProfileAction } from "./team.profile.actions"

export const TeamProfileComponent = () => {
	const dispatch = useDispatch()
	const { teamName } = useParams()
	const team = useSelector(state => teamByTeamNameSelector(state, { teamName }))

	useEffect(
		() => {
			dispatch(fetchTeamProfileAction(teamName))
		},
		[]
	)

	return (
		team ? (
			<Fragment>
				<TeamStatsComponent team={ team } />
			</Fragment>
		) : null
	)
}
import React, { useEffect } from "react"
import {
	useDispatch,
	useSelector,
} from "react-redux"
import { fetchTeamsAction } from "./teams.actions"
import { TeamsItemComponent } from "./teams.item.component"
import { teamsSelector } from "./teams.selectors"

export const TeamsListComponent = () => {
	//todo handle when use navigates backwards (it loads 1 team, then fetches all, then display's all)
	//do not do teams === 1

	const teams = useSelector(teamsSelector)
	const dispatch = useDispatch()

	useEffect(
		() => {
			dispatch(fetchTeamsAction())
		},
		[ teams ]
	)

	return (
		<ul>
			{
				teams.map(team => (
					<TeamsItemComponent
						key={ team.id }
						team={ team }
					/>
				))
			}
		</ul>
	)
}

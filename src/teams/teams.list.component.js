import React, { useEffect } from "react"
import {
	useDispatch,
	useSelector,
} from "react-redux"
import { fetchTeamsAction } from "./teams.actions"
import { TeamsCardComponent } from "./teams.card.component"
import {
	teamsBySearchTermSelector,
} from "./teams.selectors"
import "./teams.list.scss"

export const TeamsListComponent = () => {
	//todo handle when use navigates backwards (it loads 1 team, then fetches all, then display's all)
	//do not do teams === 1

	const teams = useSelector(teamsBySearchTermSelector)
	const dispatch = useDispatch()

	useEffect(
		() => {
			dispatch(fetchTeamsAction())
		},
		[]
	)

	return (
		<section className={ "teams-section" }>
			{
				teams.map(team => (
					<TeamsCardComponent
						key={ team.id }
						team={ team }
					/>
				))
			}
		</section>
	)
}

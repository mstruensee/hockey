import React from "react"
import {
	Route,
	Switch,
} from "react-router"
import { HomePage } from "../home/home.page"
import { PlayerProfilePage } from "../player/profile/player.profile.page"
import { TeamRosterPage } from "../roster/team.roster.page"
import { TeamProfilePage } from "../teams/profile/team.profile.page"
import { TeamsPage } from "../teams/teams.page"

export const RouterComponent = () => (
	<Switch>
		<Route
			exact
			path={ "/" }
			component={ HomePage }
		/>
		<Route
			exact
			path={ "/teams" }
			component={ TeamsPage }
		/>
		<Route
			exact
			path={ "/teams/:teamName" }
			component={ TeamProfilePage }
		/>
		<Route
			exact
			path={ "/teams/:teamName/roster" }
			component={ TeamRosterPage }
		/>
		<Route
			exact
			path={ "/players/:id" }
			component={ PlayerProfilePage }
		/>
		<Route render={ () => (<div>Miss</div>) } />
	</Switch>
)
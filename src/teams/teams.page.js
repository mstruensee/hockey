import React, { Fragment } from "react"
import { TeamsSearchComponent } from "./search/teams.search.component"
import { TeamsListComponent } from "./teams.list.component"

export const TeamsPage = () => (
	<Fragment>
		<TeamsSearchComponent />
		<TeamsListComponent />
	</Fragment>
)

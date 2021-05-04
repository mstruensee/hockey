import React, { Fragment } from "react"
import { TeamRosterComponent } from "../../roster/team.roster.component"
import { TeamProfileComponent } from "./team.profile.component"

export const TeamProfilePage = () => (
	<Fragment>
		<TeamProfileComponent />
		<TeamRosterComponent />
	</Fragment>
)

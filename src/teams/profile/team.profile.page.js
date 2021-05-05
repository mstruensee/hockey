import React, { Fragment } from "react"
import { PlayerSearchComponent } from "../../player/search/player.search.component"
import { TeamRosterComponent } from "../../roster/team.roster.component"
import { TeamProfileComponent } from "./team.profile.component"

export const TeamProfilePage = () => (
	<Fragment>
		<TeamProfileComponent />
		<section style={ { width: "max-content" } }>
			<PlayerSearchComponent />
			<TeamRosterComponent />
		</section>
	</Fragment>
)

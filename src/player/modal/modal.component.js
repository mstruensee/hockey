import React, { Fragment } from "react"
import "./modal.scss"
import { PlayerProfileComponent } from "../profile/player.profile.component"

export const ModalComponent = ({ onCloseHandler, player }) => {
	return (
		<Fragment>
			<div className={ "container" }>
				<div
					className={ "modal" }
					tabIndex={ "0" }
				>
					<div className={ "modal-content" }>
						<header>
							<h4>#{ player?.jerseyNumber } { player?.person?.fullName }</h4>
							<span onClick={ onCloseHandler }>&times;</span>
						</header>
						<div className={ "modal-main" }>
							<PlayerProfileComponent id={ player.person.id } />
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}
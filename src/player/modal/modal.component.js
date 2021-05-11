import React, { Fragment } from "react"
import "./modal.scss"
import { PlayerProfileComponent } from "../profile/player.profile.component"

export const ModalComponent = ({ onCloseHandler, player }) => (
	<Fragment>
		<div className={ "container" }>
			<div
				className={ "modal" }
				tabIndex={ "0" }
			>
				<div className={ "modal-content" }>
					<header>
						<h4 data-cy={ "jersey and name" }>
							#{ player?.jerseyNumber } { player?.person?.fullName }
						</h4>
						<span
							onClick={ onCloseHandler }
							data-cy={ "close player info" }
						>
							&times;
						</span>
					</header>
					<div className={ "modal-main" }>
						<PlayerProfileComponent id={ player.person.id } />
					</div>
				</div>
			</div>
		</div>
	</Fragment>
)

import React, { Fragment } from "react"
import "./search.scss"

export const SearchComponent = ({ onChange, value }) => (
	<Fragment>
		<div className={ "search-container" }>
			<input
				className={ "input" }
				type={ "text" }
				placeholder={ "Search" }
				onChange={ onChange }
				value={ value }
				data-cy={ "search-input" }
			/>
		</div>
	</Fragment>
)

import React, {
	useEffect,
	Fragment,
} from "react"
import {
	useDispatch,
	useSelector,
} from "react-redux"
import { useParams } from "react-router-dom"
import { teamAbbreviationByTeamNameSelector } from "../../teams/teams.selectors"
import { fetchPlayerProfileAction } from "./player.profile.actions"
import { playerSelector } from "./player.profile.selectors"
import "./player.profile.scss"

export const PlayerProfileComponent = ({ id }) => {
	const dispatch = useDispatch()
	const { teamName } = useParams() //wish i could use player.fullName
	const player = useSelector(playerSelector)
	const teamAbbreviation = useSelector(state => teamAbbreviationByTeamNameSelector(state, { teamName }))

	useEffect(
		() => {
			dispatch(fetchPlayerProfileAction(id))
		},
		[]
	)

	return (
		player ? (
			<Fragment>
				<div className="player-profile">
					<div className="profile-image">
						<img
							src={ `https://assets.nhle.com/mugs/nhl/20192020/${ teamAbbreviation }/${ id }.png` }
							alt="profile-sample2"
						/>
					</div>
					<div>
						{ player.captain && <h5 data-cy={ "captain" }>Captain</h5> }
						{ player.rookie && <h5 data-cy={ "rookie" }>Rookie</h5> }
						<article>
							<ul>
								<li data-cy={ "team" }>Team: { player.currentTeam?.name }</li>
								<li data-cy={ "age" }>Age: { player.currentAge }</li>
								<li data-cy={ "position" }>Position: { player.primaryPosition?.name } ({ player.primaryPosition?.abbreviation })</li>
								<li data-cy={ "handed" }>Handed: { player.shootsCatches }</li>
								<li data-cy={ "nationality" }>Nationality: { player.nationality }</li>
							</ul>
						</article>
					</div>
				</div>
				{/*<ul>*/ }
				{/*	<li>*/ }
				{/*		<img*/ }
				{/*			style={ { height: "25px", width: "25px" } }*/ }
				{/*			//todo make relative?*/ }
				{/*			src={ `https://assets.nhle.com/mugs/nhl/20192020/${ teamAbbreviation }/${ id }.png` }*/ }
				{/*			alt={ "Logo" }*/ }
				{/*		/>*/ }
				{/*		{ player.fullName }*/ }
				{/*	</li>*/ }
				{/*	<li> Team: { player.currentTeam?.name }</li>*/ }
				{/*	<li> Age: { player.currentAge }</li>*/ }
				{/*	<li> Jersey :{ player.primaryNumber }</li>*/ }
				{/*	<li> Position: { player.primaryPosition?.name } ({ player.primaryPosition?.abbreviation })</li>*/ }
				{/*	<li> Handed: { player.shootsCatches }</li>*/ }
				{/*	<li> Nationality: { player.nationality }</li>*/ }
				{/*	{ player.captain && <li>Captain</li> }*/ }
				{/*	{ player.rookie && <li>Rookie</li> }*/ }
				{/*</ul>*/ }
			</Fragment>
		) : null
	)
// return
}


/*


{
  "id": 8477972,
  "fullName": "Josh Jacobs",
  "link": "/api/v1/people/8477972",
  "firstName": "Josh",
  "lastName": "Jacobs",
  "primaryNumber": "40",
  "birthDate": "1996-02-15",
  "currentAge": 25,
  "birthCity": "Shelby Township",
  "birthStateProvince": "MI",
  "birthCountry": "USA",
  "nationality": "USA",
  "height": "6' 2\"",
  "weight": 200,
  "active": true,
  "alternateCaptain": false,
  "captain": false,
  "rookie": true,
  "shootsCatches": "R",
  "rosterStatus": "Y",
  "currentTeam": {
    "id": 1,
    "name": "New Jersey Devils",
    "link": "/api/v1/teams/1"
  },
  "primaryPosition": {
    "code": "D",
    "name": "Defenseman",
    "type": "Defenseman",
    "abbreviation": "D"
  }
}
 */
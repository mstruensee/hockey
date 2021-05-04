import React, {
	useEffect,
	Fragment,
} from "react"
import {
	useDispatch,
	useSelector,
} from "react-redux"
import { useParams } from "react-router-dom"
import { fetchPlayerProfileAction } from "./player.profile.actions"
import { playerSelector } from "./player.profile.selectors"

export const PlayerProfileComponent = () => {
	const dispatch = useDispatch()
	const { id } = useParams() //wish i could use player.fullName
	const player = useSelector(playerSelector)

	useEffect(
		() => {
			dispatch(fetchPlayerProfileAction(id))
		},
		[ player ]
	)

	return (
		player ? (
			<Fragment>
				<ul>
					<li>
						<img
							style={ { height: "25px", width: "25px" } }
							//todo make relative?
							src={ `https://nhl.bamcontent.com/images/headshots/current/168X168/${ player.id }.jpg` }
							alt={ "Logo" }
						/>
						{ player.fullName }
					</li>
					<li> Team: { player.currentTeam?.name }</li>
					<li> Age: { player.currentAge }</li>
					<li> Jersey :{ player.primaryNumber }</li>
					<li> Position: { player.primaryPosition?.name } ({ player.primaryPosition?.abbreviation })</li>
					<li> Handed: { player.shootsCatches }</li>
					<li> Nationality: { player.nationality }</li>
					{ player.captain && <li>Captain</li> }
					{ player.rookie && <li>Rookie</li> }
				</ul>
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
import {
	Given,
	Then,
	When,
} from "cypress-cucumber-preprocessor/steps"

Given(/^user loads team page$/, () => (
	cy
		.intercept("api/v1/teams*", { fixture: "teams-one" })
		.as("getOneTeams")
		.visit("/teams/Devils")
		.wait("@getOneTeams")
))
Then(/^(player|team) stats should display$/, (_, table) => (
	table
		.rows()
		.forEach(([ stat, value ]) => {
			cy
				.get(`[data-cy="${ stat }"]`)
				.contains(value)
		})
))
When(/^the user searches for "(.*)"$/, searchTerm => (
	cy
		.getSearchInput()
		.type(searchTerm)
))
Then(/^there should be (\d+) players$/, players => (
	cy
		.getTeamRoster()
		.find("tr")
		.should("have.length", players)
))
When(/^user clicks view player info$/, players => (
	cy
		.getViewPlayerInfo()
		.click()
))
When(/^user closes player stats$/, () => (
	cy
		.getPlayerInfoCloseIcon()
		.click()
))
import {
	Given,
	Then,
	When,
} from "cypress-cucumber-preprocessor/steps"

Given(/^user loads home page$/, () => (
	cy
		.intercept("/api/v1/teams", { fixture: "teams-all" })
		.as("getAllTeams")
		.visit("/")
		.wait("@getAllTeams")
))
Then(/^there should be (\d+) teams$/, teams => (
	cy
		.get(".team-card")
		.should("have.length", teams)
))
When(/^the user searches for "(.*)" (team|player)$/, searchTerm => (
	cy
		.getSearchInput()
		.clear()
		.type(searchTerm)
))
When(/^the user clicks (.*)$/, team => (
	cy
		.get(`[data-cy='${ team }']`)
		.click()
))
Then(/^user sees teams profile$/, () => (
	cy
		.url()
		.should("contain", "/teams/Rangers")
))
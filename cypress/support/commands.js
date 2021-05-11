Cypress.Commands.add("getSearchInput", () => (
	cy.get("[data-cy=search-input]")
))
Cypress.Commands.add("getTeamRoster", () => (
	cy.get("[data-cy=team-roster]")
))
Cypress.Commands.add("getViewPlayerInfo", () => (
	cy.get("[data-cy=view-player-info]")
))
Cypress.Commands.add("getPlayerInfoCloseIcon", () => (
	cy.get("[data-cy='close player info']")
))
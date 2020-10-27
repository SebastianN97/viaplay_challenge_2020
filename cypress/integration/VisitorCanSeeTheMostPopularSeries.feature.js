describe("Visitor can see", () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/https://content.viaplay.se/pc-se/serier/samtliga",
      response: "fixtures:series.json"
    })
    cy.visit('http://localhost:3000')
  })

  it('list of popular series', () => {
    cy.get("[data-cy='header']").should('be.visible')
    cy.get('.display-show').should('have.length', 10)
  })
})

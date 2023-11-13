describe('Hospital', () => {
  it('should play and pause vdo', () => {
    cy.visit('/')
    cy.get('video').should('be.visible')
    cy.get('video').should($video => { expect($video.get(0)).to.have.property('paused', false); });
    cy.wait(5000)
    cy.get('button').last().click()
    cy.get('video').should($video => { expect($video.get(0)).to.have.property('paused', true); });
    

  })
  it('should have hospitals and display', () => {
    cy.visit('/')
    cy.get('button').first().should('be.visible')
    cy.get('button').first().click()
    cy.wait(2000)
    cy.get('img').should('have.length.at.least', 3)
})
})
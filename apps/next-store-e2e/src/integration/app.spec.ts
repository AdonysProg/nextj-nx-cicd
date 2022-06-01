describe('next-store', () => {
  beforeEach(() => cy.visit('/'))

  it('should get the first product', () => {
    cy.get('input').first().type('first')
    cy.get('[data-id="0"] > div > h1').should('have.text', 'First Product')
    cy.get('body').screenshot()
  })
})

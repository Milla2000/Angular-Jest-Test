describe('Login', () => {
  it('should login if credentials are valid', () => {
    cy.visit('/login');
    cy.url().should('include', 'login');
    cy.get('[formControlName="email"]').type('millajesso2000@gmail.com');
    cy.get('[formControlName="password"]').type('12345678');
    cy.get('[data-cy="loginbtn"]').click();

    cy.get('.alert').should('contain', 'successfull login');

    // cy.wait(4000);
    // cy.get('.alert').should('not.contain', 'successfull login');
    // cy.get('.alert').should('contain', '');
  });

  it('dsfdsfs', () => {
    // cy.funName('mophat', '1234567')
  });

  //
});

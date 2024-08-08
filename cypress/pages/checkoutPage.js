export class CheckoutPage {
    InserirDadosUsuario(firstName, lastName, postalCode) {
    cy.get('#first-name').type(firstName);
    cy.get('#last-name').type(lastName);
    cy.get('#postal-code').type(postalCode);
}
      
    continue() {
      cy.contains('Continue').click();
    }
  
    finish() {
      cy.contains('Finish').click();
    }
  
    verifyOrderCompletion(message) {
      cy.get('.complete-header').should('contain', message);
    }
  }
  export const onCheckoutPage = new CheckoutPage();
  
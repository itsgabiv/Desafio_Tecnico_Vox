class CarrinhoPage {
    openCarrinho() {
      cy.get('.shopping_cart_link').click();
          
    }
    Checkout() {
      cy.contains('Checkout').click();
    }
  
    getCartBadge() {
      return cy.get('.shopping_cart_badge');
    }
  
    getCartItems() {
      return cy.get('.cart_item');
    }
  }
  
  export default CarrinhoPage;
  export const onCarrinhoPage = new CarrinhoPage();
  
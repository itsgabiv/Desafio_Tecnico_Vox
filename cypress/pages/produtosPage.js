class ProdutosPage {
    orderallitems(){
        cy.get('.btn').each( (items) => {
            cy.wrap(items).click();
        });
    
    }

    adicionarItensAoCarrinho(){
        cy.get('.btn').each( (items) => {
            cy.wrap(items).click();
        });
    
    }
  
    getProductList() {
        return cy.get('.inventory_item');
    }
  
    verifytheitemsisadded() {
        cy.get('.btn').each((items) => {
            cy.wrap(items).invoke('text').then((text) => {
                expect(text.trim()).to.equals('Remove');
            });
        });
    }
  
    verifytheitemsisloaded() {
        cy.get('.inventory_item').should('be.visible');
    }
  
    verifyItemsNumber(number) {
        cy.get('.inventory_item').its('length').then((length) => {
            expect(length).to.equal(number);
            cy.log('Number of elements:', length);
        });
    }
  
    AddFirstitems(){
        cy.get('.btn').first().click();
        cy.get('.btn').first().invoke('text').then((text) => {
            expect(text).to.equals('Remove');
        });
    }
  
    verifyFirstitemsisadded(){
        cy.get('.btn').first().invoke('text').then((text) => {
            expect(text).to.equals('Remove');
        });
    }
    
  }
  
  export default ProdutosPage;
  export const onProdutosPage = new ProdutosPage();
  
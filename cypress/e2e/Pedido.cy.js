import { onLoginPage } from '../pages/loginPage'
import { onProdutosPage } from '../pages/produtosPage'
import{ onCarrinhoPage } from '../pages/carrinhoPage'
import {onCheckoutPage} from "../pages/checkoutPage";


describe('comprar todos os itens', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('comprar todos os itens', () => {
    onLoginPage.visitWebsite()
    onLoginPage.LoginWithValidCredentials()

    onProdutosPage.verifytheitemsisloaded()
    onProdutosPage.verifyItemsNumber(6)

    onProdutosPage.orderallitems()
    onProdutosPage.verifytheitemsisadded()

    onCarrinhoPage.openCarrinho()
    onCarrinhoPage.Checkout()

    onCheckoutPage.InserirDadosUsuario('gabriela','vieira','12345')
    onCheckoutPage.continue()
    cy.scrollTo('bottom')
    onCheckoutPage.finish()
      
  });

});
import LoginPage from '../pages/loginPage';
import ProdutosPage from '../pages/produtosPage';

describe('Teste Produtos', () => {
  const loginPage = new LoginPage();
  const produtosPage = new ProdutosPage();

  before(() => {
    loginPage.visitWebsite();
    loginPage.LoginWithValidCredentials();
  });

  it('deve exibir a lista de produtos após o login', () => {
        produtosPage.getProductList().should('have.length.greaterThan', 0);
  });
});

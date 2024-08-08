import LoginPage from '../pages/loginPage';
import ProdutosPage from '../pages/produtosPage';
import CarrinhoPage from '../pages/carrinhoPage';

describe('Teste Carrinho', () => {
  const loginPage = new LoginPage();
  const produtosPage = new ProdutosPage();
  const carrinhoPage = new CarrinhoPage();

  before(() => {
    loginPage.visitWebsite();
    loginPage.LoginWithValidCredentials();
  });

  it('adicionar produtos ao carrinho', () => {
    produtosPage.adicionarItensAoCarrinho();
    carrinhoPage.openCarrinho();
    carrinhoPage.getCartBadge().should('contain', '6');
  });

});
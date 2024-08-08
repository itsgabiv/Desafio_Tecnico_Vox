Funcionalidade: Login

  Cenário: Login com sucesso
    Dado que eu estou na página de login
    Quando eu preencho o campo de usuário com "standard_user" e a senha com "standard_user"
    E clico no botão "Login"
    Então eu devo ser redirecionado para a página de produtos
	

---------
Funcionalidade: Visualização de Produtos

  Cenário: Visualizar lista de produtos
    Dado que eu estou logado
    Quando eu acesso a página de produtos
    Então eu devo ver uma lista com pelo menos um produto


---------
Funcionalidade: Adicionar ao Carrinho

  Cenário: Adicionar um produto ao carrinho
    Dado que eu estou na página de um produto
    Quando eu clico no botão "Add to cart"
    Então o produto deve ser adicionado ao carrinho
    E o número de itens no carrinho deve ser incrementado

  Cenário: Adicionar múltiplos produtos ao carrinho
    # ... (similar ao cenário anterior, adicionando mais produtos)


---------
Funcionalidade: Remover do Carrinho

  Cenário: Remover um produto do carrinho
    Dado que eu tenho um produto no carrinho
    Quando eu clico no botão "Remove" do produto
    Então o produto deve ser removido do carrinho
    E o número de itens no carrinho deve ser decrementado


----------
Funcionalidade: Finalizar Compra

  Cenário: Finalizar uma compra
    Dado que eu tenho produtos no carrinho
    Quando eu clico no botão "Finish"
    E preencho os dados de pagamento
    Então eu devo ser redirecionado para a página de confirmação de pedido
    E devo receber um email de confirmação



describe('Login', () => {
let validusername=Cypress.env('username');
let validPassword=Cypress.env('password');

  it('login com credencial válida', () => {
     cy.visit('/')
      cy.get('[data-test="username"]').as('inputUsername')
      cy.get('#password').as('inputpassword')
      cy.get('[data-test="login-button"]').as('buttonlogin')

      //Insira um nome de usuário válido
      cy.get('@inputUsername').type(validusername)
      cy.get('@inputpassword').type(validPassword)

      //Verificar
      cy.get('@inputUsername').invoke('prop','value').then((text)=>{
      expect(text).to.equal(validusername)
      })
      cy.get('@inputpassword').invoke('prop','value').then((text)=>{
      expect(text).to.equal(validPassword)
      })

       //Login
       cy.get('@buttonlogin').click()
        cy.get('[data-test="shopping-cart-link"]').as('PageofItems')


        })
})
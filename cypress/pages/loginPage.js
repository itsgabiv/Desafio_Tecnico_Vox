class LoginPage {
  visitWebsite() {
    cy.visit('/');
  }

    Enterusername(){
        let validusername=Cypress.env('username')

        cy.get('[data-test="username"]').as('inputUsername')

        //Insira um nome de usuário válido
        cy.get('@inputUsername').type(validusername)

        //Verificar
        cy.get('@inputUsername').invoke('prop','value').then((text)=>{
            expect(text).to.equal(validusername)
        })
    }

    Enterpassword(){
        let validPassword=Cypress.env('password');

        cy.get('#password').as('inputpassword')
        cy.get('@inputpassword').type(validPassword)

        //Verificar
        cy.get('@inputpassword').invoke('prop','value').then((text)=>{
            expect(text).to.equal(validPassword)
        })
    }
    ClickonLogin(){

        cy.get('[data-test="login-button"]').as('buttonlogin')
        cy.get('@buttonlogin').click()

    }

    LoginWithValidCredentials() {
        this.Enterusername();
        this.Enterpassword();
        this.ClickonLogin();
    }


}

export default LoginPage;
export const onLoginPage = new LoginPage();

class LoginPage {
    // Pode ser feito por "fluxo": elementos + ações

    acessarSabesp() {
        cy.visit('https://sabesp-novaagv-hml.engdb.com.br/')
        cy.get('.botao-aceitar').click({ force: true })
    }

    digitarCpf() {
        cy.get('#cpf').type(cpf)
    }

    digitarSenha() {
        cy.get('#senha').type(senha)
    }

    confirmarLogin() {
        cy.get('#login-component_logar').click({ force: true })
    }

    validarLoginComTextoDaLogo(text) {
        cy.get('h1').should('have.text', 'Agência Virtual')
    }

    validarTituloDaPagina(text) {
        cy.get('.title').should('have.text', text)
    }


}

export const loginPage = new LoginPage()
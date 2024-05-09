class LoginPage {

    acessarSabesp() {
        cy.visit('https://sabesp-novaagv-hml.engdb.com.br/')
        cy.get('.botao-aceitar').click()
    }

    digitarCpf() { cy.get('#cpf').type(cpf) }
    digitarSenha() { cy.get('#senha').type(senha) }

    confirmarLogin() {
        cy.get('#login-component_logar').click({ force: true })
    }

    validarTituloDaPagina() {
        cy.get('h1').should('have.text', 'Agência Virtual')
    }
}

export const loginPage = new LoginPage()
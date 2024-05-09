/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { loginPage } from '../../pages/login.page';
const users = require('../../fixtures/login.json')

Given(/^que o cliente realizou o login$/, () => {
	loginPage.acessarSabesp()
});

When(/^inseriu CPF e senha$/, () => {
	loginPage.digitarCpf(users.cpf)
    loginPage.digitarSenha(users.senha)
});

Then(/^O sistema deverá direcionar para home logada$/, () => {
	loginPage.validarTituloDaPagina()
});
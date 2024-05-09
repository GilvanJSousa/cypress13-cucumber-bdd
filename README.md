# SABESP-POC
🏆 Projeto Sabesp POC com CUCUMBER

Estrutura do projeto:
```
./
│  ├── cypress/
│  │   ├── e2e/
│  │       ├── features/
│  │       ├── steps/
│  │   ├── fixtures/
│  │   ├── pages/
│  │   └── support/
│  │       ├── commands/
│  │       ├── e2e/
├── .gitignore
├── cypress.config.json
├── package.json
└── README.md
```

## Dependências na primeira execução do projeto

Instale o [Node.js na versão LTS atual](https://nodejs.org/) (baixe a versão mais atual), baixando no site e seguindo o passo-a-passo do executável.

Após instalado o Node, confirme que a instalação deu certo abrindo a linha de comando e executando:
```
node --version
```
Este comando deve exibir a versão atual do Node que foi instalada.

Feito isso, execute o comando:
```
npm install
```
Este comando instalará as dependências iniciais do projeto que estão definidas nos `devDependencies` e `dependencies` dentro do `package.json`.

## Comandos de execução do projeto:

Para executar o cypress em modo Test Runner:
```
npx cypress run --config video=false
```

Para executar o cypress:
```
npx cypress open

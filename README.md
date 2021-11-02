# NLW-heat-backend com JWT

Projeto desenvolvido durante a NLW-Heat da trilha Node.JS na RocketSeat. Este mini projeto tem como objetivo abordar o uso de Sockets para fazer comunicação entre Cliente e Servidor, as aplicações nlw-heat-front ou nlw-heat-mobile abrem comunicação com o server para receber o dado através do socket.

## Projeto desenvolvido usando as seguintes tecnologias

-   Node.JS;
-   TypeScript;
-   Yarn;
-   Prisma;
-   Socket; e
-   SqLite.

### Configurações Iniciais

Para instalar o Node.JS acesse o site do [Node](https://nodejs.org/) e escolha o seu Sistema Operacional e siga os passos de instalação.
Para instalar o Yarn entre no terminal e execute o seguinte comando:

```sh
npm install yarn
```

Depois instale as dependências do projeto com o comando abaixo:

```sh
yarn install
```

O projeto usa o banco de dados SqLite, para criá-lo execute o comando abaixo:

```sh
yarn prisma migration
```

Após a execução do comando, observe na pasta "src/database/" que agora terá um arquivo com o nome database.sqlite

## Executando o projeto

Para executar o projeto acesse o terminal e rode o comando abaixo:

```sh
yarn start
```

O comando abaixo abre uma interface web que permitir navegar no banco de dados.

```sh
yarn prisma studio
```
Ao executar o comando acima no terminal, uma mensagem será exibida "Server started on 4000"

> Outros scripts podem ser encontrados no arquivo package.json

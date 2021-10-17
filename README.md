# Aplicação


![letmeask](https://user-images.githubusercontent.com/37816505/137632661-48a472a3-4f4f-4797-8c75-ac6bbf9b52d9.png)

# Tecnologias
As tecnologias que foram usadas para desenvolver essa aplicação:

* [React](https://reactjs.org/)
* [Firebase](https://firebase.google.com/)
* [TypeScript](https://www.typescriptlang.org/)

# Como executar
Clone o projeto e acesse a pasta onde foi clonado.
Para iniciá-lo usando o **yarn**, siga os passos abaixo:

```
# Instalar as dependências com yarn 
$ yarn
# Iniciar o projeto
$ yarn start
```

Para iniciá-lo usando o **npm**, siga os passos abaixo:

```
# Instalar as dependências com npm 
$ npm install
# Iniciar o projeto
$ npm start
```
A aplicação rodará no seu browser pelo endereço http://localhost:3000.
Atenção ao **Firebase** para rodar a aplicaão, pois é preciso inserir seus dados nas variáveis de ambiente.

# Firebase
Uma sugestão se tiver dificuldade com as variáveis de ambiente é criar um arquivo com o nome: **_.env.local_**.
Em seguida insrira seus dados da sua conta do **firebase** aproximadamente assim:

```
REACT_APP_API_KEY="MY_API_KEY"
REACT_APP_AUTH_DOMAIN="MY_AUTH_DOMAIN"
REACT_APP_DATABASE_URL="MY_DATABASE_URL"
REACT_APP_PROJECT_ID="MY_PROJECT_ID"
REACT_APP_STORAGE_BUCKET="MY_STORAGE_BUCKET"
REACT_APP_MESSAGING_SENDER_ID="MY_MESSAGING_SENDER_ID"
REACT_APP_APP_ID="MY_APP_ID"
```

# PROJETO
Letmeask é uma aplicação desenvolvida pela [Rocketseat](https://www.rocketseat.com.br/), onde eu apenas repliquei para consolidar e adquirir novos conhecimentos. Adicionei mais algumas funcionalidades.

# Layout
É possível ter acesso ao **layout** do projeto através do link abaixo
* [Layout](https://www.figma.com/community/file/1009824839797878169/Letmeask)

Lembrando que é preciso ter uma conta no [Figma](http://figma.com/) e é sugerido que duplique o projeto no **Figma**.

# Aplicação
Aplicação que é possível realizar login pelo **GOOGLE** usando **_api_** do Firebase. O objetivo é criar salas sobre determinada categoria onde os usuaŕios poderão realizar perguntas, curtir, remover e marcar como lida as perguntas. O criador da sala no entanto é o único a poder realizar ações como encerrar a sala, marcar perguntas como lidas e removê-las.

A aplicação está responsiva e também possui os modos de tela noturno, onde caso seja ativado a tela fica com as cores mais escuras. Uma demonstração da **responsividade** e do **dark mode** abaixo gravada por um dispositivo móvel:

Obs: **A demonstração está assim pela qualidade do gif**

![letmeask (1)](https://user-images.githubusercontent.com/37816505/137633184-c5b660e6-6d5d-4dff-b9bb-44a012cd951f.gif)
# Link da Aplicação:
https://letmeask-cf52c.web.app/

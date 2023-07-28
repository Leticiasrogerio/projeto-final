<h1 align="center">
  <img src="material/CAPA PROJETO (1).png" alt="cada projeto nutrilet" width="500">

  </br> 

  <p align="center">PROJETO FINAL NUTRILET<p>
</h1>

#  {reprograma} Projeto Final | :seedling:
Projeto de conclusão do bootcamp de desenvolvimento Back-end da [{reprograma}]
- Este projeto está hospedado [aqui](https://nutrilet.onrender.com/) 

- E documentado [aqui](http://localhost:3365/minha-rota-de-documentacao/)

## Objetivo
Esse projeto desenvolve uma API  para controle de cadastramentos em uma clinica de uma nutricionistas. Para manter organização em suas consultas e ter o monitoramento de seus pacientes. 

### Funcionalidades:

- [x] O schema dos pacientes deve possuir os seguintes campos: id (autogerado), nome, idade, peso, altura, imc e classificaçao do imc.
- [x] A API permite o cadastro de cada pacientes com suas informaçoes para o andamento da consulta;
- [x] A API deve permitir a visualização dos pacientes cadastrados;
- [x] A API deve permitir alterações nos cadastros dos pacientes;
- [x] A API deve permitir a exclusão de cadastros dos pacientes do banco de dados.

### Instalação

```bash
# Clonar o repositório
$ git clone https:https://github.com/Leticiasrogerio/projeto-final

# Entrar na pasta do repositório
$ cd projeto-final

# Instalar as dependências
$ npm install

# Executar o servidor
$ npm start

```


#### Tecnologias e pacotes utilizados
- Node.js
- MongoDB
- Git
- Javascript
- Mongo Atlas
- express
- nodemon
- dotenv-safe
- mongoose
- npm
- Postman
- swagger-autogen
- Reder


</br>

## <b> Arquitetura MVC </b>

```
 📁 nutrilet
   |
   |--📁node_modules    
   |      
   |--📁 src
   |  ||
   |  ||
   |  ||--📁 controller
   |  |    |- 📄 nutriletController.js
   |  |
   |  ||--📁 database
   |  |    |- 📄 dbConnect.js
   |  |
   |  ||--📁 models
   |  |    |- 📄 nutriletModels.js
   |  |
   |  ||--📁 routes
   |  |    |- 📄 nutriletRoute.js
   |  |
   |  ||-📄 app.js
   |  |
   |  |--📁 swagger
   |  |   |- 📄 swagger_output.json
   |  |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📑 server.js
   |- 📄 swagger.js
   |- 📄 .gitignore
   |- 📄 CAPA PROJETO (1)png
   |- 📄 README.md

```
#### Rotas

|Rotas                                   |                                                    | 
| ---------------------------------------| -------------------------------------------------- | 
| GET ALL//nutrilet/all                  | Lista todos pacientes cadastrados na clinica       |
| POST/nutrilet/new                      | Cadastrar novo paciente                            |
| PATCH/nutrilet/update                  | Alterar dados do paciente                          |
| DELETE/nutrilet/delete/                | Exclui informaçoes do paciente                     |

  ## <b> Agradecimentos </b>
</br>
API feito pela aluna Leticia S Rogério, com o apoio de uma equipe linda e que com certeza me agregou muito conhecimento. Eu agradeço toda equipe {REPROGRAMA} pela oportunidade.
Agradeço também a minha turma que sempre estava disposta a me ajudar e a uma colega de turma que com certeza virou uma grande amiga a Juciiii 💜


------------






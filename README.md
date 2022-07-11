# SocialNet
 Cabe destacar que SoialNet es una app de tipo chat con las que vamos aprender todos y poner en practica conceptos de Arquitectura de Software, DevOps, Programación Orientada a Objetos, Programacion Funcional etc...

# Necesitas instalar:
- Editor de codigo VSC
  - https://code.visualstudio.com/download
## 1- Instalar esto si usas docker:
- Docker
  - https://docs.docker.com/get-docker/
- Make GNU
  - (Windows) https://www.gnu.org/software/make/
  - (MAC) https://formulae.brew.sh/formula/make
  - (Ubuntu) https://howtoinstall.co/es/make

## 2- Instalar esto si NO usas docker:
- Node 
  - https://nodejs.org/es/download/
- Yarn
  - Correr este comando: ``` npm install -G yarn ```
- Debes installar mysql en tu pc y configurar las variables de entorno en los .env de los diferentes proyectos
# Documentación que te recomiendo tener:
- Monorepo: https://monorepo.guide/getting-started
- Jest (Testing): https://jestjs.io/docs/getting-started
- Frontend:
  - StyledComponent: https://styled-components.com/
  - Material UI: https://v4.mui.com/
  - Eslint & Prettier: https://infsoft.home.blog/2021/07/26/eslint-prettier-vscode/
  - Nextjs: https://nextjs.org/docs/getting-started
  - 
- Backend
  - Express: https://expressjs.com/es/guide/routing.html
  - Backend: https://softwareontheroad.com/es/ideal-nodejs-project-structure/ 
  - Arquitectura: https://www.izertis.com/es/-/blog/diseno-de-clean-architecture-en-nodejs 
  - Typescript: https://www.typescriptlang.org/docs/handbook/intro.html
  - Sequealize: https://sequelize.org/docs/v6/

# Para levantar las apps:
## 1- Con docker:
### 1.1- Si tienes instalado make
 ```$ make dev``` => Este comando levanta entorno de desarrollo

 ```$ make prod``` => Este comando levanta entorno de producción

 
 ```$ make test``` => Este comando levanta entorno de testing

### 1.2- Si no tienes instalado make
prod => ```$ docker-compose up -d --force-recreate```

dev => ```$ docker compose -f docker-compose-dev.yml up --force-recreate```

test => ```$ docker compose -f docker-compose-test.yml up --force-recreate```

## 2- Sin docker
### 2.1- socialnet-api
  ```$ yarn socialnet-api:dev``` => desarrollo

  ```$ yarn socialnet-api:build``` => construir la app para producción

  ```$ yarn socialnet-api:start``` => echar andar la app para producción

  ```$ yarn socialnet-api:test``` => correr los test
### 2.2- socialnet-chat

  ```$ yarn socialnet-chat:dev``` => desarrollo

  ```$ yarn socialnet-chat:build``` => construir la app para producción

  ```$ yarn socialnet-chat:start``` => echar andar la app para producción

  ```$ yarn socialnet-chat:test``` => correr los test

# Mas documentación dentro de la carpeta de ./docs
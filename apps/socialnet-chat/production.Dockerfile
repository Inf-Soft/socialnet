FROM node:18.4.0 as builder 

COPY ["./package.json", "./yarn.lock", "/usr/src/"]

WORKDIR /usr/src

RUN yarn --only=production

COPY [".", "/usr/src/"]

RUN yarn --only=development

RUN yarn socialnet-chat:test

#--------------------------------------------------------#

FROM node:18.4.0

COPY ["./package.json", "./yarn.lock", "/usr/src/"]

WORKDIR /usr/src

RUN yarn --only=production

EXPOSE 3000

RUN yarn global add typescript \
    && yarn socialnet-api:build

CMD ["yarn", "socialnet-chat:start"]
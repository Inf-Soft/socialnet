FROM node:18.4.0

COPY ["./package.json", "./yarn.lock", "/usr/src/"]

WORKDIR /usr/src

RUN yarn

COPY ["./", "/usr/src/"]

EXPOSE 3000

RUN yarn global add typescript \
    && yarn

CMD ["yarn", "socialnet-chat:dev"]
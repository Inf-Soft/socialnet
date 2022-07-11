FROM node:18.4.0

COPY ["./package.json", "./yarn.lock", "/usr/src/"]

WORKDIR /usr/src

RUN yarn

COPY ["./", "/usr/src/"]

EXPOSE 4000

RUN yarn global add typescript \
    && yarn \
    && yarn socialnet-api:build

CMD ["yarn", "socialnet-api:start"]

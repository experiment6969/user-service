FROM node:16

WORKDIR /workdir
COPY  ../package.json ../yarn.lock ./
RUN yarn install
COPY ../ .

EXPOSE 4001

CMD ["yarn", "start"]
